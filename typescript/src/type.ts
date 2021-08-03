// type 和 interface的一些区别
/**
 * 都可以用来描述一个对象和class 构造函数
 * 和支持合并 也支持互相合并
*/
/**
 * 区别：
 * type 可以声明类型别名，联合类型，元祖, type还可以使用typeof生成类型
 * type更偏重类型本身
 * interface 可以继承
*/

// 类型别名
type myString = string;
const a:myString = 'sss';
console.log(a);

// 联合类型
type myUniteType = string | number;
const b:myUniteType = 1;
console.log(b);

// 元祖类型
type myTuple = [boolean, number];
const c:myTuple = [false, 1];
console.log(c);

// 普通函数类型
type myFnType = (x:number, y:number) => boolean
const fna:myFnType = (x,y)=>{
  return x>y;
}

// class
// 描述一个已经存在的class
class B{
  constructor(public name:string){
  }
}
type classBType = new (name:string) => B;
const clazzB:classBType = B;

// typeof生成类型
let person = {
  name: 'haha', 
  age: 30
}
type Person = typeof person;
const child:Person = {
  name: 'child',
  age: 12
}
fna(1,2)