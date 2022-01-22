
const { path } = require('@vuepress/utils');
module.exports = {
    base: '/',
    dest: "dist",
    // 站点配置
    lang: 'zh-CN',
    title: 'TommyHu',
    description: 'tommyhu.me',
    head: [
      ['link', { rel: 'icon', href: '/images/favicon.ico' }],
      ['link', { rel: 'stylesheet', href: '/css/index.css'}],
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
      darkMode: 'dark',
      sidebar: 'auto'
    },
    plugins: [
      [
        '@vuepress/plugin-register-components',
          {
            componentsDir: path.resolve(__dirname, './components')
          }
      ],
      [
        '@vuepress/pwa',
        {
          skipWaiting: true,
        },
      ],
      [
        '@vuepress/plugin-search',
        {
          // 排除首页
          isSearchable: (page) => page.path !== '/',
          // 允许搜索 Frontmatter 中的 `tags`
          getExtraFields: (page) => page.frontmatter.tags ?? [],
          locales: {
            '/': {
              placeholder: 'Search',
            },
            '/zh/': {
              placeholder: '搜索',
            },
          },
        },
      ],
    ],
  }
