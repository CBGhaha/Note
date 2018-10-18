function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.')
    }

    let isSubscribed = true//监听中状态

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    return function unsubscribe() {
      //如果没在监听 中断函数(比如已经执行过unsubscribe函数)
      if (!isSubscribed) {
        return
      }
      //状态停止监听
      isSubscribed = false
      //
      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
    }
  }
