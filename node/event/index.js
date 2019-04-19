//node的事件驱动 源自于events这个核心模块 
var EventEmitter=require('events');
class Person extends EventEmitter{
    constructor(){
        super()
    }
    say(){
        this.emit('say')
    }
}
var person=new Person();
person.on('say',function(){
    console.log("I hear something")
});
person.on('say',function(){
    console.log("I hear something twice")
});
person.once('say',function(){
    console.log("I hear something only once")
});
person.say();
person.say();
/* 
    EventEmitter实例方法
        addListener/on(event,listener)      设置监听函数
        emit(event,args)                    发送事件
        listeners(event)                    获取指定事件的所有监听函数
        once(event,listener)                只监听一次事件的触发
        removelistener(event,listener)      删除指定事件的指定监听函数 
        removeAllListeners(event)           删除指定事件的所有监听函数
        

*/