const sidebar = require('./sidebar')
const nav = require('./navbar')
module.exports = {
  lang: 'zh-CN',
  base: '/',
  dest: 'public',
  title: 'TommyHu.me',
  description: 'tommyhu.me',
  themeConfig: {
    sidebar,
    nav, 
    socialLinks: [
      { icon: "github", link: "https://github.com/freedomdebug" },
    ]
  }
}
