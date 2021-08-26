/*
    AMD require.js
    CMD sea.js
    common.js node
    es6 module
    umd AMD+CMD+common+es6
 */


/*
    每个模块在被引用时都被包装成了一个自执行函数 这个自执行函数会传入如下五个参数
    (exports,require,module,__filename,__dirname)
    所以在每个模块内都可以使用这些自带的变量
    module:代指当前模块 里面包含了模块的一些信息 id，children parents loaded(是否加载完成)
    exports: ===module.exports ,也被赋值给了module的exports属性 代表该模块向外输出的对象或数据
    require:全局的公用方法 ，用于引用模块 ，该方法全局公共 包含一些整个程序的属性 main(主入口)，resolve()方法(获取文件绝对路径但不加载) extensions(文件后缀省略)
    __filename:当前文件的绝对路径
    __dirname:当前文件夹的绝对路径

*/
//模块引入的过程：
/*  
    requie(./a.js) requie全局方法执行 读取a.js代码 
    根据a模块生成a模块的module 设置exports并赋值给module.exports  
    生成a模块的__filename,__dirname
    在a模块代码后加入 \/n return exports;
    生成自执行函数 加入函数内代码 传入参数 执行
*/
//假设实现
var fs=require('fs');
const path = require('path');
function myrequire($path){
    class Module{
        constructor(){
    
        }
    }
    var module=new Module();
    var exports;
    module.exports = exports;
    //根据path读取文件内容
    var content=fs.readFileSync(path.resolve(__dirname, $path),'utf8');
    return new Function('exports','require','module',content+'\n module.exports = exports; return module.exports')(exports,myrequire,module)
 
}
var a = myrequire('./a.js');
console.log('a:',a);
console.log(module.exports===exports)