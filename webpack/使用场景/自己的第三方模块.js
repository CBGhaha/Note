与普通web应用并无很多不同 除了需要剔除你自己的模块引入的可能重复第三方模块
例如你正在写一个基于react的组件 你需要在打包你自己代码时剔除react的代码 因为这在用户的应用中已近存在了
externals:/^react/  --剔除第三方模块依赖的react和babel-runtime模块中的代码
