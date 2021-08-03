// 函数的泛型
function ff1<T>(arg1:T):[value:T,setValue:(val:T)=>void]{
  return [
    arg1,
    (val:T)=>{
      console.log(val);
    } 
  ]
}
const [state, setState] = ff1<number>(1);
setState(2);

// type + 泛型 描述函数
type Ff2 = <T>(arg:T) => [value:T,setValue:(val:T)=>void];
const ff2:Ff2 = (arg)=>{
  return [
    arg,  
    (val)=>{
      console.log(val)
    }
  ]
}
const [s, k] = ff2('haha');

// interfacce + 泛型 描述函数
interface Ff3{
  <T>(arg):[value:T,setValue:(val:T)=>void]
}
const ff3:Ff3 = (arg)=>{
  return [
    arg,  
    (val)=>{
      console.log(val)
    }
  ]
}
const [r, n] = ff2('bang');

// 接口的泛型
interface Fi1<T>{
  name:T,
  setName(name:T):T
}
const personf1:Fi1<string> = {
  name:'haha',
  setName(name){
    this.name = name;
    return name;
  }
}
personf1.setName("ssss");

// interface+ 泛型 描述class
interface ClassInter1<T>{
  new (arg:string):T
}
function classFactory<T>(clazz:ClassInter1<T>, initArg:string):T{
  return new clazz(initArg)
}
class Fc1{
  constructor(public name){

  }
}
const instance = classFactory<Fc1>(Fc1, 'haha');

// 泛型的约束
// extends
type withLength =  {
  length: number
} // 约束泛型必须有length属性
const computeArrayLength = <K extends withLength,T extends withLength>(arr1:K,arr2:T):number=>{
  return arr1.length+ arr2.length
} 
computeArrayLength<number[], withLength>([1,2,3],{length:2});

// keyof 
function getValue<T extends object, K extends keyof T>(obj:T, key:K){
  return obj[key];
}
getValue({name:'haha'}, 'name')