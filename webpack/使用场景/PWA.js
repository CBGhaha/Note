PWA server worker中的缓存文件列表是静态的 每次打包后的文件列表名字后都带有hash 名称不固定 如果每次手写那么会很麻烦

'serviceworker-webpack-plugin' 用于
new ServiceWorkerWebpackPlugin({
      // 自定义的 sw.js 文件所在路径
      // ServiceWorkerWebpackPlugin 会把文件列表注入到生成的 server-worker.js 中
      entry: path.join(__dirname, 'server-worker.js'),
    })
// server-worker.js 通过global.serviceWorkerOption.assets 获取缓存文件列表
  var cacheFileList = global.serviceWorkerOption.assets;
