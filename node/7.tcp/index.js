怎样深拷贝 
深拷贝如果处理原型上的属性和方案


/**
 * OSI网络协议 
 * 七层OSI网络协议 
 * 物理层 -> 数据链路层 -> 网络层 -> 传输层 -> 会话层 -> 表示层 -> 应用层
 * 物理层：网络传输的物理原件 电气件 光纤等
 * 数据链路层：建立网卡到网卡的链接，数据以帧的形式传输（交换机）
 * 网络层：确定ip地址，传递数据包，ip地址对应网卡 数据以包的形式传递（路由器）
 * 传输层：确定端口号，流量控制，差错校验，数据以段的形式传递
 * 回话层：session cookie
 * 表示层：请求头，响应头
 */

 /**
  * TCP/ip协议
  * 物理层 -> 数据链路层 -> 网络层 -> 传输层  -> 应用层
  */
  //它们的区别很抽象 不好描述



  //TCP协议、UDP协议是在传输层实现的
  //http、ftp是在应用层实现的

  /**
   * 讲讲网络层的ip地址 ip地址是对数据链路层的包装 让网络可以找到网卡 每个ip地址占4个字节 32位
   * ip地址分为两个部分 网络部分和主机部分，
   * ip地址根据网络部分 分为A、B、C三类 
   * A类：0NNN.xx.xx.xx
   *     1-126（不能为0，127代表本地）
   * B类：10NN.NNNN.xx.xx
   *    128~191
   * C类：110N.NNNN.NNNN.xx
   *    191~233
   * 
   * 私有ip 不可和公网通信的ip段 在局域网中设置 
   * A:10.0.0.0~10.255.255.255 
   * B:172.16.0.0~172.31.255.255
   * C:192.168.0.0~192.168.255.255
   * 局域网可连接一个路由器，路由器拥有一个公网ip,局域网内的私有ip电脑可共同通过路由器公网ip访问外网
  */


  /**
   * TCP协议（传输控制协议）
   * TCP是面相连接的可靠的进程到进程通信的协议
   * 特点:
   *      可靠的，面向连接的协议
   *      传输效率相对较低
   * 功能：
   *      1：将数据进行分段打包传输
   *      2：对每个数据包进行标号控制顺序
   *      3：运输中丢失重发和丢弃处理
   *      4：流量控制，避免阻塞
   * 
   * TCP不包含ip到网卡的连接，这些已经由网络更底层的网络层完成；
   * 服务器和用户电脑 每个进程都有一个端口 端口号在0~2^16-1 65536个
   * TCP连接基于端口 建立进程到进程的连接 对段数据进行拆分编号排序成包 确保传递数据不丢失
   * 发送数据包记录了包编号n和长度l 下次发送n+l编号的数据包，接收方在收到数据包后也会发送n+1编号回发送方 确保数据已接受
   * 一个TCP包中包含：
   * 源端口号(16位) 目标端口号
   * 32位序列号 32位确认序列号
   * 控制位：
   *         SYN（同步位）：为1代表请求连接
   *         ACK（确认位）: 为1代表接受到请求
   *         FIN（关闭位）：为1代表请求关闭
   *         RST（重置位）：连接断开，重新连接
   *         URG（紧急位）：紧急数据，优先处理
   * 校验和：用于校验传输数据和接受数据是否一致，没有被修改
   * 数据： 传输的数据
   * TCP三次握手：
   *  第一次握手：主机A发送位码为syn＝1，随机产生seq number=1234567的数据包到服务器，主机B由SYN=1知道，A要求建立联机；
   *  第二次握手：主机B收到请求后要确认联机信息，向A发送Ack number=(主机A的seq+1,此处的ack非ACK控制位)，syn=1，ACK=1，随机产生seq=7654321的包；
   *  第三次握手：主机A收到后检查Ack number是否正确，即第一次发送的seq number+1，以及位码ACK是否为1，若正确，主机A会再发送ack number=(主机B的seq+1)，ACK=1，主机B收到后确认seq值与ack=1则连接建立成功
   * TCP四次挥手
   *  客户端发送一个FIN=1，Ack number=1234567(此处表示对于上次传输的数据段的确认),seq number=2333333,主机B由FIN=1知道，A要求建立断开
   *  主机B收到请求后，向A发送ACK=1，Ack number=(2333334)，seq=1234567的ACK包 表示我收到了你的断开请求，但我现在还不能断开
   *  主机B发送完了最后的数据，向A发送FIN=1，Ack number=(2333334)，seq=1234567的FIN包,告诉客户端，我处理完毕了，你现在可以断开了
   *  客户端收到可以断开信息，发送ACK=1,Ack number=(1234568),seq=23333334
   * (seq：32位序列号--本次传递的自己的包编号，Ack number：32位确认序列号--已经收到对方发送来的数据总长度，也等于下次对方应该传递的包编号。客户端和服务端各自的seq初始是随机的，并不相关)

  */

  /**
   * UDP协议
   * UDP是一个无连接不可靠的传输层协议 ，发送方不关心数据是否到达接收方，是否出错，接收方也不会告知发送发方数据是否已到达
   * 优点是结构简单，传输快
   * 一个UDP包中包含：
   *    源端口号(16位) 目标端口号
   *    UDP数据长度（16位） 数据校验和（16位）
   *    数据
   * 应用：
   *    聊天软件
   *    视频直播软件
   * 
   */

 
 /**
  * 数据发送到接收的整个过程
  * 发送方：
  *     发送方是从高层到底层封装数据
  *     1：在应用层将各式各样的数据转化成二进制
  *     2：在TCP传输层中，上层的数据被分割成小的数据段，并为每个数据段封装TCP头部信息(端口、序列号、控制位...)
  *     3：在网络层，上层数据被包装IP头部信息(源ip地址，目标ip地址)，
  *     4：数据链路层，上层数据被包装MAC头部，包含网卡MAC地址，建立网卡到网卡的连接
  *     5：在物理层，将这些二进制数据转化正电信号在网络中传输
  * 
  * 接受方：
  *     接受方是从高层到底层解封装
  *     1：物理层将点信号转成二进制数据，
  *     2：数据链路层将MAC头拆掉，将剩余数据送往网络层
  *     3：网路层将数据ip头拆掉，送往传输层
  *     4：传输层，把TCP头拆掉，将真实数据送往应用层
  * 
  */

 [{
	"success": true,
	"data": [
		[{
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"operation": {
					"doAnswer": true,
					"hasAnswered": false,
					"notShowModal": false,
					"showAnswer": false,
					"tag": "doAnswer"
				},
				"questionId": "1557666",
				"role": "teacher"
			}]],
			"operatorId": "1326468478",
			"operatorRole": "TEACHER",
			"seq": 155
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"questionId": "1557666",
				"operation": {
					"active": false,
					"ansStatus": false,
					"rightAnswerStr": "B",
					"ansStr": "A",
					"answer": [true],
					"timerCount": "00:05",
					"name": "111",
					"sid": "1346247933",
					"src": "https://web-data.zmlearn.com/image/67fd9a36-b762-456e-aa58-1975e29e28c6.png",
					"correctResult": 2
				},
				"role": "student"
			}]],
			"operatorId": "1346247933",
			"operatorRole": "STUDENT",
			"seq": 156
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"questionId": "1557666",
				"role": "student",
				"operation": {
					"sid": "1346247934",
					"active": false,
					"src": "https://web-data.zmlearn.com/image/67fd9a36-b762-456e-aa58-1975e29e28c6.png",
					"name": "123",
					"answer": [null, true],
					"ansStatus": true,
					"timerCount": "00:08",
					"correctResult": 1,
					"rightAnswerStr": "B",
					"ansStr": "B"
				}
			}]],
			"operatorId": "1346247934",
			"operatorRole": "STUDENT",
			"seq": 157
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"questionId": "1557666",
				"role": "student",
				"operation": {
					"timerCount": "00:17",
					"ansStr": "C",
					"ansStatus": false,
					"src": "https://web-data.zmlearn.com/image/67fd9a36-b762-456e-aa58-1975e29e28c6.png",
					"sid": "1346307722",
					"answer": [null, null, true],
					"rightAnswerStr": "B",
					"active": false,
					"correctResult": 2,
					"name": "UaT2"
				}
			}]],
			"operatorId": "1346307722",
			"operatorRole": "STUDENT",
			"seq": 158
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"questionId": "1557666",
				"role": "student",
				"operation": {
					"sid": "1346247939",
					"active": false,
					"src": "https://web-data.zmlearn.com/image/67fd9a36-b762-456e-aa58-1975e29e28c6.png",
					"name": "1231",
					"answer": [null, null, null, true],
					"ansStatus": false,
					"timerCount": "00:23",
					"correctResult": 2,
					"rightAnswerStr": "B",
					"ansStr": "D"
				}
			}]],
			"operatorId": "1346247939",
			"operatorRole": "STUDENT",
			"seq": 159
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"operation": {
					"active": false,
					"ansStatus": true,
					"ansStr": "B",
					"answer": [null, true],
					"correctResult": 1,
					"name": "Uat05",
					"rightAnswerStr": "B",
					"sid": 1346247935,
					"src": "https://web-data.zmlearn.com/image/67fd9a36-b762-456e-aa58-1975e29e28c6.png",
					"timerCount": "00:43"
				},
				"questionId": "1557666",
				"role": "student"
			}]],
			"operatorId": "1346247935",
			"operatorRole": "STUDENT",
			"seq": 161
		}, {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"questionId": "1557666",
				"role": "student",
				"operation": {
					"sid": 1346247937,
					"active": false,
					"src": "https://web-data.zmlearn.com/image/5c1422a1-b134-4f2f-97a2-ed7be34118da.png",
					"name": "1232",
					"answer": [null, true],
					"ansStatus": true,
					"timerCount": "00:58",
					"correctResult": 1,
					"rightAnswerStr": "B",
					"ansStr": "B"
				}
			}]],
			"operatorId": "1346247937",
			"operatorRole": "STUDENT",
			"seq": 162
		},{
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"operation": {
					"doAnswer": false,
					"hasAnswered": true,
					"notShowModal": false,
					"showAnswer": false,
					"tag": "doAnswer"
				},
				"questionId": "1557666",
				"role": "teacher"
			}]],
			"operatorId": "1326468478",
			"operatorRole": "TEACHER",
			"seq": 164
		},  {
			"data": [0, 0, -1, "zmlMessage", ["questionOperation", {
				"operation": {
					"doAnswer": false,
					"hasAnswered": true,
					"showAnswer": true,
					"tag": "showAnswer"
				},
				"questionId": "1557666",
				"role": "teacher"
			}]],
			"operatorId": "1326468478",
			"operatorRole": "TEACHER",
			"seq": 167
		}], "5279"
	]
}]
1346247933-111
1346247934-123
1346307722-UaT2
1346247939-123
1346247935-Uat05
1346247937-1232