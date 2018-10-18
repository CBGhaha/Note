import isPlainObject from 'lodash/isPlainObject'
import $$observable from 'symbol-observable'

//redux自己创建的action，用来初始化状态树和reducer改变后初始化状态树
export const ActionTypes = {
  INIT: '@@redux/INIT'
}

createStore函数接受三个参数
第一个参数是一个函数 接受当前的state和action返会下一个state 一般我们会用combineReducers redux的内置函数去创建reducer
第二个参数是初始化的state
第三个参数是是一个store的增强器 只能用applyMiddleware方法来创建




export default function createStore(reducer, preloadedState, enhancer) {
  //如果第二个参数为方法且第三个参数为空，则将两个参数交换
  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState
    preloadedState = undefined
  }

  //enhancer和reducer必须为function类型
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.')
    }
    //将enhancer包装一次createStore方法，再调用无enhancer的createStore方法
    return enhancer(createStore)(reducer, preloadedState)
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.')
  }

  let currentReducer = reducer //当前的reducer函数
  let currentState = preloadedState //当前的state树
  let currentListeners = []      //监听函数列表
  let nextListeners = currentListeners  //监听列表的一个引用
  let isDispatching = false      //是否正在dispatch

//将当前监听数组深拷贝给下次监听数组
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice()
    }
  }

  //下面的函数被return出去，函数作为返回值，则形成了闭包，currentState等状态会被保存

  //返回当前state树
  function getState() {
       //...
  }

  //添加注册一个监听函数，返回一个可以取消此监听的方法
  function subscribe(listener) {
       //...
  }

  function dispatch(action) {
      //...
  }

  //替换当前reducer
  function replaceReducer(nextReducer) {
      //...
  }

  function observable() {
      //...
  }

  // 当store被创建的时候，初始化状态树
  dispatch({ type: ActionTypes.INIT })

  return {
    dispatch,
    subscribe,
    getState,
    replaceReducer,
    [$$observable]: observable
  }
}
