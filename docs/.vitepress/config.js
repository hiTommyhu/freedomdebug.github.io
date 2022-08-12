const sidebar = require('./sidebar')
const nav = require('./navbar')
module.exports = {
  lang: 'zh-CN',
  base: '/',
  dest: 'public',
  repo: '',
  docsRepo: '',
  title: 'TommyHu.me',
  description: 'tommyhu.me',
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
  ],
  themeConfig: {
    logo: '/images/logo.jpg',
    editLink: {
      pattern: 'https://github.com/freedomdebug/freedomdebug.github.io/blob/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present tommyHu'
    },
    // search: {
    //   algolia: {
    //     appKey: '',
    //     indexName: '',
    //     searchParameters: {
    //       faeFilters: ['tags:guide,api']
    //     }
    //   },
    // },
    sidebar,
    nav, 
    socialLinks: [
      { icon: "github", link: "https://github.com/freedomdebug" },
      // { icon: "github", link: "https://gitee.com/hellotommyhu" },
    ]
  }
}
