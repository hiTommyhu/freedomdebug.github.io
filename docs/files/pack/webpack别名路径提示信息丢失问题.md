# webpack别名路径提示信息丢失问题

# Vscode中alias跳转（别名路径跳转-解决@跳转）

项目中为什么要设置alias
项目中会设置alias（别名），避免通过…/…/导入
打包效率增加，避免自己找错文件层级
vue中设置alias
在vue.config.js中
```javascript
chainWebpack: config => {
	config.resolve.alias
	.set('@', resolve('src'))
	.set('assets', resolve('./src/assets'))
	.set('components',resolve('./src/components'))
}
```
或webpack.config.js(webpack 5)种
```javascript
module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('./src'),
            "basePath": path.resolve('./src'),
        }
    }
}
```

ctrl+鼠标左键点击导入文件路径中带别名的
项目中，ctrl+鼠标左键点击导入文件路径中带别名的，会识别不出来，没有快捷跳转
import baseDiaLog from ‘components/baseDiaLog.vue’
解决带alias快捷跳转失败
可以在根目录加一个jsconfig.json文件，然后就可以了
```json
{
    "compilerOptions": {
        "target": "ES6",
        "jsx": "react",
        "baseUrl": "./",
        "paths": {
            "components/*": ["src/components/*"],
            "assets/*": ["src/assets/*"],
            "@/*": ["src/*"]
        }
    },
    "exclude": ["node_modules", "dist"],
    "include": ["src/**/*"]
}
```

Vscode中下载插件
vscode《别名路径跳转》插件：https://segmentfault.com/a/1190000021436694?utm_source=tag-newest
在设置.json中加
设置按ctrl+shift+p，打开设置，右上角点击设置icon（折页的纸张）
**保存为当前工作区**
```json
 "alias-skip.mappings": {
    "@": "/src", // 默认只有`@`映射，映射到`/src`，你可以添加更多映射，映射路径必须以`/`开头
    "components": ["/src/components"],
    "assets": ["/src/assets"]
    // ...更多映射关系
  },
```