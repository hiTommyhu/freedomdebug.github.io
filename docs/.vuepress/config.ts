module.exports = {
    base: '/',
    dest: "dist",
    // 站点配置
    lang: 'zh-CN',
    title: 'TommyHu',
    description: 'tommyhu.me',
    head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      logo: '/images/logo.jpg',
      navbar: require('./config/navbar.ts'),
      sidebar: require('./config/sidebar.ts'),
    },
  }
