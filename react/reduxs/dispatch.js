function dispatch(action) {
    //action必须是一个包含type的对象
    if (!isPlainObject(action)) {
      throw new Error(
        'Actions must be plain objects. ' +
        'Use custom middleware for async actions.'
      )
    }

    if (typeof action.type === 'undefined') {
      throw new Error(
        'Actions may not have an undefined "type" property. ' +
        'Have you misspelled a constant?'
      )
    }

    //如果正处于isDispatching（正在dispath）状态，报错
    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.')
    }

    try {
      isDispatching = true
      //这里就是调用我们reducer方法的地方，返回一个新的state作为currentState
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }

    //每次dispath后 有一个新的state 那么久调用所有的监听函数
        //将nextListeners拷贝给currentListeners
    const listeners = currentListeners = nextListeners
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }

    return action
  }
