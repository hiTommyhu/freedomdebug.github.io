what

>样式表



why

>渲染页面，结构和渲染分离



css 奇怪用法

> 变量，计算，伪类，伪元素



css预编译

“原生的 CSS 不支持嵌套写法, 但是我们可以使用 CSS 的扩展语言 Sass 和 Less 来实现嵌套.”，

stylus，less，sass，scss



预编译语言典型用法

> 嵌套语法、变量、函数、样式污染，vue-scope，deep，rbga,卡券 ，css hack， flex布局



css与dom

1、css并不会阻塞DOM树的解析
2、css加载会阻塞DOM树渲染
3、css加载会阻塞后面js语句的执行，不阻塞js的加载



css与兼容

页眉屏，postcss，rem，vw，

rem对于内嵌，外链，行内样式的处理



css与编译工具（gulp，webpack，grunt，vite，rollup）

gulp：gulp-minify-css，gulp-less，gulp-ruby-sass，

webpack：node-sass、style-loader、css-loader、sass-loader，postcss-loader（[Autoprefixer](https://github.com/postcss/autoprefixer) ）

vite：  less、less-loader

rollup: postcss、 rollup-plugin-postcs

```
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}
执行顺序：链式的，所以在use数组中下面的部分会先执行，所以他们的执行顺序其实是less-loader > css-loader > style-loader

其实为啥是从右往左，而不从左往右，只是Webpack选择了compose方式，（函数组合的两种形式：一种是pipe，另一种是compose。前者从左向右组合函数，后者方向相反。）
```



less-loader原理，ast语法树



CSSReset



css规范



stylelint



psd切图



