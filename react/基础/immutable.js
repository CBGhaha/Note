// http://cn.redux.js.org/docs/recipes/UsingImmutableJS.html
// immutable.js --不可变的数据 它的使用不是必须的
为什么使用？
保证数据的不可变 简洁的js拷贝的语法
对于大型复杂的数据集 过多的拷贝对象会消耗内存并降低性能 而immutable在内部通过巧妙的共享数据结构 减少拷贝数据的情况

缺点：
必须使用它特定的语法
一但使用 则会悄然遍布你应用的所有地方 如果使用不当会与原生js数据结构混淆出错
toJS()非常消耗性能 并且即使是同一个immutable数据 toJS()转换为js数据后也会不=== 频繁的使用toJS()反而比不使用immutable.js更加消耗性能

所以不应该直接给给子组件传递immutable数据toJS()Props 因为即使它们的immutable数据是一样的 但它们的js数据每次都不一样 这样子组件每次都会更新


对于immutable toJS()转化为普通js数据 重点在于防止重复触发 toJS() 这就要避免组件的重复渲染造成重复多次转化数据  所以可以利用PureComponent 和componentWillReceiveProps避免重复的转换数据
官方提供了一种高阶组件的解决方案 其核心也是利用connet防重复渲染的原理

export const toJS = WrappedComponent => wrappedComponentProps => {
  const KEY = 0
  const VALUE = 1

  const propsJS = Object.entries(
    wrappedComponentProps
  ).reduce((newProps, wrappedComponentProp) => {
    newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
      wrappedComponentProp[VALUE]
    )
      ? wrappedComponentProp[VALUE].toJS()
      : wrappedComponentProp[VALUE]
    return newProps
  }, {})

  return <WrappedComponent {...propsJS} />
}
//-----------------------------------------------------------------------
import DumbComponent from './dumb.component'

const mapStateToProps = state => {
  return {
    // obj 是一个 Smart 组件中的不可变对象，
    // 但它通过 toJS 被转换为普通 JavaScript 对象，并以纯 JavaScript 的形式传递给 Dumb 组件对象。
    // 因为它在 mapStateToProps 中仍然是 Immutable.JS 对象，
    // 虽然，这是无疑是错误重新渲染。
    obj: getImmutableObjectFromStateTree(state)
  }
}
export default connect(mapStateToProps)(toJS(DumbComponent))

















//
