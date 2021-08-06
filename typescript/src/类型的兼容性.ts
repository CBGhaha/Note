// 对已经定义了类型1的变量 进行重新赋值 新值的类型2包含 1的类型要求 那么可以赋值成功
type Pl1 = {
  name:string,
  age:number
}

let pl1:Pl1;

const pl2 = {
  name:'haha',
  age:11,
  sex:'man'
}
pl1 = pl2;

const pl3 = {
  name:'h'
}
// pl1 = pl3; pl3不能重新赋值给pl1因为pl3中未包Pl1中定义的age属性


type Tl1 = (arg:number|string)=>number|string
const tl1:Tl1=(arg:string|number|boolean)=>{
  arg;
  return 1;
}

//函数参数的兼容性
type Sum = <T>(a:T,b:T)=>T[];
const sum:Sum = (a)=>{ 
  return [a]
}
sum('a', 'b')
// const sum2:Sum = (a,b,c,d)=>{ // 不允许出现d 因为Sum只定义了3个参数
//   return [a,b,c,d]
// }

