/*
    global的常用属性
        console
        process 当前进程
        Buffer
        setImmediate setInterval setTimeout
        clearImmediate clearInterval clearTimeout


*/

/*
process
    nextTick()
    argv --写脚手架是会用到
    chdir() --change direcotry 改变当前工作目录
    cwd()   --current working direcotry 当前工作目录
    memoryUsage() --内存使用状况 V8引擎最多能使用1.7个G内存
        rss --常驻内存
        heapTotal --堆内存的总申请量
        heapUsed  --堆内存已经使用量
        external  --外部内存使用量（Buffer）
    stdout stderr stdin
*/
console.log(process.cwd());
console.log(process.memoryUsage())

/*
    nextTick()  微任务
    setImmediate 把回调函数放在事件队列的尾部 宏任务
    nextTick优先于setImmediate执行 因为在当前执行栈执行完成之后才会执行事件队列
*/