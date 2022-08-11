# 通过babel操作AST精准插入配置代码全流程

##### 目录

- [babel修改js配置文件实现原理](https://www.jb51.net/article/236678.htm#_label0)

- [操作AST三大阶段](https://www.jb51.net/article/236678.htm#_label1)

- - [解析（parser）](https://www.jb51.net/article/236678.htm#_lab2_1_0)
  - [转换（traverse）](https://www.jb51.net/article/236678.htm#_lab2_1_1)
  - [生成（generator）](https://www.jb51.net/article/236678.htm#_lab2_1_2)



## babel修改js配置文件实现原理

像那些js配置文件，里面可能有很多的非配置代码，而且一次可能要修改好几个文件

比如我们在前端项目，要插入一个页面，需要修改router、menus等配置文件，还要手动拷贝页面模板等等

这些高重复机械化操作，人工修改非常容易出错

我们可以直接用babel来操作AST抽象语法树，通过工程化去精准修改。让babel去帮我们找到指定位置，并正确插入配置代码。我们在做工程化开发的时候，经常会用到babel去操作AST。

首先我们了解一下什么是AST

AST，抽象语法树（Abstract Syntax Tree）它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构。

我们使用babel来转化和操作AST，主要分为三个步骤：解析（parser）、转换（traverse）、生成（generator）



## 操作AST三大阶段

如下图，如果我们想通过babel，在配置文件里面插入一段配置代码，应该怎么实现呢

![img](https://img.jbzj.com/file_images/article/202202/202202080920301.png)



### 解析（parser）

第一步：读取配置文件代码，并生成AST抽象语法树

```
let configJsData = fs.readFileSync(configJsPath, ``"utf8"``);
```

然后将配置文件代码生成AST抽象语法树

```
const parser = require("@babel/parser");
 
let configJsTree = parser.parse(`${configJsData}`,{
    sourceType: "module",
    plugins: [
      "jsx",
      "flow",
    ],
  });
```

configJsTree就是我们的AST了

加上`sourceType: "module"`这个配置属性，是为了让babel支持解析export和import



### 转换（traverse）

转换（traverse）阶段，就是要遍历整个AST抽象语法树，找到指定的位置，然后插入对应的配置代码。

代码如下：

```
const traverse = require("@babel/traverse").default;
 
traverse(configJsTree, {
    ObjectProperty(path) {
      // 插入配置文件代码
    },
  });
```

我们使用`@babel/traverse`的traverse方法进行遍历整个AST

其中`ObjectProperty`的作用是在遍历AST过程中，识别出所有的Object对象，因为我们是要将配置代码插入一个Object对象，所以使用的是`ObjectProperty`。如果要将配置插入数组中，就使用`ArrayExpression`。

然后我们开始进行配置代码的插入，将代码

```
{
  key: "testPath",
  icon: HomeOutlined,
  exact: true,
}
```

插入如下的位置

![img](https://img.jbzj.com/file_images/article/202202/202202080920302.png)

我们需要在`traverse`的`ObjectProperty`进行位置的查找和代码插入

首先我们要找到`key: 'home'`的位置 

![img](https://img.jbzj.com/file_images/article/202202/202202080920303.png)

代码如下：

```
traverse(configJsTree, {
    ObjectProperty(path) {
      if ( path.node.key.name === "key" && path.node.value.value === "home" ) {
        // 这就是 key: 'home'的位置
      }
    },
  });
```

通过`path.node.key.name`和`path.node.value.value`找到对象属性为`key`并且对象值为`home`的Object对象

找到位置后开始插入代码

```
traverse(configJsTree, {
    ObjectProperty(path) {
      // 搜索并识别出配置文件里key: "home" 这个object对象位置
      if ( path.node.key.name === "key" &amp;&amp; path.node.value.value === "home" ) {
        path.parent.properties.forEach(e=>{
          if ( e.key.name === "children" ) {
           // 找到children属性
          }
        })
      }
    },
  });
```

通过`path.parent.properties`找到对象的父级，然后遍历父级下的所有属性，找到`children`这个属性。这就是我们要插入的位置。

接下来我们要构造要插入的数据

```
{
   key: "testPath",
   icon: HomeOutlined,
   exact: true,
}
```

构造数据的代码如下：

```
const t = require("@babel/types");
const newObj = t.objectExpression([
    t.objectProperty(
      t.identifier("key"),
      t.stringLiteral("testPath")
    ),
    t.objectProperty(
      t.identifier("icon"),
      t.identifier("HomeOutlined")
    ),
    t.objectProperty(
      t.identifier("exact"),
      t.booleanLiteral(true)
    ),
  ]);
```

可以看到用`dentifier`来标识对象的属性，用`stringLiteral`标识字符串数据，`booleanLiteral`标识boolean值，这些类型都可以在`@babel/types`查询到。

最后一步，将构造好的数据插入：

```
e.value.elements.push(newObj)
```

完成~！

将所有 traverse 阶段代码汇总起来如下：

```
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
 
traverse(configJsTree, {
    ObjectProperty(path) {
      // 搜索并识别出配置文件里key: "home" 这个object对象位置
      if ( path.node.key.name === "key" &amp;&amp; path.node.value.value === "home" ) {
        path.parent.properties.forEach(e=>{
          if ( e.key.name === "children" ) {
            const newObj = t.objectExpression([
              t.objectProperty(
                t.identifier("key"),
                t.stringLiteral("testPath")
              ),
              t.objectProperty(
                t.identifier("icon"),
                t.identifier("HomeOutlined")
              ),
              t.objectProperty(
                t.identifier("exact"),
                t.booleanLiteral(true)
              ),
            ]);
            e.value.elements.push(newObj)
          }
        })
      }
    },
  });
```



### 生成（generator）

这个阶段就是把AST抽象语法树反解，生成我们常规的代码

```
const generate = require("@babel/generator").default;
const result = generate(configJsTree, { jsescOption: { minimal: true } }, "").code;
fs.writeFileSync(resultPath, result);
```

通过`@babel/generator`将AST抽象代码语法树反解回原代码，`jsescOption: { minimal: true }`配置是为了解决中文为unicode乱码的问题。

至此咱们就完成了对js配置文件插入代码，最终结果如下：

![img](https://img.jbzj.com/file_images/article/202202/202202080920314.png)

以上就是通过babel操作AST，然后精准插入配置代码的全流程。

更多关于babel操作AST插入配置的资料请关注脚本之家其它相关文章！

**您可能感兴趣的文章:**

- [babel基本使用详解](https://www.jb51.net/article/105968.htm)
- [详解如何使用babel进行es6文件的编译](https://www.jb51.net/article/141097.htm)
- [利用babel将es6语法转es5的简单示例](https://www.jb51.net/article/129555.htm)
- [babel之配置文件.babelrc入门详解](https://www.jb51.net/article/135225.htm)
- [详解如何用babel转换es6的class语法](https://www.jb51.net/article/137692.htm)