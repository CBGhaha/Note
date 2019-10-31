/**
 *1:setState 复合组件调用setState setState内合并this.state||this._pendingState和传入的修改的state属性；然后调用replaceState
 *2: replaceState执行判断
    1： this._lifeCycleState === MOUNTED ||
        _compositeLifeCycleState === MOUNTING,  =>render执行完毕 或组件在mountComponent到render执行前（willMount）
    2:  compositeLifeCycleState !== RECEIVING_STATE &&
        compositeLifeCycleState !== UNMOUNTING,  =>组件不在触发_receivePropsAndState()执行更新中或组件为被销毁
    3：compositeLifeCycleState !== MOUNTING &&
       compositeLifeCycleState !== RECEIVING_PROPS =>组件首次render已执行完毕且组件未在触发_receivePropsAndState()
  3：触发_receivePropsAndState()
                  |
        判断shouldComponentUpdate
       |（false）                |(true)
仅仅更新props和state      调用_performComponentUpdate
                                 |
                         判断componentWillUpdate并执行 更新props和state 调用this.updateComponent
                         将componentDidUpdate加入getReactOnDOMReady队列
                                 |
                         执行_renderValidatedComponent获取新的render结果：nextComponent  与_renderedComponent上次render结果对比 
                         判断render()返回的组件的件类型和上次render的结果的类型是否一致(通过组件的constructor)
                            |true                                |false
              currentComponent.receiveProps         执行_renderedComponent的unmountComponent 
                                                    执行nextComponent.mountComponent 渲染新组件 
                                                    dangerouslyReplaceNodeWithMarkupByID获取新组件的dom text并插入              

 */
