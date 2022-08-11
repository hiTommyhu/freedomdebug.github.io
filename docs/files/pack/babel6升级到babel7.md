# babel6升级到babel7

## 一、Babel 7 库的作用域 (scope)
（1）Babel 7 用了 npm 的 private scope，把全部的包都挂在在 @babel 下，类似的有 typescript 的 @type。

（2）Babel 7 提供多种配置

```yaml
.babelrc
babel.config.js
webpack babel loader
```

## 二、babel7 相关文件
先看一下babel7配置成功后的样子

babel.config.js

```yaml
const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
        browsers: ['last 2 versions', 'ie >= 7']
      }
    }
  ]
]
module.exports = { presets }
```

babel 7 开始, .babelrc 的作用范围仅限于当前项目，默认不再作用与 node_modules 和工作区 (./packages/*)，如果需要，可以指定作用范围

在项目 rootDir(项目根目录）创建 babel.config.js。

.babelrc

```yaml
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "chrome": "58",
          "ie": "10"
        },
        "useBuiltIns": "usage"
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread",
    "transform-vue-jsx"
  ]
}
```
package.json

## 三、升级步骤
### (1) babel-core卸载掉，从新安装@babel/core

```yaml
npm un babel-core
npm i -D @babel/core
npx babel-upgrade --write --install
```


### (2）.babelrc 引入插件解析

```yaml
"plugins": [ "@babel/plugin-transform-runtime", "@babel/plugin-syntax-dynamic-import", "@babel/plugin-proposal-object-rest-spread", "transform-vue-jsx" ]
```


### (3)在package.json文件中 删除babel6 相关的依赖
在

```yaml
"devDependencies":{

}

"dependencies":{

}
```


中 看后面是有babel 版本号写6.XX.XX的都删掉

(4)删除文件夹 node_module 然后重新安装

```
rm -rf node_modules
yarn install
```



## 相关

```
@vue/babel-plugin-transform-vue-jsx //jsx包
```

.babelrc

```yaml
{
    "presets": ["@babel/preset-env"],
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "corejs": 2
            }
        ],
        "dynamic-import-node",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-syntax-import-meta",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-json-strings",
        "@vue/babel-plugin-transform-vue-jsx"
    ],
    "comments": false,
    "compact": false
}
```

