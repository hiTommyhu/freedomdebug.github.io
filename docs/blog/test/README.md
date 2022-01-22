## md中使用自定义vue组件

<MyTemplate></MyTemplate>
```bash
yarn add @vuepress/plugin-register-components@2.0.0-beta.23
```

//.vuepress/components/MyTemplate.vue
```javascript
<template>
    <h1>MyTemplate</h1>
 </template>
 
 <script>
 export default {
 
 }
 </script>
 
 <style>
 
 </style>
```
 .vuepress/components
```bash
const { path } = require('@vuepress/utils')
module.exports = {
    plugins: [
        [
          '@vuepress/plugin-register-components',
            {
                componentsDir: path.resolve(__dirname, './components')
            }
        ]
    ]
}
```