module.exports = [
    {
        //可多级嵌套
        //test为标签的文字内容
        text: '技术',
        //items为子标签列表
        children: [
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
                text: '你不容错过的JavaScript高级语法',
                 children: [
                    '/JavaScript高级语法/JavaScript高级语法一.md',
                    '/JavaScript高级语法/JavaScript高级语法二.md',
                    '/JavaScript高级语法/JavaScript高级语法三.md',
                    '/JavaScript高级语法/JavaScript高级语法四.md',
                    '/JavaScript高级语法/Proxy和Reflect.md',
                    '/JavaScript高级语法/Promise.md',
                    '/JavaScript高级语法/Iterator和Generator.md',
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
        text: '关于',
        link: '/bar/contact-author'
    },
]
