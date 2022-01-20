## 1.HTTP报文

HTTP通信过程包括客户端往服务器端发送请求以及服务器端给客户端返回响应两个过程。在这两个过程中就会产生请求报文和响应报文。

那么什么是HTTP报文呢？

HTTP报文是用于HTTP协议交互的信息，HTTP报文本身是由多行数据构成的字符串文本。客户端的HTTP报文叫做请求报文，服务器端的HTTP报文叫做响应报文。

HTTP报文由哪几部分构成？各部分都有什么作用？

HTTP报文由报文首部和报文主体构成，中间由一个空行分隔。 报文首部是客户端或服务器端需处理的请求或响应的内容及属性， 可以传递额外的重要信息。报文首部包括请求行和请求头部，报文主体主要包含应被发送的数据。通常，不一定有报文主体。

HTTP报文首部的结构：由首部字段名和字段值构成的，中间用冒号“:”分割。首部字段格式： 首部字段名:字段值。

例如，在HTTP首部中以Content-Type这个字段来表示报文主体的对象类型：Content-Type:text/html。

上述的Content-Type是首部字段名，text/html是字段值，字段值可以是多个值，例如：Keep-Alive:timeout=15,max=10。

HTTP首部字段通常有4种类型：通用首部，请求首部，响应首部，实体首部。

通用首部字段：请求报文和响应报文两方都会使用的首部。

请求首部字段：从客户端向服务器端发送请求报文时使用的首部。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。

响应首部字段：从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。

实体首部字段：针对请求报文和响应报文的实体部分使用的首部。补充了资源内容更新时间等和实体有关的信息。

HTTP报文结构基本格式举例：

```bash
GET / HTTP/1.1
Host: www.enjoytoday.cn
Connection: keep-alive
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.84 Safari/537.36
Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
Referer: http://www.enjoytoday.cn/posts/326
Accept-Encoding: gzip, deflate, sdch
Accept-Language: zh-CN,zh;q=0.8
Cookie: bdshare_firstime=1466032270994; UM_distinctid=15c4ef2ac4e2e4-0d13269271b947-1b2a120b-1fa400-15c4ef2ac4f7b5; un=aGZjYWk=; comment_author=aGZjYWk=; comment_author_email=1710600212@qq.com; comment_author_url=http://www.enjoytoday.cn; c_id=dUhIaTlndmc4MVVYbjRQTGxMRTotMTpFODg3QjgzQjg1NjgxQjQxRUYxNjg2QzJFRkMyQjI2QQ==; JSESSIONID=ADBC8C3DADF6C815D778450C193C6637.ajp13_worker; Hm_lvt_ce55bfda158556585a8b7b246346c8ba=1498560244,1498739070,1498833193,1498917432; Hm_lpvt_ce55bfda158556585a8b7b246346c8ba=1498917597; CNZZDATA1262047894=1598545996-1495973145-%7C1498917578
 
username=hfcai&sex=man
```
[more](https://blog.csdn.net/kongmin_123/article/details/82154780)
