var path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const config={
  entry:{
    app:path.resolve(__dirname,'index.js')
  },
  output:{
    filename:'[name].[hash:5].js',
    path:path.resolve(__dirname,'dist'),
    publicPath:'/',
    chunckFileName:'[name].[chunckHash:8].js'
  },
  mudule:{
    rules:[
      {
        test:/\.js|\.jsx/,
        use:[
          'style-loader',//将计算后的样式加入页面
          {
            loader:'css-loader',
            options:{
              minimize:true,
              module:true
            }
          },
          'less-loader',
          {
            loader:'postcss-loader',
            options:{
              plugin:[
                require('autoprefixer')({
                  browsers:['last 10 version']
                })
              ]
            }
          }
        ]
      }
    ]
  },
  resolve:{
    alias:{
      components:path.resolve(__dirname,'src/components')
    },
    extensions:['.js','.less','.css']
  },
  plugins:[
    new HtmlWebpackPlugin({
      name:'index.html',
      template:path.resolve(__dirname,'index.html')
    })
  ]
}
