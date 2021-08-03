// 装饰器
// 装饰器只能装饰类 类的属性 类的方法
// 装饰类
function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
  return class extends constructor {
      newProperty = "new property";
      hello = "override";
  }
}
// 装饰方法  target - 类的原型  progertyKey - 方法名  descriptor - 方法的属性描述符（可写、可读等）
function functionDecorator(target, progertyKey:string, descriptor:PropertyDescriptor ){
  console.log('执行函数装饰器:', target, progertyKey ,descriptor);
  // descriptor.enumerable = false;
}
// 装饰属性
function keyDecorator(target, progertyKey:string){
  let value;
  Object.defineProperty(target,progertyKey,{
    get(){
      return value
    },
    set(newValue:string){
      value = newValue.toUpperCase();
    }
  })
}

@classDecorator
class Greeter {
  @keyDecorator
  property = "property";
  hello: string;
  init(){
    console.log("haha");
  }
  @functionDecorator
  say(){
    console.log(this.hello);
  }
  constructor(m: string) {
      this.hello = m;
  }
}
const greeter = new Greeter("world");
greeter.say();
console.log(greeter.property)
// console.log(new Greeter("world"));

// interface接口