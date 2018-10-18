//更换reducer
function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.')
    }

    currentReducer = nextReducer
    //更新reducer之后重新初始化状态树
    dispatch({ type: ActionTypes.INIT })
 }
