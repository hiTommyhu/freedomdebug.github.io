//获取指定目录下的所有文件名称
const fs = require('fs/promises')
const { filter } = require('../docs/.vitepress/sidebar')

const DIR = './docs/'
const base = '/files/'

//将指定目录下的文件生成obj
async function getObj(dir) {
  //获取指定目录下的所有文件
  let list = await fs.readdir(dir)
  //生成对应的obj
  let array1 = [] //存放原始的配置对象
  for (let name of list) {
    if (name.endsWith('imgs') || name.endsWith('.js')) continue
    array1.push({ text: name, children: [] })
  }
  return array1
}
//
async function isDir(path) {
  let result = await fs.stat(path)
  return result.isDirectory()
}

async function my(path, arrays) {
  // console.log('外',path)
  //获取指定目录下的所有文件(对象形式)
  let array1 = await getObj(path)
  // console.log(array1)
  arrays.push(...array1)
  if (arrays.length > 0) {
    for (const array1Element of arrays) {
      const index = arrays.indexOf(array1Element)
      let path1 = path + '\\/' + array1Element.text
      // console.log('内',path1)
      //判断是否是目录
      if (path1.endsWith('imgs')) continue
      if (await isDir(path1)) {
        //如果是目录
        await my(path1, arrays[index].children)
      } else {
        //不是目录,通过路径解析出所需 路由
        if (path1.endsWith('.md') || path1.endsWith('.MD')) {
            delete array1Element.children
            array1Element.link = path1.slice(path1.indexOf(base) - 1).replace('.MD', '').replace('.md', '')
        }
        
      }
    }
  }
}

;(async () => {
  let path = DIR + '\\' + base
  let arrays = []
  await my(path, arrays)
  const content = `module.exports =${JSON.stringify(arrays, null, 2)
    .replace(/\\\\/g, '')
    .replace(/children/g, 'items')}`
  fs.writeFile(
    './docs/.vitepress/sidebar.js',
    content,
    { encoding: 'utf8' },
    (err) => {
      console.log(err)
    }
  )
})()
