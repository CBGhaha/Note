/**
webpack的代码分离有3种途径
1：增加入口起点
entry；{
  app:__dirname+'/src/app.js',
+ other:__dirname+'/src/other.js',
}

2:防止重复
plugns:[
   new webpack.optimize.CommonsChunkPlugin({
     name: 'common' // 指定公共 bundle 的名称。
   })
]
//在webpack4中在optimization.splitChunks配置
webpack会将公共模块单独打包

3:动态导入
在output中加入chunkFileName
output:{
  chunkFileName:[name].[chunckhash].js
}
在文件中动态导入模块
import ((\/* webpackChunkName: item.name *\/ someModulePath`)).then((module)=>{ ... })
webpack会将动态导入的module单独打包  (按需加载其实就是异步动态导入 不过在配置路由时各个框架有自己不同的将按需加载模块加入路由的配置方法 比如react和vue)

vue的代码分离是利用vue的component 异步组件的配置  ---https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6
react的代码分割 一个工厂函数返回异步组件 ansyc componentDidMount await 组件加载完毕(import())，存入state render渲染组件 
*/

/** 
 * webpack4的代码分割
*/
config = {
  //...
  optimization: {
    splitChunks: {
      //在cacheGroups外层的属性设定适用于所有缓存组，不过每个缓存组内部可以重设这些属性
      chunks: "async", //将什么类型的代码块用于分割，三选一： "initial"：入口代码块 | "all"：全部 | "async"：按需加载的代码块
      minSize: 30000, //大小超过30kb的模块才会被提取
      maxSize: 0, //只是提示，可以被违反，会尽量将chunk分的比maxSize小，当设为0代表能分则分，分不了不会强制
      minChunks: 1, //某个模块至少被多少代码块引用，才会被提取成新的chunk
      maxAsyncRequests: 5, //分割后，按需加载的代码块最多允许的并行请求数，在webpack5里默认值变为6
      maxInitialRequests: 3, //分割后，入口代码块最多允许的并行请求数，在webpack5里默认值变为4
      automaticNameDelimiter: "~", //代码块命名分割符
      name: true, //每个缓存组打包得到的代码块的名称
      // 缓存组
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, //匹配node_modules中的模块
          priority: -10, //优先级，当模块同时命中多个缓存组的规则时，分配到优先级高的缓存组
        },
        default: {
          minChunks: 2, //覆盖外层的全局属性
          priority: -20,
          reuseExistingChunk: true, //是否复用已经从原代码块中分割出来的模块
        },
      },
    },
  },
};
/***
  name（默认为 true），用来决定缓存组打包得到的 chunk 名称，容易被轻视但作用很大。
  奇特的是它有两种类型取值，boolean 和 string：

  值为 true 的时候，webpack 会基于代码块和缓存组的 key 自动选择一个名称，这样一个缓存组会打包出多个 chunk。

  值为 false 时，适合生产模式使用，webpack 会避免对 chunk 进行不必要的命名，以减小打包体积，
  除了入口 chunk 外，其他 chunk 的名称都由 id 决定，所以最终看到的打包结果是一排数字命名的 js，
  这也是为啥我们看线上网页请求的资源，总会掺杂一些 0.js，1.js 之类的文件(当然，使资源名为数字 id 的方式不止这一种，懒加载也能轻松办到，且看下文)

  值为 string 时，缓存组最终会打包成一个 chunk，名称就是该 string。
  此外，当两个缓存组 name 一样，最终会打包在一个 chunk 中。
  你甚至可以把它设为一个入口的名称，从而将这个入口会移除。
 
*/