/**
 * @babel/parser 通过该模块来解析我们的代码生成AST抽象语法树
 * @babel/traverse 通过该模块对AST节点进行深度遍历
 * @babel/types 通过该模块对具体的AST节点进行增、删、改、查
 * @babel/generator 通过该模块可以将修改后的AST生成新的代码
 *
 */

/**
 * 在线代码转AST工具：https://astexplorer.net/
 */

// 举例已将log转化为console.log为例

const t = require('@babel/types')
const { parse } = require('@babel/parser')
const { default: traverse } = require('@babel/traverse')
const { default: generate } = require('@babel/generator')

module.exports = function(source) {
  //将原代码编译成AST
  const ast = parse(source)
  // 定义转化的规则
  function createMemberExpression() {
    return t.memberExpression(t.identifier('console'), t.identifier('log'))
  }
  const visitor = {
    // 匹配Identifier类型的节点
    Identifier(path) {
      const { node } = path
      if (node && node.name === 'log') {
        // 转化AST
        path.replaceWith(createMemberExpression())
        path.stop()
      }
    }
  }
  // 执行AST转化
  traverse(ast, visitor)

  // 将AST编译成代码
  const { code } = generate(
    ast,
    {
      /* options */
    },
    codes
  )
  return code
}
