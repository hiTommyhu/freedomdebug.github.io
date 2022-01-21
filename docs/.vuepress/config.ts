const sidebar = require('../../utils/sidebar');
module.exports = {
    base: '/',
    dest: "dist",
    // 站点配置
    lang: 'zh-CN',
    title: 'TommyHu',
    description: 'tommyhu.me',
    head: [
      ['link', { rel: 'icon', href: '/images/favicon.ico' }],

      // pwa
      ['link', { rel:"apple-touch-icon", sizes:"180x180", href:"/pwa/apple-touch-icon.png"}],
      ['link', { rel:"icon", type:"image/png", sizes:"32x32", href:"/pwa/favicon-32x32.png"}],
      ['link', { rel:"icon", type:"image/png", sizes:"16x16", href:"/pwa/favicon-16x16.png"}],
      ['link', { rel:"manifest", href:"/pwa/site.webmanifest"}],
      ['link', { rel:"mask-icon", href:"/pwa/safari-pinned-tab.svg", color:"#5bbad5"}],
      ['meta', { name:"msapplication-TileColor", content:"#da532c"}],
      ['meta', { name:"theme-color", content:"#ffffff"}],
    ],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo.jpg',
      navbar: require('./config/navbar.ts'),
      sidebar,
      darkMode: true,
    },
    plugins: [
      [
        '@vuepress/pwa',
        {
          skipWaiting: true,
        },
      ],
      [
        '@vuepress/docsearch',
        {
          apiKey: '<API_KEY>',
          indexName: '<INDEX_NAME>',
          locales: {
            '/': {
              placeholder: 'Search Documentation',
            },
            '/zh/': {
              placeholder: '搜索文档',
            },
          },
        },
      ],
    ],
  }
