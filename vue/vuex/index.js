/*
 *
 * Store:每一个 Vuex 里面有一个全局的 Store，这个 State 是单一的，和 Redux 类似。
 *       Vuex通过 store 选项，把 state 注入到了整个应用中，这样子组件能通过
 *       this.$store 访问到 state 了。
 * Mutation:修改state的地方 和redux的reducer类似 但vuex不要求数据不可变（每次返回新的state）
 *          Mutation:{
 *            increaseNum(state,num){
 *                state.num=num            
 *            }
 *          }
 * actions：相当于一个中间件  执行一
 * 些一步操作 最后是通过commit触发Motation
 * @function store实例的方法
 * commit: commit("increaseNum",1024) 同步修改state
 * dispatch: 触发actions dispatch("actionName",data)
 *
 * @property store的属性
 * state：访问store的属性
 *
 *  
 * */
