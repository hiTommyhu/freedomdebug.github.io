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
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(一).md',
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(二).md',
                     '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(三).md',
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(四).md',
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(Proxy, Reflect).md',
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(Promise).md',
                    '/blog/你不容错过的JavaScript高级语法/你不容错过的JavaScript高级语法(Iterator, Generator).md',
                ]
            }
            
        ]
    },
    {
        text: '关于',
        link: '/bar/contact-author'
    },
]
