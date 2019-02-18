在ssr 服务端打包中webpack的配置重点
1：target:'node' --指定代码运行环境为nodeJs webpack会忽略打包node的内置模块 例如fs http
2：'ignore-loader' --处理图片和css 忽略项目中引入的css和图片 在node环境中图片不需要 css无法解析
3：output:{
  libraryTarget:'commonjs2'
}   --以commonjs2模块输出打包的代码 以供node服务js调用
4：externals: [nodeExternals()]  --排除node_module中的第三方模块 不将其打包进输出文件中
var webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path=require('path');
const config={
  //配置模块的读取和解析规则
  entry:{
      main:path.resolve(__dirname,'src/server/appHtml.js'),
  },
  mode:'production',
  module:{
    rules:[
      {
        test:[/\.css/,/\.less/],
        //忽略css
        use: ['ignore-loader'],

      },
      {
        test:/\.js/,
        use:[
          {
            loader:'babel-loader',
          }
        ],
        exclude:path.resolve(__dirname,'node_module')
      },
      {
        test: /\.(png|jpg|gif|jpeg)/,
        use: ['ignore-loader'],
      },

    ]
  },

  output: {
    // 为了以 CommonJS2 规范导出渲染函数，以给采用 Nodejs 编写的 HTTP 服务调用
    libraryTarget: 'commonjs2',
    path:path.resolve(__dirname,'distserver'),
    filename:"[name].js",
    publicPath:'/',
    chunkFilename:"[name].[chunkhash:8].js",//在entry中未定义的js 一般是动态按需加载时的js
    crossOriginLoading:'anonymous',
  },
  resolve:{
    alias:{
        components:path.resolve(__dirname,'src/components'),//匹配路径components
      },
    extensions:['.js','.less','.json','.jsx'],
    modules:['node_modules'],


  },
  plugins:[
    new CleanWebpackPlugin(['distserver']),//每次编译 清空dist文件夹
  ],
  //为了不把 Node.js 内置的模块打包进输出文件中，例如 fs net 模块等
  target:'node',
  devtool: 'source-map' ,
  //为了不把 node_modules 目录下的第三方模块打包进输出文件中
  externals: [nodeExternals()],
};
module.exports=config;
