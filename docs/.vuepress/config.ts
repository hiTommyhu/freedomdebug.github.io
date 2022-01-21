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
      darkMode: true,
      sidebar: 'auto'
    },
    plugins: [
      ['@vssue/vuepress-plugin-vssue', {
        platform: 'github-v4',
        owner: 'freedomdebug',
        repo: 'freedomdebug.github.io',
        clientId: '70a7dc527b3ce3856fbc',
        clientSecret: '6329f2cf1d14078e74e96453d630740d1e2b5e1e',
      }],
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
