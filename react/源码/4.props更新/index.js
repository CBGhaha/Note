/**
 * props属性更新其实是state状态更新的一种延续--只有父组件的state的修改才会触发其下组件树的props更新
 * 接着上一章 currentComponent.receiveProps
 *                               currentComponent.receiveProps
 *                                             |
 *         如果是复合组件执行：                                               如果是原生组件执行
 * ReactCompositeComponent.receiveProps                               ReactNativeComponent.receiveProps
 *                |                                                                 |
 * 设置组件_compositeLifeCycleState=RECEIVING_PROPS;                assertValidProps校验组件新props(dangerouslySetInnerHTML,和children不能都存在，style不能是string...)
 * 如果组件有componentWillReceiveProps执行;                          执行this._updateDOMProperties 对比新旧props 把需要更新的操作推入队列最后统一批量执行
 * 设置组件_compositeLifeCycleState=RECEIVING_STAT 防止render;       执行this._updateDOMChildren执行当前dom下children diff
 * 获取componentWillReceiveProps之后的state;                                        ...
 * 递归调用本组件的_receivePropsAndState();                           diff中如果遇到不需要新增，删除，只需要修改props的子组件则递归调用其receiveProps
 * 设置_compositeLifeCycleState = null;                              遇到删除的 推入队列
 *              ...                                                 遇到移动的 推入队列
 * 一个复合组件无论嵌套再多层 最后都是会遇到一个原生组件包裹着的组件
 *
 */
