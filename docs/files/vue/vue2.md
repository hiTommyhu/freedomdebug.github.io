## vuecli5打开的是0.0.0.0:8080解决

```
yarn add ip -D
```

vue.config.js
```
module.exports = {
  devServer: {
      host: require('ip').address(),
   }
}
```

package.json
```
"scripts": {
   "dev": "yarn serve --port 8080 --open",
   "serve": "vue-cli-service serve",
}
```


## v-html样式丢失
* 使用全局样式，注意样式污染
* 使用/deep/ .class {}
