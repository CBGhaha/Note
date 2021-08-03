// 约束对象
interface Obj1 {
  name: string
  age: number
}
const obj1:Obj1={
  name:'haha',
  age:20
}

// 约束函数
interface Obj2 {
  (name:string, age:number): object
}
const createObj:Obj2 = (name,age) => {
  return {
    name,
    age
  }
}

// 约束类
interface Class1 {
  name:string
  age:number
  say(content:string):string
}

class C1 implements Class1{
  constructor(public name, public age){
  }
  say(content){
    console.log(content);
    return content;
  }
}

// 描述一个已存在的类
// 当你需要描述一个变量是一个类的时候 （通常是由于一个类被赋值给了一个新的变量）const class:ClassInterface = SomeClass
interface ClassInterface{
  new(name:string, age:number):C1 
}
function createClass(clazz:ClassInterface){
  return new clazz('bang', 11);
}