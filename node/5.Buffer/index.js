/*
    缓冲区buffer是暂时存放输入输出数据的一段内存
    JS语言没有二进制数据类型，而处理tcp和文件流的时候，必须要处理二进制数据
    JS提供了一个Buffer对象来提供对二进制数据的操作
    buffer是一个表示固定内存分配的全局对象，在定义时它的大小就被确定了不能修改
    buffer好比由8位字节元素组成的数组 
    （在打印时每个元素用16进制表示，所以一个元素的编码表示是长度两个的字符串）
*/
//初始化创建一个6个字节长度的buffer
let buf1=Buffer.alloc(6);
//通过字符串创建buffer 
let buf2=Buffer.from('我是');
//一个中文字在utf8占3个字节 所以buf2大小为6个字节 三个字节拼凑成一个字符的编码（16进制）
console.log(buf2);
/*
    buffer的方法
    write("内容",'初始索引',"占buffer长度") //只能写字符串
    toString() buffer装字符串
    clice(startIndex,endIndex)
    Buffer.concat([buf1,buf2])
*/
//在字符写入buffer时它所占据的buffer的元素个数（字节）就确定了  比如中文就是三个 在调用toString时就3个组合后读取字符，英文字母和数字占据1个
console.log(buf2.toString());

//数字在buffer中默认占1个字节 writeInt16BE用两个字节写入数字
buf1.writeInt16BE(300,0);
console.log(buf1);
console.log(buf1.toString());
console.log(buf1.readInt16BE())

