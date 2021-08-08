namespace Home1  {
  export class Home{} // 在namespace中定义的数据 必须export导出才能被外部调用
}
namespace Home2  {
  export class Home{}
}

const HomeClass1 = Home1.Home;
const HomeClass2 = Home2.Home;

// module和namespace很像  但module一般用来定义外部已有的模块
module Home3{ 
  export class Home{}
}