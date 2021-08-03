// rollup的配置

import resolvePlugin from '@rollup/plugin-node-resolve';
import tsPlugin from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';


const path = require('path');

// // 根据环境变量中的target属性 获取对应模版中的package.json
// const packageDir = path.resolve(__dirname, `./packages/${process.env.TARGET}`);

// const resolve = (file)=>{return path.resolve(packageDir, file);};

// const pkg = require(resolve('package.json'));

// // const packageName = path.basename(packageDir); //去文件名

// // 对打包类型先做一个映射表，根据你提供的formats来格式化需要打包的内容
// const outputConfig = {
//   'esm-bundler': {
//     file: resolve('./dist/index.esm.js'),
//     format: 'es'
//   },
//   'cjs': {
//     file: resolve('./dist/index.cjs.js'),
//     format: 'cjs'
//   },
//   'global': {
//     file: resolve('./dist/index.global.js'),
//     format: 'iife' // 立即执行函数
//   }
// };
// // return;
// let { buildOptions: { formats, name }, devDependencies, dependencies } = pkg;
// formats = formats.filter((i)=>{
//   return !(process.env.NODE_ENV === 'development' && i === 'global');
// });

// let extensions = ['react', 'react-dom'];

// let vueVersion = '';
// [devDependencies, dependencies].forEach(dependent=>{
//   try {
//     if (dependent) {
//       const paks = Object.keys(dependent);
//       const vue = paks.find(i=>i === 'vue');
//       if (vue) {
//         vueVersion = dependent.vue.match(/\d{1}/)[0];
//       }
//       extensions = [...extensions, ...paks];
//     }
//   } catch (err) {
//     console.log(err);
//   }

// });

// function createConfig(format, output) {
//   output.name = './dist/index.ts';
//   output.sourcemap = true;//生成sourcemap
//   return {
//     input: './src/index.js',
//     output,
//     plugins: [
//       commonjs(),
//       tsPlugin({
//         tsconfig: path.resolve(__dirname, './tsconfig.json')
//       }),
//       resolvePlugin(),
//     ],
//     external: format !== 'global' ? extensions : false
//   };

// }
export default [{
  input: './src/index.ts',
  output:{
    file: path.resolve(__dirname, './dist/index.js'),
    format: 'iife',
    // sourcemap : true
  },
  plugins: [
    commonjs(),
    tsPlugin({
      tsconfig: path.resolve(__dirname, './tsconfig.json')
    }),
    resolvePlugin(),
  ]

}]

