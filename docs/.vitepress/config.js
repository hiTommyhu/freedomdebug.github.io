const sidebar = require('./sidebar')
const nav = require('./navbar')
module.exports = {
  lang: 'zh-CN',
  base: '/',
  dest: 'public',
  repo: '',
  docsRepo: '',
  logo: '/images/logo.jpg',
  title: 'TommyHu.me',
  description: 'tommyhu.me',
  themeConfig: {
    sidebar,
    nav, 
    socialLinks: [
      { icon: "github", link: "https://github.com/freedomdebug" },
      { icon: "gitee", link: "https://gitee.com/hellotommyhu" },
    ]
  }
}
