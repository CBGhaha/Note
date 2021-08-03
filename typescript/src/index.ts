import './type'; // type
import './function'; // 函数
import './class';
import './decorator';
import './interface';
import './fanxing';
// 基本类型
// number string boolean 数组 元祖 enum any void Object
// type SS = {
//   [key:string]:number
// }
// const ss:SS = {
// }

// 元组 
// 定义数组的每一位的子元素的类型
const tuple :[string, number, boolean] = ['a', 1, false];
// 各个元素的值可以修改 但类型不能修改
tuple[0] = 'haha';
// 可以增加和删除元素, 但新增元素中能是元组中定义的类型
tuple.push(9);


// 枚举


// ! 断言对象一定有值
const ele  = document.getElementById('app');
ele!.innerHTML = "<div>sss</div>";

// ？ 访问对象的属性，如果属性存在 则继续访问
const obj:any = {
  value:{
    name:'haha'
  }
}
const name = obj?.value?.name;
const age = obj?.data?.age;
console.log(name, age);


