//single-spa.js

// 注册app
singleSpa.registerApplication('app1', 
  async ()=>{
    return {
      bootstrap: async() => {},
      mount: async() => {},
      unmount: async() => { }
    }
  },
  // 应用何时被激活 开始加载资源
  location=>location.hash.startWith('#/app1'),
  {store:{name:'zf', age:10}} // 初始化的一些信息
)
singleSpa.start() // 开始挂载应用卸载