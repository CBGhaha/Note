/**
 * 分步读取和写入数据 
 * 
 * 
 */
/**
 * 读取流
 * let rs = require('fs').createReadStream(path.join(__dirname, '1.test'));
 * 读取流每次会读取一段数据 
 * rs.on('data', function (data) {
 * 
 */
/**
 * 输出流
 * let ws = require('fs').createWriteStream(path.join(__dirname, 'msg.txt'));
 * let flag=ws.write('streamdata');//写出一段数据  等到输出区缓存满了才会发送 
 * //flag:输出流缓存区是否已满
 * 
 * //输出完成的事件
 *  ws.on('drain', function () {
        console.log('缓存区中的数据已经发送');
    });



    //当写入流过快时，可能会有大量的流数据进入输出流的缓冲区 但这些数据还没来得及写出，缓存区放不下 ，
    这些数据或放入另一个额外缓存区，待输出流缓冲区清空 再调入进去
    console.log(ws.bufferSize);额外缓冲区的大小
 */