var http=require("http");
var util=require('util');
/*
    tcp net模块也是createServer创建服务
    connection、error事件
*/

var server=http.createServer();
/*
    req和res都是流对象
    req是可读流 有data事件
    res是可写流 有write事件
*/
//客户端连接时触发
server.on('connection',(socket)=>{
     
})
//客户端发送连接时触发
server.on('request',(req,res)=>{
    console.log(req.method);//请求方式
    console.log(req.url);//请求路径
    console.log(util.parse(req.url,true));
    console.log(req.headers);//请求头
    //请求体是一个流 用流对象的data事件获取请求体
    var result=[];
    req.on('data',function(data){
        result.push(data);
    })
    //end事件监听请求体读取完毕
    req.on('end',function(data){
        let r=Buffer.concat(result);
        console.log(r.toString());
        res.end(data);
    })
})
/**
 * 也可以这么写,直接传递函数给server的"request"事件
 * var server=http.createServer((req,res)=>{
 *      ...
 *  
 * });
 * 
 * 
 */
server.on('error',(err)=>{
    console.log('error:',err)
})
server.listen('8080',function(){
    console.log('server is running 8080')
})