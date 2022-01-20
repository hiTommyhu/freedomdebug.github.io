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
                    { text: 'HTTP1.1', link: '/blog/HTTP1.1/' },
                    { text: 'crlf', link: '/blog/crlf/' }
                ]
            }
            
        ]
    },
    {
        text: '关于',
        link: '/bar/contact-author'
    },
]
