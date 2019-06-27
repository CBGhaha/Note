/**
 * 1：render props
 *<Parents data={...} render={(data)=><Child data={data}/>} />
 *
 * function Parents(props){
 *  return props.render(props.data)
 * }
 *
 * 或则
 * <Parents data={...}>
 *    {(data)=><Child data={data}/>}
 * </Parents>
 *
 * function Parents(props){
 *    return props.children(props.data)
 * }
 *
 *
 *
 */

/**
 *2:HOC
 */

/**
 *3:Context上下文也可以做到一定的逻辑复用
 */

/**
 *4：Hooks
 *
 */
