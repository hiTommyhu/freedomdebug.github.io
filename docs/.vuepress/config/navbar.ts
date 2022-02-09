module.exports = [
    {
        text: '技术',
        children: [
            {
                text: 'nodejs',
                children: [
                    { text: 'node', link: '/blog/node/' },
                ]
            },
            {
                text: '图形图像',
                children: [
                    { text: 'gojs', link: '/blog/gojs/' },
                ]
            },
            {
                text: 'HTTP',
                children: [
                    '/blog/http/HTTP1.1.md',
                    '/blog/http/crlf.md',
                ]
            },
            {
                text: 'Others',
                children: [
                    '/blog/others/ArrayBuffer转base64详解.md',
                ]
            },
        ]
    },
    {
        text: '思考',
        children: [
            {
                text: 'JavaScript高级语法',
                 children: [
                    '/JavaScript高级语法/JavaScript高级语法1.md',
                    '/JavaScript高级语法/JavaScript高级语法2.md',
                    '/JavaScript高级语法/JavaScript高级语法3.md',
                    '/JavaScript高级语法/JavaScript高级语法4.md',
                    '/JavaScript高级语法/Proxy和Reflect.md',
                    '/JavaScript高级语法/Promise.md',
                    '/JavaScript高级语法/Iterator和Generator.md',
                    '/JavaScript高级语法/async,await,事件循环.md',
                    '/JavaScript高级语法/错误处理.md',
                    '/JavaScript高级语法/模块化.md',
                    '/JavaScript高级语法/JSON细析,浏览器数据存储.md',
                    '/JavaScript高级语法/BOM,DOM简析.md',
                ]
            },
            {
                text: '设计模式',
                children: [
                    '/设计模式/工厂模式/工厂模式.md',
                    '/设计模式/工厂方法模式/工厂方法模式.md',
                    '/设计模式/抽象工厂模式/抽象工厂模式.md',
                    '/设计模式/单例模式/单例模式.md',
                    '/设计模式/适配器模式/适配器模式.md',
                    '/设计模式/观察者模式(发布-订阅者模式或消息机制)/观察者模式.md',
                 ]
            },
            {
                text: '软件设计',
                children: [
                    '/软件设计/SOLID.md'
                ]
            },
            {
                text: '算法',
                children: [
                    '/算法/二分查找.md'
                ]
            }
        ]
    },
    {
        text: '小册',
        children: [
            '/book/typescript通览.md',
        ]
    },
    // {
    //     text: '测试',
    //     children: [
    //         '/blog/test/md中使用自定义vue组件.md',
    //         '/blog/test/使用自定义布局.md',
    //     ]
    // },
    {
        text: '碎片',
        link: '/blog/codes.md'
    },
    {
        text: '其他',
        children: [
            '/blog/chrome.md',
            '/blog/npm.md',
        ]
    },
    {
        text: '关于',
        link: '/bar/contact-author'
    },
    {
        text: '留言',
        link: 'https://github.com/freedomdebug/freedomdebug.github.io/issues'
    },
]
