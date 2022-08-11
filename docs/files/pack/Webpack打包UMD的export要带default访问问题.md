# Webpack打包UMD的export要带default访问问题

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNjAyMjk0OC82MTU4Nzk5NC05ZGMwMjM4MC1hYmM2LTExZTktOTg2My04ZTNjMjU1NTgzMTIucG5n?x-oss-process=image/format,png)

最近在写一个组件时候遇到一个问题，用`webpack`将组件打包成一个符合`UMD`规范的组件时出现一个比较奇怪的现象：使用`export default`导出的[全局变量](https://so.csdn.net/so/search?q=全局变量&spm=1001.2101.3001.7020)会多一个`default`属性：

如：
– index.js

```
let webpackDemo = {
    val: 'hello webpack'
}
export default webpackDemo;
1234
```

打包之后发现在全局下只能这么访问`val`值：

```
webpackDemo.default.val;
1
```

修改`index.js`代码

```
let webpackDemo = {
    val: 'hello webpack'
}
export { webpackDemo };
1234
```

则访问`val`属性变成了

```
webpackDemo.webpackDemo.val;
1
```

为了弄明白怎么回事，准备了一个简单的`webpack-umd`项目，项目结构如下：

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNjAyMjk0OC81NDE5MTQzNi1kYzQ3MjI4MC00NGYwLTExZTktODk1ZC05N2Y3ODIzNTUwMDcucG5n?x-oss-process=image/format,png)

– package.json

```
{
  "name": "webpack-umd",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/index.js",
  "scripts": {
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-runtime": "^6.22.0",
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    "webpack": "^4.29.6",
    "webpack-cli": "^3.2.3"
  }
}
12345678910111213141516171819202122
```

– src/index.js

```
let webpackDemo = {
    val: 'hello webpack'
}
export default webpackDemo;
1234
```

运行`npm run build`后查看源码，注意`webpack`配置`mode: 'development'`:
![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNjAyMjk0OC81NDE5MTg5Ny1jN2I3NWEwMC00NGYxLTExZTktODg0ZS04OGM4M2RiNGM0NGEucG5n?x-oss-process=image/format,png)

简化打包后的结构为：

```
(function webpackUniversalModuleDefinition(root, factory){
    // 这里是支持umd规范的写法
})(window, function(){
    // 这里是index.js源码
    //
    ...val: 'hello webpack'\n};\n\nexports.default = webpackDemo;...
})
1234567
```

我们知道`export exports`是`ES6`中新增的，而`exports`是`CMD`规范定义的，不难发现`webpack`编译的结果是将`es6`的`export default`语法转成`CMD`了`exports.default`, 这个时候可以想到`CMD`规范改写代码，如下：

–index.js

```
let webpackDemo = {
    val: 'hello webpack'
}
module.exports = webpackDemo;
1234
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNjAyMjk0OC81NDE5MzcxNi05YzM2NmU4MC00NGY1LTExZTktOGU4NS1kZTdlN2NmOWFlNmEucG5n?x-oss-process=image/format,png)

重新打包之后发现在全局作用域下可以正常访问属性了：`webpackDemo.val`,但是从优雅角度考虑，同一个`module`下混用`es6`和`cmd`规范实为不妥，如：

```
import a from './a';
let webpackDemo = {
    val: 'hello webpack'
}
module.exports = webpackDemo; // 强迫症促使我想用 export default webpackDemo;
12345
```

换个角度考虑，既然打包出来的是`exports.default = webpackDemo`,那么理论上只要将`default`干掉即可。而怎么干掉呢？答案只能从`webpack`本身着手，毕竟是`webpack`编译后的结果未能达到预期。查看[webpack文档](https://webpack.docschina.org/configuration/output/#output-libraryexport) 发现了一个`libraryExport`属性，尝试了一下，完美解决~，修改`webpack.config.js`文件：

```
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'webpackDemo',
        libraryTarget: 'umd',
        libraryExport: 'default', // 增加这个属性
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
    // ....
}
123456789101112
```

![image](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNjAyMjk0OC81NDE5NDYxNC05YzM3NmUwMC00NGY3LTExZTktOTIzOS0yNTBiNzA0NGE1Y2EucG5n?x-oss-process=image/format,png)

重新编译后，可看到多了一个`default`属性访问

```
()()['default']
1
```

也就可以知道`libraryExport`属性作用是取`export`下的`default`对象。再换个角度，如果是将`export default webpackDemo;` 换成`export {webpackDemo};`，那么按照刚才的思路只需要将`libraryExport`的值设置为`webpackDemo`即可。

```
// index.js
let webpackDemo = {
    val: 'hello webpack'
}
export {webpackDemo};

// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        library: 'webpackDemo',
        libraryTarget: 'umd',
        libraryExport: 'webpackDemo', // libraryExport改为webpackDemo
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
    // ....
}
12345678910111213141516171819
```

到这里，再熟悉了一下`webpack output`的几个属性：

###### output.library

- `string` 或 `object`（从 `webpack 3.1.0` 开始；用于 libraryTarget: `umd`）
- `output.library` 的值的作用，取决于`output.libraryTarget` 选项的值
- 如果生成的输出文件，是在`HTML` 页面中作为一个`script` 标签引入，则变量`MyLibrary` 将与入口文件的返回值绑定。

###### output.libraryExport

这个属性的用法再上面已经体现了。注意默认值为`undefined`

###### output.libraryTarget

配置如何暴露`library`,可选的值为：`var`、`this`、`window`、`global`、`commonjs`、`commonjs2`、`amd`、`amd-require`、`umd`等。通常使用`umd`即可，`umd`是一种混合规范，可以将`library`暴露为所有的模块定义下都可运行的方式，可以在`CommonJS`, `AMD`环境下运行，兼容性最好。

ok~ 使用[webpack](https://so.csdn.net/so/search?q=webpack&spm=1001.2101.3001.7020)打包模块化组件总结：

- 1、导出变量可以使用`module.exports = webpackDemo`，简单省事，但不够优雅
- 2、若要使用`ES6`的`export`、`export default`导出，需配合`wenpack`的`output.libraryExport`属性
- 3、`webpack`的`output.libraryTarget`建议采用`umd`方式，兼容性好。

参考链接：

- https://webpack.docschina.org/configuration/output/
- https://segmentfault.com/a/1190000010426778
- http://www.hacksparrow.com/node-js-exports-vs-module-exports.html