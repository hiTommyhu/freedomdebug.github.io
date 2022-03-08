# webpack 3.6升级到webpack5

平台window，nodejs14.7.1

版本查看工具：

ncu

或

yarn upgrade-interactive --latest

## 开始

1、修改package.json中版本为webpack最新版本5.70.0（截至20220308）

2、执行项目yarn dev，查看错误并逐一解决



vue和vue-template-compiler需要同版本

增加webpack-cli

##  webpack.config.js

去掉loader中的query参数，改为options

增加mode

module.rules.

```yaml
const { VueLoaderPlugin } = require("vue-loader");
modules: {
	rules: [
		{
        	test: /\.vue$/,
            loader: "vue-loader",
        }
	]
},
plugins: [
 	new VueLoaderPlugin(),
]
```

导出对象加.default

## package.json>scripts

> 增加--trace-deprecation显示错误

```yaml
"dev": "cross-env NODE_ENV=test  node --trace-deprecation apps"
```



## Webpack5无法使用uglifyjs-webpack-plugin压缩js： ERESOLVE unable to resolve dependency tree

```javascript
npm install terser-webpack-plugin -D
// 引入插件
const TerserWebpackPlugin = require("terser-webpack-plugin");
 
// 配置参数
module.exports = {
  ...
  optimization: {
    minimize: true,
    minimizer: [new TerserWebpackPlugin ()],
  },
};
```



## webpack中 注释报错Unknown word ，miss “}”

> loader的顺序配置错误

1. 一些css预编译库是支持行内注释对，例如 `less`,`sass`或者`scss`;

第二个问题：webpack loader执行顺序

webpack 的loader执行是 从下到上，或者从右到左 （安装配置文件的顺序）

所以你的第一个写法的执行顺序是：
postcss-loader-->less-loader-->css-loader;

其实你这个执行顺序，不仅仅是行内注释有问题，应该很多 `less`语法都会出问题；因为你是这样的

demo.less-->postcss-loader; 你用 `postcss-loader` 去处理一个 `less`语法的文件；本身`postcss-loader`就是不是为 `less`设计的，所以就是本质上从错误

然后你的第二个写法就对了：
demo.less-->less-loader-->(demo.css)-->postcss-loader-->css.loader

因为 `less-loader` 已经把 你的 less文件 处理成了 标准的 `css` 文件，所以后续的解析就不会出错



## 打包组件报错：Error: Cannot find module ‘vue/compiler-sfc‘

> 安装低版本的vue-loader

```yaml
npm i vue-loader@15 -D
```



## webpack warning - WARNING in DefinePlugin Conflicting values for 'process.env.NODE_ENV'

```yaml
plugins: [
new webpack.DefinePlugin({
	"process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
     },
     // antdesign上传图片
     "process.env.TEST_IE": "false",
}),
]
```



## Webpack打包UMD的export要带default访问问题



见附件





## 辅助工具

```
npm install -g npm-check-updates// 包检查，在package.json目录ncu
webpack-bundle-analyzer // 打包分析
webpackbar // 打包进度
```



## 相关链接

[设置Webpack和Babel时出现问题](https://www.5axxw.com/questions/content/fzsiy7)

