/*
二进制：0b
八进制：0o
十六进制：0x
*/
console.log(0b1000001)
console.log(0o101)
console.log(0x41)
// 进制的转化
// 任意进制转十进制
console.log(parseInt(0b1000001));
//十进制转任意进制
let a=100;
console.log(a.toString(2),a.toString(8))
/*
    ASCII：最先的编码是ASCII码 由美国支持 每个字符用一个字节表示
           一个字节是8位 可以表示256个不同的字符， ASCII只使用了127个，字节第一位为空。
    GB:   中国为中文字符扩充的字符编码，在  ASCII码基础上扩充中文字符 ，在  ASCII中存在的字符占一个字节，中文字符占两个字节
    Unicode: ISO组织为同一标准制定的编码规范，任何字符都占两个字节16位。
    utf-8:utf-8是在Unicode基础上拓展的一种编码，随着互联网流行得到广泛应用，一个utf-8字符占1~4个字节，根据字符来决定。

*/