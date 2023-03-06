![alt 属性文本](./images/nodemodules.jpg)

# node常用包

## chalk 
> 功能: 控制台打印带颜色的说明
```
const chalk = require('chalk');
chalk.red('xxx')
chalk.green('xxx')
chalk.yellow('xxx')
```

## shelljs
> 功能：执行脚本命令
```
const shell = require('shelljs');
const shellPromise = (cmd, silent = true) => {
    return new Promise((resolve, reject) => {
        shell.exec(cmd, { silent: silent }, function(code, stdout, stderr) {
            return code === 0 ? resolve(stdout) : reject(stderr)
        });
    })
}

const test =  async () => {
  const currentBranch =  (await shellPromise('git branch --show-current') || '').trim()
  return currentBranch
}
```

## recast
> 玩转AST


## joi
> nodejs服务参数验证
> https://github.com/hapijs/joi/blob/v8.0.5/API.md#refkey-options
