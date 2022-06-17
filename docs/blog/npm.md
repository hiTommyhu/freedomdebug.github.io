# NPM PACKAGES

## nodejs
### shelljs
 > shell.exec(cmd,cb),cmd颜色丢失怎么破?
```
webpack 加 --color
webpack --env.serverApi dev --mode production --progress --color --config build/webpack.cust.conf.js

Node 加 --color=always
cd ./tools && node deploy.js --env=dev --color=always
```
more：
https://github.com/jinlong/jinlong.github.com/issues/6
https://github.com/shelljs/shelljs/issues/86
https://stackoverflow.com/questions/7725809/preserve-color-when-executing-child-process-spawn/14231570#14231570

### npx
一、简介
npm从5.25.2版开始，增加了 npx 命令。方便了我在项目中使用全局包。

二、安装
Node安装后自带npm模块，可以直接使用npx命令。如果不能使用用，就要手动安装一下。
npm install -g npx

三、使用
npx想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具webpack。
npm install webpack -D
如果我们使用webpack，只能在项目脚本的 package.json 中的scripts字段里面， 如果想在命令行下调用，必须像下面这样。
node-modules/.bin/webpack -v
npx 可以让项目内部安装的模块用起来更方便，只要像下面这样调用就行了。
npx webpack -v
npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。
由于 npx 会检查环境变量$PATH，所以系统命令也可以调用。
npx ls // 等同于ls命令
另外,使用npx可以避免全局安装模块，比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。
npx create-react-app my-react-app
上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。
下载全局模块时，npx 允许指定版本。
npx webpack@4.44.1 ./src/index.js -o ./dist/main.js
上面代码指定使用 4.44.1 版本的webpack进行打包操作。
注意，只要 npx 后面的模块无法在本地发现，就会下载同名模块。比如，本地没有安装webpack-dev-server模块，下面的命令会自动下载该模块，在当前目录启动一个 Webpack dev 服务。
npx webpack-dev-server
如果想让 npx 强制使用本地模块，不下载远程模块，可以使用--no-install参数。如果本地不存在该模块，就会报错。
npx --no-install webpack-dev-server
反过来，如果忽略本地的同名模块，强制安装使用远程模块，可以使用--ignore-existing参数。比如，本地已经全局安装了create-react-app，但还是想使用远程模块，就用这个参数。
npx --ignore-existing create-react-app my-react-app
利用 npx 指定某个版本的 Node 运行脚本。
npx node@14.10.0 -v
上面命令会使用 14.10.0 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。
某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。

### cssnano
一款mini css的postcss插件

## 前端
