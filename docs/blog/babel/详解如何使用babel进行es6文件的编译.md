# 详解如何使用babel进行es6文件的编译

**1.babel**

[babel官方网址](https://babeljs.cn/)

**2. 安装**

```
npm i babel-cli -g
```

通过上面命令进行babel的安装,其中i表示安装install的意思, -g表示安装到全局

**3.使用**

创建文件es6.js

```
let num = [1,2,3,4]; 
let plusDouble = num.map(item => item * 2); 
console.log(plusDouble); 
```

然后使用命令进行编译:

```
babel es6.js -o compiled.js
```

然后就会在当前目录下出现编译之后的文件,就这样,我们完成了编译的过程,但是,当我们进行运行编译之后的文件时,仍然会报错,其实主要原因是上面的编译没有加约束条件,也就是没有告诉babel去怎么编译,那下面我们就进行对babel进行配置

**4. 配置**

(1)通过文件配置

在项目目录下创建文件.babelrc,在文件中书写如下代码:,由于babel是通过插件的形式进行使用,所以在下面代码中通过添加对象预设和插件

```
{ 
 "presets": [], 
 "plugins": [] 
} 
```

安装插件,在下面这个插件的使用,可以将ES6代码编译为ES5代码:

```
npm i --save-dev babel-preset-es2015
```

(代码中--save-dev代表安装在本地开发依赖中)

然后将.babelrc中的文件进行修改为以下内容: 

```
{ 
 "presets": ["es2015"], 
 "plugins": [] 
} 
```

至此,我们已經配置完成,运行编译命令即可得到下面的结果: 

```
"use strict";  
var num = [1, 2, 3, 4]; 
var plusDouble = num.map(function (item) { 
 return item * 2; 
}); 
console.log(plusDouble); 

```

运行之后能够正常打印结果

现在我们能够进行简单的编译,但是对于一些es7里边的新特性还是有点限制,这样,我们就的使用插件进行编译,如下面所示对象展开符插件object-rest-spread,同样的,我们使用命令进行安装

```
npm i babel-plugin-transform-object-rest-spread --save-dev
```

同样进行到插件中修改

```
{ 
 "presets": ["es2015"], 
 "plugins": ["transform-object-rest-spread"] 
} 

```

然后通过代码进行测试,在代码中书写如下内容(...为ES7中预先提出的设想):

```
let courses = { name: 'english', score: 90}; 
courses = { ...courses, comment: 'A'}; 
console.log(courses); 
```

编译之后的结果为:

```
'use strict';  
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };  
var courses = { name: 'english', score: 90 }; 
courses = _extends({}, courses, { comment: 'A' }); 
console.log(courses); 
```

通过添加_extends方法将对象展开符进行转化,运行代码可正常输出结果

(2)通过在webpack配置文件中进行其他属性的加载配置

在webpack中,我们能够通过各类加载器进行样式的加载,在使用样式加载的时候,通过下面链接进行查看:https://www.jb51.net/article/141096.htm

以上就是babel编译es6文件的方法，希望对大家的学习有所帮助，也希望大家多多支持脚本之家。

**您可能感兴趣的文章:**

- [babel基本使用详解](https://www.jb51.net/article/105968.htm)
- [利用babel将es6语法转es5的简单示例](https://www.jb51.net/article/129555.htm)
- [babel之配置文件.babelrc入门详解](https://www.jb51.net/article/135225.htm)
- [通过babel操作AST精准插入配置代码全流程](https://www.jb51.net/article/236678.htm)