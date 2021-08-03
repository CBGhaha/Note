// 交叉类型 &
interface Person1{
  name:string
  // other: boolean
  
}
interface Person2{
  age:number
  // other: undefined
}
type finalPerson = Person1 & Person2; // 如果两个类型中存在冲突  那么将合并成never类型
const personInstance:finalPerson = {
  name:'s',
  age:11,
}


function mixin<T extends object,K extends object>(o1:T,o2:K):K&T{
  return {...o1, ...o2}
}
let sssss = mixin({name:'haha'}, {age:'18'})
console.log(sssss.name);