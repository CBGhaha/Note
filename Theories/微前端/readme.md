微前端和普通的单页面应用区别
普通单页面应用项目很大时维护成本高 发布时所有服务down掉 代码臃肿

微前端和iframe嵌入之间的区别
iframe嵌入的子应用无法解决子应用弹窗区域问题 无法解决主应用刷新 也面状态路由丢失问题


1. single-spa可以注册很多子应用
每个子应用在被组册后都会有自己整个应用的状态   -- app.helper.js
在子应用中的各种状态更新的时候会触发子应用更新的各个状态钩子

2. 注册子应用后 会调用 reroute 执行各个app的预加载 执行定义的bootstrip方法

3. 应用的start也会执行reroute方法 此时会挂载应该被挂载的应用

4. 路由或hash切换的时候，single-spa会重新执行reroute 找到当前应该挂载的应用 并卸载之前的应用

5. single-spa重写了 关于histroy的方法 让histroy的state变化可监控 也拦截了app当中对hash变化的监听， 当应用切换挂载完毕后才会执行这些事件。


qiankun
乾坤依赖于single-spa
1. 在single-spa的基础上做了资源加载器的优化 可以直接解析子应用html里的资源 不用像single-spa那样维护每个资源的资源清单
2. 做了更好的css和js的隔离 沙箱机制