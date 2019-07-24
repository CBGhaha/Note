var React = {
  //....
  createClass: function(spec) {
    // 组件的实例化构造函数
    var Constructor = function(initialProps, children) {
      this.construct(initialProps, children)
    }
    // 复合组件都继承于ReactCompositeComponentBase
    Constructor.prototype = new ReactCompositeComponentBase()
    // 修改组件的constructor 用于判断组件是否相等
    Constructor.prototype.constructor = Constructor
    // 将组件属性（state,生命周期）混合
    mixSpecIntoComponent(Constructor, spec)
    // 判断组件是否有render方法
    invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    )

    // 每次组件实例都会实例化一次组件的构造函数
    /**
     * 为什么需要用ConvenienceConstructor包裹一层Constructor？
     * 因为需要保证每个实例化组件都是组件构造函数的实例化 各自有各自的方法和生命周期
     *
     */

    var ConvenienceConstructor = function(props, children) {
      return new Constructor(props, children)
    }
    ConvenienceConstructor.componentConstructor = Constructor
    ConvenienceConstructor.originalSpec = spec
    return ConvenienceConstructor
  }
  // ....
}
/**
 * 在15之前通过createClass创建class复合组件 在15之后统一通过createElement创建组件
 * 每个组件在编写好后其实是一个函数
 * 接受props和children 传递给组件实例构造函数 实例化并返回组件
 *
 * 当你编写好一个组件的时候那么这个组件就相当于是ConvenienceConstructor
 * 当你使用这个组件的时候相当于调用了ConvenienceConstructor()
 * <Tab nav={...}>
 *  1111
 * </Tab>
 * // 这里的nav作为props 1111作为children传递给ConvenienceConstructor(...)
 *
 *
 */
