// class 类
// ts中相比es6的增加了属性和方法的描述符 private public protected readonly
// public 父类 子类 类的实例都可以访问
// private 只能在父类中访问，子类、子类实例、父类的实例都不能访问
// protected 只能在父类和子类中访问 ，不能在父类的实例和子类的实例中访问
class Fathor{
  protected age = 28;
  readonly sex = 'man';
  constructor(private name){

  }
  say(){
    console.log(this.name);
  }
}
class Child extends Fathor{
  constructor(name){
    super(name);
    // console.log(this.name); 不可访问
    console.log(this.age);
  }
}
const fathor  =  new Fathor('haha');
const child1 =  new Child('haha');
console.log(fathor,child);
console.log(child1.sex);
// console.log(fathor.name) 不可访问
// console.log(child.name) 不可访问
// console.log(fathor.age) 不可访问
// child.sex = 'ja'  不可修改


// 抽象类 可以做到interface定义类属性和方法约束（使用abstract描述符）  也可以实现具体的属性和方法
abstract class Ac1{
  abstract name:string
  say(){
    console.log(this.name)
  }
}
class Child2 extends Ac1{
  constructor(public name){
    super()
  }
}
const child2 = new Child2('bang');
child2.say();



