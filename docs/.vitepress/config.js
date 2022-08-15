const sidebar = require('./sidebar')
const nav = require('./navbar')
import markdownPlugin from "vitepress-demo-editor/markdownPlugin";
module.exports = {
  lang: 'zh-CN',
  base: '/',
  dest: 'public',
  title: 'TommyHu.me',
  description: 'tommyhu.me',
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["meta", { name: "keywords", content: "tommyhu博客" }],
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    
  ],
  themeConfig: {
    repo: 'https://github.com/freedomdebug',
    repoLabel: 'GitHub',
    search: true,
    author: "胡一刀",
    logo: '/images/logo.jpg',
    editLink: {
      pattern: 'https://github.com/freedomdebug/freedomdebug.github.io/blob/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present tommyHu'
    },
    sidebar,
    nav, 
    socialLinks: [
      { icon: "github", link: "https://github.com/freedomdebug" },
      // { icon: "github", link: "https://gitee.com/hellotommyhu" },
    ],
    //丝滑滚动
    smoothScroll: true,
    // 启用时间线
    editLinks: true,
    //在git上编辑提示文字
    editLinkText: '在 GitHub 上编辑此页',
    // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    lastUpdated: '上次更新',
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      // vue组件预览1
      md.use(
        demoBlockPlugin,
        {
          scriptImports: ["import * as THREE from 'three'"],
          cssPreprocessor: 'less',
        }
      )
      // vue组件预览2
      // ,md.use(markdownPlugin)
    }
  }
}
