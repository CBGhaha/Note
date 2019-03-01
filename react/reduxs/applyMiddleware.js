export default function applyMiddleware(...middlewares) {

  //return一个函数，它可以接受createStore方法作为参数，给返回的store的dispatch方法再进行一次包装
  return (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer)
    let dispatch = store.dispatch
    let chain = []

    //暴露两个方法给外部函数
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)//为什么这么写 直接写dispath? 可能是避免在中间件中改写dispatch造成全局污染
    }

    //传入middlewareAPI参数并执行每一个外部函数，返回结果汇聚成数组
    chain = middlewares.map(middleware => middleware(middlewareAPI))

    [next => action =>{ console.log(1);return next(action)},next => action =>{console.log(2);return next(action)}]//由于上一步所以这里说有函数成员都能拿到middlewareAPI
    // 数组成员1执行之后的内容 作为参数传递给 数组成员0
    function(action){
        console.log(2);
        return store.dispatch(action)
    }
    //数组成员0执行之后的内容
    function (action){
      console.log(1);//这里的console.log可以是一些其他针对action的操作 比如如果action是函数 或则action是一个异步操作 在执行完必要操作后调用next或者dispatch交给下一个中间件或则reducer
      return (function(action){
          console.log(2);
          return store.dispatch(action)
      })(action)

    }




    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
