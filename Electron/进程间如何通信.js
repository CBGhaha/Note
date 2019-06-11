/*同步消息通信：*/
// 主进程：
const { ipcMain } = require('electron')
//主进程接收同步事件 返回结果
ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})

//渲染进程
//渲染进程发送同步事件并拿到结果
const { ipcRenderer } = require('electron')
const syncMsg = ipcRenderer.sendSync('synchronous-message', 'ping') // "pong"

/*异步消息通信*/
// 主进程：
const { ipcMain } = require('electron')
//主进程监听渲染进程发送来的"asynchronous-message"事件
ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  //向渲染进程返回一个"asynchronous-reply"事件
  event.reply('asynchronous-reply', 'pong')
})

//渲染进程:
// 向主进程发送一个"asynchronous-message"事件
ipcRenderer.send('asynchronous-message', 'ping')
ipcRenderer.on('synchronous-reply', (event, args) => {
  console.log(args) //"pong"
})
