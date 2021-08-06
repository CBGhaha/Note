// 条件类型
interface Fish{
  name:string,
  type:'fish'
}
interface Brid{
  name:string,
  type:'brid'
}
interface Swiming{
  swiming():void
}
interface Fly{
  fly():void
}
type MyType<T> = T extends Fish ? Swiming: Fly;
const sss:MyType<Fish> = {
  swiming(){}
}  

// 排除类型
type T1  = number | string | boolean;
type T2 = Exclude<T1, number>; //  T2后面成了 number｜string
type MyExclude<T, K> = T extends K ? never: T; // 自己实现Exclude
type myT2 = MyExclude<T1, number>;

// 抽取类型
type T3 = number | string | boolean;
type T4 = Extract<T3, number|string>;
type MyExtract<T,K> = T extends K ? T : never; //  自己实现Extract
type myT4 = MyExtract<T3, number|string>;

// 去除null类型
type T5 = NonNullable<string|number|null>;
const t5:T5 = 'sss';

// 推断 infer 可以根据传入的函数泛型类型 推断函数类型的返回值 参数 只要用户infer K来表示对应的类型，最后再返回对应类型
// 获取函数的返回值类型
function getSchool(){
  return {
    name:'ssss',
    address: '湖北'
  }
}
type rType = ReturnType<typeof getSchool>;
type MyReturnType<T>  = T extends (...args:any[])=>infer R ? R:unknown; // 如果T是一个函数类型 那么用R表示函数的返回值的推断类型
type rType2 = MyReturnType<typeof getSchool>;

// 遍历修改类型
// 将属性都变成可选 Partial
interface Person2{
  name:string
  age: number
  sex: string
}
type newPerson2 = Partial<Person2>;
type MyPartial<T> = {
  [k in keyof T]?: T[k] extends object ? MyPartial<T[k]> : T[k]// 遍历接口的类型key 并对key和value做包装
} 
type newPerson2_2 = MyPartial<Person2>;
// 去除所有属性的可选 Required
type newPerson3 =  Required<newPerson2_2>;
type MyRequired<T> = {
  [k in keyof T]-?: T[k] extends object ? MyRequired<T[k]> : T[k]// 遍历接口的类型key 并对key和value做包装
} 
type newPerson3_2 =  Required<newPerson2_2>;

// 挑选类型的部分属性 Pick
type newPerson_pick = Pick<Person2, 'name'|'age'>
type MyPick<T,  O extends keyof T> = {
  [k in O]: T[k] 
}
type newPerson_pick_2 = MyPick<Person2, 'name'|'age'>


// 忽略类型的部分属性 Omit
type newPerson_omit = Omit<Person2,'name'>;
type MyOmit<T,K extends keyof T> = {
  [i in Exclude<keyof T, K>]:T[i]
}
type newPerson_omit_2 = MyOmit<Person2,'name'>;

// 表示key类型一致 和 value一致的对象属性  Record
type ObjType = Record<string, boolean>; // 对象的key都是string类型  对象的value都是boolean类型
const objr:ObjType = {
  name:false,
}
