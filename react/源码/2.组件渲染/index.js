/*

在组件开始渲染之前 jsx将我们编写的组件进行了编译 将<div><p><span>1</span><span>2</span></p></div>
编译成了：
React.DOM.div(null,[React.DOM.p(null,[React.DOM.span(null,'1'),React.DOM.span(null,'2')])])


react 0.3使用
React.renderComponent:将渲染的组件html挂载到container中 (对应到15.0.0以及往后的版本，就是ReactDOM.render)
    renderComponent会先判断当前的container是否已经挂载了一个component实例
        1:如果它发现container已经挂载了component，则会执行一个更新流程，使用新的component的属性信息，来更新查找到的react组件实例
        2:如果没有会调用mountComonentIntoNode 将component挂载到container上 并记录component和container的映射关系

ReactComponent.mountComponentIntoNode：内部开启了一个事务，事务保证渲染阶段不会触发事件，并阻止didMount生命周期，待组件渲染后执行
    将接收的组件，根组件ID，与container的dom节点传入 ReactComponent._mountComponentIntoNode

ReactComponent._mountComponentIntoNode：首先调用ReactCompositeComponent.mountComponent方法初始化组件，挂载事件并且返回组件的innerHTML(markup)。
    然后把返回的innerHTML更新容器的innerHTML。每次更新前，把容器从document上移除，然后更新innerHTML，最后再挂在到document上。

前面的所有都是一个react实例被挂载到container时触发的方法 接下来的mountComponent是所有复合组件、原生组件、文本组件都执行的方法

核心：
ReactComponent.Mixin.mountComponent:
    1：将组件props中设置的ref挂载到this.refs
    2：设置组件生命周期状态：
        主：组件生命周期：_lifeCycleState，用来校验react组件的在执行函数时状态值是否正确。
            共有两个个枚举值：MOUNTED与UNMOUNTE,用于判断组件是否已经挂载或销毁，供react内方法调用时校验，例setState()
        辅：复合组件生命周期：_compositeLifeCycleState，用来保证setState流程不受其他行为影响。用来判断setState会不会触发组件更新
        this._lifeCycleState = MOUNTED
    3: 设置组件id为遍历id：this._rootNodeID = rootID 
ReactCompositeComponent.mountComponent:
    1：ReactComponent.Mixin.mountComponent.call(...) 
                this._lifeCycleState = UNMOUNTED
                this._compositeLifeCycleState =MOUNTING
    2：校验props 
    3：初始化state，如果有getInitialState函数，把函数返回值赋给this.state,如果有componentWillMount函数，执行。
       componentWillMount中的setState不会触发界面渲染(render函数)，而是保存在this._pendingState属性中，
       在componentWillMount结束后，把this._pendingState属性赋给this.state，仍然不会触发界面更新。
    4：如果组件声明componentDidMount函数，把componentDidMount函数加入到ReactOnDOMReady队列
    5：执行组件的render方法 并返回ReactComponent抽象类实例（ReactComponsiteComponent或ReactNativeComponent)，
       调用相应的mountComponent函数   
       _renderValidatedComponent->render
       render()执行之后：
                this._compositeLifeCycleState = null
                this._lifeCycleState =MOUNTED

ReactNativeComponent.mountComponent:  
    1：ReactComponent.Mixin.mountComponent.call(...)     
    2：校验props 
    3: 返回标签，并包裹传入的标签内的内容
        _createContentMarkup ->mountMultiChild 递归调用mountComponent 
ReactTextComponent.mountComponent:
    1：ReactComponent.Mixin.mountComponent.call(...)  
    2：用span包裹text 返回html
        

复合组件调用mountComponent 设置ReactCurrentOwner.current=this供construct设定组件props[OWNER] 触发自己的render方法 
render方法里原生组件会实例化完毕（construct执行完毕）设置ReactCurrentOwner.current=null
随后得到render的结果=>最外层是原生组件实例 调用原生组件的mountComponent 
_createContentMarkup ->mountMultiChild 递归调用mountComponent (也就是深度先序遍历)

                    原生组件（实例化-即construct执行）
                          |(mountComponent)
          深度先序遍历触发各组件mountComponent(递归)
  复合组件(已实例化)                    原生组件(已实例化)
        |（mountComponent）                   |（mountComponent） 
     render()                            生成html内容并拼接到sum
        |
...各子组件开始深度后续实例化
        |
实例化完毕，深度先序遍历触发各组件mountComponent(递归)
        |（如此循环）
       ...     

      以这样一个react应用为例
      <div><Component/><P>1</P></div>
      1：Component组件实例-p原生组件实例化-div原生组件实例化(按深度后续顺序实例化)
      2：div执行自身的mountComponent ->深度先序遍历Component、p组件并执行其mountComponent
      3：Component mountComponent执行 触发其render() 其内部子组件（复合和原生）实例化 ，完毕后调用返回的组件的mountComponent
        ....
      4：p组mountComponent执行 得到html片段，插入总片段 
*/
