/*
 * 声明文件 ， 只是用来定义一些模块 或者变量  class的类型, 
 * 表示它们存在 只是typescript可能不知道它来自哪里、在何处定义过
 * 用来解决typescrit的语法校验 声明文件并不会真正声明和定义这些数据和变量 只是对它们进行描述
 * 声明文件不能用来创建枚举 因为它不会有真正的枚举值 只有类型
 **/

// 声明一个class Hj 表示现在全局有一个Hj的类
declare class Hj{
  constructor(name:string);
  say(content:string):void;
  name:string;
}

// 声明一个接口 表示全局存在这个接口
declare interface Cb {
  (name:number):boolean
}

const cb:Cb = (arg:number)=>{
  return arg>1
}

// 声明一个模块 表示你引入这类模块时 模块包含这些属性或方法
declare module '*.less' {
  const content:Record<string, any>;
  export default content;
}
declare module '*.vue' {
  const component:object; // 外部可以直接获取vue文件类型中有component
}

// 声明一个函数 表示全局存在这个函数 你不用管他是在哪里声明的，你直接调用它ts不会抛出异常
declare function handleFun(params:string):boolean;
declare namespace handleFun{ // 将函数和命名空间合并
 const name :string;
}