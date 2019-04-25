//创建一个tcp服务器 它是相较于http更底层的通信服务 
var net=require('net');
let server=net.createServer({},function(socket){
    server.maxConnections=5;//允许同时连接客户端最大数
    console.log("客户端已连接地址为：",socket.address());
    server.getConnections((err,count)=>{
        console.log(`有${count}个用户连接`);//获取同时连接的用户数
    })
    socket.setEncoding('utf8');
    //监听客户端发送消息
    socket.on('data',function(data){
        console.log("接受到客户端发来的数据：",data);
        socket.write("recive data:"+data);
    })
    //服务器收到客户端关闭连接请求
    //在这个地方 客户端并没有真正的关闭 只是请求关闭 真正关闭的时候还会触发close事件
    socket.on('end',function(){
        console.log('客户端关闭连接')
    })
    socket.on('close',function(){
        console.log('客户端已经关闭连接')
    })
    socket.on('error',function(err){
        console.log('err:',err)
    })
})
server.listen('8080',function(){
    console.log('服务端地址为：'+server.address());
} );

//可以用telnet模拟客户端 与服务端tcp服务器通信 telnet localhost 8080