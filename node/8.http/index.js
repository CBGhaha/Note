/**
 * 代理：代理是针对客户端的 服务器不能直接访问目标服务器 由代理服务器请求目标服务器 再返回给客户端
 * 作用：
 *       可以利用缓存减少网络请求
 *       组织内部针对网络访问控制
 *       获取访问日志
 * 
 * 
 * 网关：网关是针对服务端来说的 客户端请求 我请求不对外公开的私有的服务器得到数据再返回给客户端 比如数据库
 * 作用：提高系统安全性 
 * 
 */
/**
 * http服务器是继承自tcp服务器 http协议是应用层协议，是基于tcp的 
 * http在tcp协议的基础上对请求和响应数据做了包装
 */

 /**
  * http头部字段可分为：通用头部字段、请求头部字段、响应头部字段、实体头部字段
  * 通用头部字段：
  *     1、Cache-Control
  *     2、Connection
  *     3、Date
  * 请求头部字段：
  *     Host:请求的主机地址和端口  47.97.5.188
  *     User-Agent:客户端信息	
  *     Referer：告诉服务器请求来自哪里 “localhost:8080/a”
  *     Accept：告诉WEB服务器自己接受什么介质类型，* 表示任何类型，type /* 表示该类型下的所有子类型
  *     Accept-Charset：浏览器告诉服务器自己能接收的字符集。
  *     Accept-Encoding：浏览器申明自己接收的编码方法，通常指定压缩方法，是否支持压缩，支持什么压缩方法（gzip，deflate）。
  *     Accept-Language：浏览器申明自己接收的语言。语言跟字符集的区别：中文是语言，中文有多种字符集，比如big5，gb2312，gbk等等。
  *     If-Modified-Since：资源上次修改的时间 用于和服务器对比判断缓存是否失效 Thu, 14 Mar 2019 07:22:27 GMT 返回服务器上次传来的Last-Modified
  *     If-None-Match：和If-Modified-Since相似 返回服务器上次传来的Etag标志
  * 响应头部字段：
  *     Age：代理缓存资源已存在时间
  *     Server：服务器信息
  * 实体头部字段:
  *     Allow:服务器支持哪些请求方法（如GET、POST等）。
  *     Content-Type：服务端返回的资源类型和编码格式 text/html; charset=GB2312
  *     Location：重定向并 常配合状态码302一起 
  *     Content-Encoding:WEB服务器表明自己使用了什么压缩方法（gzip，deflate）压缩响应中的对象。例如：Content-Encoding：gzip   
  *     Content-Length:实体长度
  *     Etag:资源标志
  *     Last-Modified：服务器资源最后修改时间
  *     Expires：http1.0时代 Cache-Control未出现时的产物
  *     
  */