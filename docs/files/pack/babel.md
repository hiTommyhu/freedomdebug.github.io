# babel基本使用详解

**什么是babel?**

babel是一个强大的多用途js编译器 点击进入[官网](http://babeljs.io/)

**安装babel**

```
npm install -g babel-cli 
npm install --save-dev babel-cli
```

**babel配置文件**

通过.babelrc来表示

```
{
	"presets": [ ],
	"plugins": [ ]
}
```

presets用来存放一些预设

plugins用来存放一些插件 

**命令行的简单使用**

我们可以通过 -o (--out-file) 参数来编译一个文件

```
babel es6.js -o es5.js / babel es6 --out-file es5.js
```

如果我们想编译整个目录 -d (--out-dir)参数

```
babel src -d build / babel src --out-dir build
```

**预设**

现在有一段es6的代码,我们想要使用babel来编译这段代码, 目前来说通过编译后的代码几乎是原封不动的复制了过来

es6.js

```
var add = (a,b) =>{
	console.log(a+b)
}
add(1,2)
```

我们可以安装babel-preset-es2015来解析es2015的语法

```
npm install --save-dev babel-preset-es2015
```

然后通过配置.babelrc文件

```
{
	"presets": ["es2015"]
}
```

这样我们就可以进行对es2015语法解析了。最后通过配置package.json的scripts

```
"scripts": {
	"build": "babel src -d build -w"
}
```

接下来直接在命令行

```
npm run build
```

**插件**

在babel中有很多很多的插件, 例如我们要将下面一段代码转换成umd的形式,该如何做呢?

```
var add = (a,b) =>{
	console.log(a+b)
}
add(1,2)
```

首先找到对应的插件babel-plugin-transform-es2015-modules-umd,安装该插件

```
npm install --save-dev babel-plugin-transform-es2015-modules-umd
```

在配置中引入

```
{
	"presets":["es2015"],
	"plugins":["transform-es2015-modules-umd"]
}
```

然后编译后就是我们想要的了

```
(function (global, factory) {
 if (typeof define === "function" && define.amd) {
 define(["module", "exports"], factory);
 } else if (typeof exports !== "undefined") {
 factory(module, exports);
 } else {
 var mod = {
  exports: {}
 };
 factory(mod, mod.exports);
 global.sum = mod.exports;
 }
})(this, function (module, exports) {
 "use strict";
 Object.defineProperty(exports, "__esModule", {
 value: true
 });
 var sum = function sum(a, b) {
 return a + b;
 };
 exports.default = sum;
 module.exports = exports["default"];
});

```

**集成gulp**

babel可以单独使用, 也可以配合构建工具(gulp webpack等)进行结合

首先要下载gulp 和gulp对应的babel插件

```
npm install gulp gulp-babel --save-dev
```

创建gulp配置gulpfile.js

```
const gulp = require('gulp')
const babel = require('gulp-babel')
gulp.task('babel', ()=>{
 return gulp.src('src/**/*.js')
  .pipe(babel())  
  .pipe(gulp.dest('dist'))
})
gulp.task('default' , ['babel'])

```

配置下package.json中的scripts

```
"scripts": {
 "dev" : "./node_modules/.bin/gulp"
 }
```

最后执行命令

```
npm run dev
```

以上就是本文的全部内容，希望本文的内容对大家的学习或者工作能带来一定的帮助，同时也希望多多支持脚本之家！