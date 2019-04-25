//udp并没有明显的客户端和服务端的区分界限 每个人都可以发送消息

let dgram = require('dgram');
let socket = dgram.createSocket('udp4');
//发消息 
//收消息 在本机的41234端口上监听消息
socket.bind(41234, 'localhost');
//监听对方发过来的消息 remoteInfo
socket.on('message', function (msg, rinfo) {
    console.log(rinfo);
    console.log(msg.toString());
    socket.send(Buffer.from(msg), 0, msg.length, rinfo.port, rinfo.address);
});