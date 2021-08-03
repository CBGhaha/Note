// 函数类型

// 用tpye定义函数的类型
type HandelClick = (e:MouseEvent)=>boolean;
const handleClick1:HandelClick = (e)=>{
  const x = e?.clientX;
  const y = e?.clientY;
  return x>y
}

//  用interface定义函数
interface HandleClick2{
  (e:MouseEvent):boolean
}
const handleClick2:HandleClick2 = (e)=>{
  const x = e?.clientX;
  const y = e?.clientY;
  return x>y
}
//  function 自己定义
function handleClick3(e:MouseEvent):boolean{
  const x = e?.clientX;
  const y = e?.clientY;
  return x>y
}

// 函数的重载  如果一个函数根据不同的参数类型 会返回不同的结果类型 那么可以使用函数的重载
function fn1(name:number):boolean
function fn1(name:string):string
function fn1(name: string|number){
  if(typeof name == "number"){
    return !!name;
  }
  if(typeof name == "string"){
    return name;
  }
  return  null;
}
fn1('haha');

// 函数返回值的类型保护
// 针对判断类型的 boolean返回与val类型相关
function isString(val:unknown):val is string {
  return typeof val === 'string';
}
const aa = 'haha';
if(isString(aa)){
  aa.substr // 这里对aa可以实用化string的方法
}