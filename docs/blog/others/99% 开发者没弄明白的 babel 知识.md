## 99% 开发者没弄明白的 babel 知识

**困扰**

作为工具开发者，babel 关联问题是难绕过去的砍。

在 babel@6 时候，最常收到反馈之一就是 `regeneratorRuntime is not defined`

而到了 babel@7，最常收到反馈之一 `Cannot find module 'core-js/library/fn/**'.`

那是什么问题导致这些问题的出现呢，我觉得有一个 issue 特别能代表这一类的开发者。`大家不要笑，我们内部一些基础模块也有这个问题`

> https://github.com/raisezhang/react-drag-listview/issues/44#issuecomment-751662527

**总结来讲：Babel 在编译大家的代码时候，会依据大家配置的 preset or plugin 注入一些模块依赖，而这些模块依赖是大家需要在** **`pkg.dependencies` 里面体现出来的，否则很可能出现的问题就是加载不到具体的文件或者加载错误的版本的文件。**

根本的原因是什么：其实大家对

- `@babel/preset-env`

- `@babel/plugin-transform-runtime`

- `@babel/runtime`

- `core-js`

- `@babel/polyfills`

- `babel-polyfills`

等等这些熟悉但又陌生的原因。

那今天我想大概和大家分享一下使用 `babel@7` 的心得，如有不对，欢迎大家及时指出。

**预备知识**

开讲之前我们有必要先来看看各个包到底是干啥的。

### `@babel/preset-env`

在 `babel@7` 推出之际，babel 官方把 babel preset stage 以及 es2015 es2016 等等都废弃了，取而代之的是 `@babel/preset-env`。

> @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!
> 
> 官方文档：https://babeljs.io/docs/en/babel-preset-env.html

通过官方文档的描述，preset-env 主要做的是转换 JavaScript 最新的 Syntax（指的是 `const` `let` `...` 等）， 而作为可选项 preset-env 也可以转换 JavaScript 最新的 API （指的是比如 数组最新的方法 filter 、includes，Promise 等等）。

这里细心的同学估计发现了我刻意在强调 Syntax 和 API, 是的，babel 在实现编译 或者我们在组合使用各个 preset 或者 plugin 时，其实有隐含这一层的关系的，同时这里也有一些历史背景，为了不给大家增加负担，我们只需要点到为止就好，需要了解的自行深挖也行。

说到这，我需要给大家一些 tips:

- 在 babel@6 年代，我们使用的是 stage，那 stage 其实只会翻译 Syntax，而 API 则交给 babel-plugin-transform-runtime 或者 babel-polyfill 来实现。（这也是为什么大家在老项目中可以看到有引入 babel-polyfill 的原因）

- 在 babel@7 年代，我们废弃了 stage，使用的 preset-env，同时他也可以提供 polyfill 的能力

综上我想小伙伴们会有几个困惑

- preset-env 如何减小包体积的

- 有 preset-env polyfill 能力了，为啥还要有 @babel/plugin-transform-runtime，这货是必须的吗？

- 有了 preset-env polyfill 能力了，我还要 @babel/polyfill 吗

要解释清楚这几个问题，首先需要大概知道 preset-env 的三个关键参数

**targets(**https://babeljs.io/docs/en/babel-preset-env.html#targets):

> Describes the environments you support/target for your project.

简单讲，该参数决定了我们项目需要适配到的环境，比如可以申明适配到的浏览器版本，这样 babel 会根据浏览器的支持情况自动引入所需要的 polyfill。

**useBuiltIns**(https://babeljs.io/docs/en/babel-preset-env.html#usebuiltins):

"usage" | "entry" | false, defaults to false

> This option configures how @babel/preset-env handles polyfills.

这个参数决定了 preset-env 如何处理 polyfills。

`false`: 这种方式下，不会引入 polyfills，你需要人为在入口文件处`@import '@babel/polyfill';`

但如上这种方式在 `@babel@7.4` 之后被废弃了，取而代之的是在入口文件处自行 import 如下代码

```
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// your code
```

**不推荐采用** **`false`，这样会把所有的 polyfills 全部打入，造成包体积庞大**

`usage`:

我们在项目的入口文件处不需要 import 对应的 polyfills 相关库。babel 会根据用户代码的使用情况，并根据 targets 自行注入相关 polyfills。

`entry`:

我们在项目的入口文件处 import 对应的 polyfills 相关库，例如

```
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// your code
```

此时 babel 会根据当前 targets 描述，把需要的所有的 polyfills 全部引入到你的入口文件（注意是全部，不管你是否有用到高级的 API）

**corejs**:

> String or { version: string, proposals: boolean }, defaults to "2.0".
> 
> corejs:https://github.com/zloirock/core-js

注意 corejs 并不是特殊概念，而是浏览器的 polyfill 都由它来管了。

举个例子:

```
const one = Symbol('one');
```

Babel>

```
"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

var one = Symbol('one');
```

这里或许有人可能不太清楚，2 和 3 有啥区别，可以看看官方的文档 core-js@3, babel and a look into the future(https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md)  

简单讲 corejs-2 不会维护了，所有浏览器新 feature 的 polyfill 都会维护在 corejs-3 上。

**总结下：用 corejs-3，开启** **`proposals: true`，proposals 为真那样我们就可以使用 proposals 阶段的 API 了。**

#### 小结

使用 preset-env 注入的 polyfill 是会污染全局的，但是如果是自己的应用其实是在可控的。

所以这里推荐业务项目这么使用 `.babelrc`

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "58" // 按自己需要填写
        },
        "useBuiltIns": "entry",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ],
  "plugins": []
}
```

```
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 入口文件代码
```

这样配置的原因是：`targets` 下设置我们业务项目所需要支持的最低环境配置，`useBuiltIns` 设置为 `entry` ，将最低环境不支持的所有 polyfill 都引入到入口文件（即使你在你的业务代码中并未使用）。这是一种兼顾最终打包体积和稳妥的方式，为什么说稳妥呢，因为我们很难保证引用的三方包有处理好 polyfill 这些问题。当然如果你能充分保证你的三方依赖 polyfill 处理得当，那么也可以把 `useBuiltIns` 设置为 `usage`。

针对大众普通项目，可能如上方式的配置（撇开个性化）应该够用了，  
但追求极致的同学会有两个问题：

**问题一：还是会有一定程度的代码重复，举个例子：**

```
import a from 'a';

export default a;
```

Babel>

```
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _a = _interopRequireDefault(require("a"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _a.default;
exports.default = _default;
```

`_interopRequireDefault` 这个方法，明显是可以变成一个独立模块，这样打包体积会变更小（再少也是爱）。

**问题二：针对项目，polyfill 会污染全局可以接受，但是作为 Library 我更希望它不会污染全局环境**

两个都是好问题，那么接下来就是 `@babel/plugin-transform-runtime` 的出场机会了。

### `@babel/plugin-transform-runtime`

@babel/plugin-transform-runtime(https://babeljs.io/docs/en/babel-plugin-transform-runtime#corejs)

官方描述是这样的

> A plugin that enables the re-use of Babel's injected helper code to save on codesize.

很明显该插件的出现就是复用 babel 注入的关联代码。

具体 `@babel/plugin-transform-runtime` 做了什么，官方也有明确的解释，相信大家都能看明白：

> The transform-runtime transformer plugin does three things:

> Automatically requires @babel/runtime/regenerator when you use generators/async functions (toggleable with the regenerator option).  
> Can use core-js for helpers if necessary instead of assuming it will be polyfilled by the user (toggleable with the corejs option)  
> Automatically removes the inline Babel helpers and uses the module @babel/runtime/helpers instead (toggleable with the helpers option).

举个例子：

```
import a from 'a';

export default a;
```

```
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _a = _interopRequireDefault(require("a"));

var _default = _a.default;
exports.default = _default;
```

这是不是解决了上面提到的问题一。

至于问题二，关于 polyfill 全局污染，不打算展开，因为涉及源码讲解，大家只需要知道 **通过** **`@babel/plugin-transform-runtime` 插件实现的 polyfill 是不会影响全局的，所以更适合 Library 作者使用，但是需要注意的是，一旦采用 `@babel/plugin-transform-runtime`, `@babel/preset-env` 中的 `targets` 将会失效，言下之意，你的包会变大。**

另外也肯定会有好奇宝宝 `@babel/plugin-transform-runtime` 开启 `corejs` 并且 `@babel/preset-env` 也开启 `useBuiltIns` 会咋样，结论是：polyfill 将会采用不污染全局的，且 `targets` 设置将会失效。

#### 重要的问题讲三遍

| corejs option | Install command                           |
| ------------- | ----------------------------------------- |
| false         | npm install --save @babel/runtime         |
| 2             | npm install --save @babel/runtime-corejs2 |
| 3             | npm install --save @babel/runtime-corejs3 |

**根据如上 option，@babel/runtime 要做为项目的 dependencies**  
**根据如上 option，@babel/runtime 要做为项目的 dependencies**  
**根据如上 option，@babel/runtime 要做为项目的 dependencies**

#### 小结

- **如果是业务项目开发者**：`@babel/plugin-transform-runtime` ，建议关闭 `corejs`，polyfill 的引入由 `@babel/preset-env` 完成，即开启 `useBuiltIns`（如需其他配置，自行根据诉求配置）。

```
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": false
      }
    ]
  ]
}
```

并在入口文件处 import 如下内容

```
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 入口文件代码
```

- **如果是 Library 开发者**：`@babel/plugin-transform-runtime` ，建议开启 `corejs`，polyfill 由 `@babel/plugin-transform-runtime` 引入。`@babel/preset-env` 关闭 `useBuiltIns`。

```
{
  "presets": [
    [
      "@babel/preset-env",
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": {
          "version": 3,
          "proposals": true
        }
      }
    ]
  ]
}
```

但心细的同学，肯定又发现了新的问题

#### 新的问题

**为什么** **`@babel/preset-env` 不能使用不污染全局的 polyfill；为什么要使用不污染全局的 polyfill 就必须要使用`@babel/plugin-transform-runtime`，而与此同时我必须妥协掉 `targets` 带来的体积优势。**

如何解决呢？

抱歉在现有的 babel 正式体系下还没好办法来解决这个问题，当然 babel 也意识到了这个问题，于是有了 `babel-polyfills`。

注意是 `babel-polyfills` 不是 `@babel/polyfills`，我们移到文章最后。

### `@babel/runtime`

不需要深入研究它，请结合 `@babel/plugin-transform-runtime` 来看。

### `core-js`

corejs(https://github.com/zloirock/core-js)

不需要深入研究它，请结合 `@babel/preset-env` 来看。

### `@babel/polyfills`

已经在 `babel@7.4 废弃`，请结合 `@babel/preset-env` 来看。

### `babel-polyfills`

babel-polyfills(https://github.com/babel/babel-polyfills)

这个库的动机就是我们在 `@babel/plugin-transform-runtime` 小节下最后提出的问题：

> Motivation

- It wasn't possible to use @babel/preset-env's targets option with "pure" ponyfills, because @babel/plugin-transform-runtime is a completely separate package.

- We forced our users to use core-js if they wanted a Babel integration. core-js is a good and comprehensive polyfill, but it doesn't fit the needs of all of our users.

但是目前这个库处于 `experimental` 即试验性的阶段，按我对 babel 的了解，并不推荐大家当前在生产中引入，我们可以开放的心态保持关注即可。

至于想要尝鲜的，官方也给了 升级方式(https://github.com/babel/babel-polyfills/blob/main/docs/migration.md)。

ps: 自己尝鲜自己负责（我是求生欲极强的作者 o.o）

**总结**

这篇文章没有 TLDR; 不管你是工具开发者、Library 开发者还是业务开发者，多一点耐心，好好把这篇文章提及的内容梳理一下，因为就作者观察 99% 的开发者都还没有弄明白。
