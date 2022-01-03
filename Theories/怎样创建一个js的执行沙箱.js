//1 快照沙箱 但只限于 每次一会存在一个在激活的应用
class Snapshotsandbox{
  constructor(){
    this.proxy = window;
    this.modifyPropsMap = {};// 记录在应用激活期间 window上的变化 供下一次激活的时候使用
    this.active()
  }
  active(){
    this.windowSnapshot = {}; // 拍照 记录初始化的时候window的属性
    for(const prop in window){
      if(window.hasOwnProperty(prop)){
        this.windowSnapshot[prop] = window.prop;
      }
    }
    Object.keys(this.modifyPropsMap).forEach(p=>{
      window[p] = this.modifyPropsMap[p]; // 还原上次修改的window
    })
  }
  inactive(){
    for(const prop in window){
      if(window.hasOwnProperty(prop)){
        if(window[prop]!==this.windowSnapshot[prop]){
          this.modifyPropsMap[prop] = window[prop]; // 记录window
          window[prop] = this.windowSnapshot(prop); // 还原window

        }
      }
    }
  }
}
// proxy代理


class ProxySandBox{
  constructor(){
    const rawWindow = window;
    const fakeWindow = {};
    const proxy = new Proxy(fakeWindow, {
      get(target, p){
        return target[p]||rawWindow[p];
      },
      set(target, p ,value){
        target[p] = value;
        return true;
      }
    })
    this.proxy = proxy;
  }
}
const shadow = new ProxySandBox();


// 一个自执行函数 修改了函数内的window指向
((window)=>{
  // window.a ...

})(shadow.proxy)
