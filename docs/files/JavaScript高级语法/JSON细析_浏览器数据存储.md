# JSON细析, 浏览器数据存储

下面一篇文章将介绍JSON, 浏览器数据存储。

## JSON

### JSON的由来

在目前的开发中，JSON是一种非常重要的数据格式，**它并不是编程语言，而是一种可以在服务器和客户端之间传输的数据格式。**

JSON的全称是JavaScript Object Notation（JavaScript对象符号）。JSON是由Douglas Crockford构想和设计的一种轻量级资料交换格式，算是JavaScript的一个子集。但是虽然JSON被提出来的时候是主要应用JavaScript中，但是目前已经独立于编程语言，可以在各个编程语言中使用。很多编程语言都实现了将JSON转成对应模型的方式。

其他的传输格式：

- XML：在早期的网络传输中主要是使用XML来进行数据交换的，但是这种格式在解析、传输等各方面都弱于JSON，所以目前已经很少在被使用了。
- Protobuf：另外一个在网络传输中目前已经越来越多使用的传输格式是protobuf，但是直到2021年的3.x版本才支持JavaScript，所以目前在前端使用的较少。

目前JSON被使用的场景也越来越多：

- 网络数据的传输JSON数据。
- 项目的某些配置文件。
- 非关系型数据库（NoSQL）将json作为存储格式。

### JSON存储类型

JSON的顶层支持三种类型的值：

- 简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型。

```json
    123
复制代码
```

- 对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值。

```json
    {
  "name": "zh",
  "age": 22
}
复制代码
```

- 数组值：数组的值可以是简单值、对象值、数组值。

```json
    [
      "abc",
      123,
      {
        "name": "zh"
      }
    ]
复制代码
```

### JSON序列化

某些情况下我们希望将JavaScript中的复杂类型转化成JSON格式的字符串，这样方便对其进行处理：

将一个对象保存到localStorage中。但是如果我们直接存放一个对象，这个对象会被转化成 [object Object] 格式的字符串，并不是我们想要的结果。

### JSON序列化方法

遇到上面的情况，我们就需要使用到JSON的方法进行转化。

在ES5中引用了JSON全局对象，该对象有两个常用的方法：

- stringify方法：将JavaScript类型转成对应的JSON字符串。
- parse方法：解析JSON字符串，转回对应的JavaScript类型。

```js
    const obj = {
      name: "zh",
      age: 22,
    }
    // 将obj转成JSON格式的字符串
    const objString = JSON.stringify(obj)

    // 将对象数据存储localStorage
    localStorage.setItem("obj", objString)

    const jsonString = localStorage.getItem("obj")

    // 将JSON格式的字符串转回对象
    const info = JSON.parse(jsonString)
    console.log(info)
复制代码
```

#### stringify

其中stringify可以传入第二个参数。

- 主要是用于定制转化的json字符串。
- 如果是一个 replacer 函数，可以定制传入对象中的值。

```js
    const obj = {
      name: 'zh',
      age: 22,
      friends: ["llm", "zhllm"]
    }

    console.log(JSON.stringify(obj,(key, value) => {
      if(key === "name") {
      // value为当前key的值
        return "llm"
      }else if(key === "age") {
        return 21
      }
      // 其他情况返回原本值
      return value
    })) // {"name":"llm","age":21,"friends":["llm","zhllm"]}
复制代码
```

- 如果指定是数组，则将指定传入的对象那些属性需要转化，其他的忽略。

```js
    const obj = {
      name: 'zh',
      age: 22,
      friends: ["llm", "zhllm"]
    }


    console.log(JSON.stringify(obj, ["name", "age"])) //{"name":"zh","age":22}
复制代码
```

并且stringify还可以传入第三个参数:

- 用于格式化数据。
- 如果传入的是Number类型，那么表示每个key都要空number个空格。格式化数据。

```js
    const jsonString = JSON.stringify(obj, null, 2)
    console.log(jsonString)
复制代码
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dec2ca410e474fe590d14fe171f3bc06~tplv-k3u1fbpfcp-watermark.awebp?)

- 如果传入的是String类型，那么表示每个key前面都会被添加的string代替。格式化数据。

```js
    const jsonString = JSON.stringify(obj, null, "---")
    console.log(jsonString)
复制代码
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4a266b02f72642c8828cd233e81fd807~tplv-k3u1fbpfcp-watermark.awebp?) 如果说传入的对象内部有toJSON方法，那么stringify方法直接返回toJSON方法返回的值。

```js
    const obj = {
      name: 'zh',
      age: 22,
      friends: ["llm", "zhllm"],
      toJSON: function() {
        return "Llm love zh."
      }
    }

    const jsonString4 = JSON.stringify(obj)
    console.log(jsonString4) //"Llm love zh."
复制代码
```

#### parse

parse方法也能传递第二个参数。为一个函数，用来定制转化后的值。

```js
    const JSONString = `{
      "name": "zh",
      "age": 22,
      "friends": [
        "llm",
        "zhllm"
      ]
    }`

    const info = JSON.parse(JSONString, (key, value) => {
      if (key === "age") {
        return value - 1
      }
      return value
    })
    console.log(info) //{ name: 'zh', age: 21, friends: [ 'llm', 'zhllm' ] }
复制代码
```

### 使用JSON序列化深拷贝

另外我们生成的新对象和之前的对象并不是同一个对象。相当于是进行了一次深拷贝。

```js
    const obj = {
      name: 'zh',
      age: 22,
      friends: ["llm", "zhllm"],
      person: {
        name: 'pp'
      },
      foo: function() {
        console.log("foo function")
      }
    }

    const obj1 = JSON.parse(JSON.stringify(obj))
    console.log(obj1.person === obj.person) // false
复制代码
```

**注意：这种方法它对函数是无能为力的。因为stringify并不会对函数进行处理。**

## 浏览器数据存储

### Storage

WebStorage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式：

- localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留。
- sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除。

localStorage和sessionStorage的区别：

- 关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除。
- **在页面内实现跳转**，localStorage会保留，sessionStorage也会保留。
- **在页面外实现跳转（打开新的网页）**，localStorage会保留，sessionStorage不会被保留。

Storage常见的方法和属性：

- Storage.length：只读属性
  - 返回一个整数，表示存储在Storage对象中的数据项数量。
- Storage.key()：该方法接受一个数值n（从0开始）作为参数，返回存储中的第n个key名称。
- Storage.getItem()：该方法接受一个key作为参数，并且返回key对应的value。
- Storage.setItem()：该方法接受一个key和value，并且将会把key和value添加到存储中。如果key存储，则更新其对应的值。
- Storage.removeItem()：该方法接受一个key作为参数，并把该key从存储中删除。
- Storage.clear()：该方法的作用是清空存储中的所有key。

下面来对localStorage和sessionStorage进行封装并对其进行JSON序列化，方便以后使用：

```js
    class Cache {
      constructor(isLocal = true) {
        this.storage = isLocal ? localStorage: sessionStorage
      }

      setItem(key, value) {
        if (value) {
          this.storage.setItem(key, JSON.stringify(value))
        }
      }

      getItem(key) {
        let value = this.storage.getItem(key)
        if (value) {
          value = JSON.parse(value)
          return value
        } 
      }

      removeItem(key) {
        this.storage.removeItem(key)
      }

      clear() {
        this.storage.clear()
      }

      key(index) {
        return this.storage.key(index)
      }

      length() {
        return this.storage.length
      }
    }

    const localCache = new Cache()
    const sessionCache = new Cache(false)

    export {
      localCache,
      sessionCache
    }
复制代码
```

### IndexedDB

什么是IndexedDB呢？

我们能看到DB这个词，就说明它其实是一种数据库（Database），通常情况下在服务器端比较常见。在实际的开发中，大量的数据都是存储在数据库的，客户端主要是请求这些数据并且展示。

有时候我们可能会存储一些简单的数据到本地（浏览器中），比如token、用户名、密码、用户信息等，比较少存储大量的数据。那么如果确实有大量的数据需要存储，这个时候可以选择使用IndexedDB。

- IndexedDB是一种底层的API，用于在客户端存储大量的结构化数据。
- 它是一种事务型数据库系统，是一种基于JavaScript面向对象数据库，有点类似于NoSQL（非关系型数据库）。
- IndexDB本身就是基于事务的，我们只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列事务即可。

#### IndexedDB的连接数据库

第一步：打开indexedDB的某一个数据库:

- 通过`indexDB.open(数据库名称, 数据库版本)`方法。
- 如果数据库不存在，那么会创建这个数据。
- 如果数据库已经存在，那么会打开这个数据库。

```js
    // 打开数据(和数据库建立连接)
    const dbRequest = indexedDB.open("zhDB", 2)
复制代码
```

第二步：通过监听回调得到数据库连接结果：

- 数据库的open方法会得到一个IDBOpenDBRequest类型
- 我们可以通过下面的三个回调来确定结果：
  - onerror：当数据库连接失败时。
  - onsuccess：当数据库连接成功时回调。**我们可以通过onsuccess回调的event获取到db对象：event.target.result。**
  - onupgradeneeded：当数据库第一次打开或者version发生变化并且高于之前版本时回调。**通常我们在这里会创建具体的存储对象：db.createObjectStore(存储对象名称, { keypath: 存储的主键 })**

```js
    dbRequest.onerror = function(err) {
      console.log("打开数据库失败~")
    }
    // 以后访问时的回调
    let db = null
    dbRequest.onsuccess = function(event) {
      db = event.target.result
    }
    // 第一次打开/或者版本发生升级
    dbRequest.onupgradeneeded = function(event) {
      const db = event.target.result

      // 创建一些存储对象
      db.createObjectStore("users", { keyPath: "id" })
    }
复制代码
```

#### IndexedDB的数据库操作

我们对数据库的操作要通过事务对象来完成：

- 第一步：通过db获取对应存储的事务 db.transaction(存储名称, 可写操作)。
- 第二步：通过事务获取对应的存储对象 transaction.objectStore(存储名称)。

```js
    const transaction = db.transaction("users", "readwrite")
    const store = transaction.objectStore("users")
复制代码
```

接下来我们就可以进行增删改查操作了：

- 增。通过add方法。

```js
    const request = store.add(user)
    // 单条数据存储成功后的回调
    request.onsuccess = function() {
        console.log(`${user.name}插入成功`)
    }
    // 全部数据存储成功的回调。
    transaction.oncomplete = function() {
      console.log("添加操作全部完成")
    }
复制代码
```

- 查。
  - 方式一：get方法，**只能传入主键, 根据主键查询。**
  - 方式二：openCursor方法，然后调用成功时的回调，然后查询全部数据，然后if过滤数据。

```js
    // 方式一
    const request = store.get(102)
    request.onsuccess = function(event) {
      console.log(event.target.result)
    }
    //方式二:
    const request = store.openCursor()
    request.onsuccess = function(event) {
      const cursor = event.target.result
      if (cursor) {
        if (cursor.key === 101) {
          console.log(cursor.key, cursor.value)
        } else {
          cursor.continue()
        }
      } else {
        console.log("查询完成")
      }
    }
复制代码
```

- 改。还是先查找，然后调用该记录的update方法。将修改后的数据作为参数传入。

```js
    const updateRequest = store.openCursor()
    updateRequest.onsuccess = function(event) {
      const cursor = event.target.result
      if (cursor) {
        if (cursor.key === 101) {
          const value = cursor.value;
          value.name = "curry"
          cursor.update(value)
        } else {
          cursor.continue()
        }
      } else {
        console.log("查询完成")
      }
    }
复制代码
```

- 删。还是先查找，然后调用该记录的delete方法。

```js
    const deleteRequest = store.openCursor()
    deleteRequest.onsuccess = function(event) {
      const cursor = event.target.result
      if (cursor) {
        if (cursor.key === 101) {
          cursor.delete()
        } else {
          cursor.continue()
        }
      } else {
        console.log("查询完成")
      }
    }
复制代码
```

[详细知识请访问mdn](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FIndexedDB_API) 下面来看一下案例

```html
  <button>新增</button>
  <button>查询</button>
  <button>删除</button>
  <button>修改</button>
  <script src="./index.js"></script>
复制代码
    // 打开数据(和数据库建立连接)
    const dbRequest = indexedDB.open("zhDB", 3)
    dbRequest.onerror = function(err) {
      console.log("打开数据库失败~")
    }
    let db = null
    dbRequest.onsuccess = function(event) {
      db = event.target.result
    }
    // 第一次打开/或者版本发生升级
    dbRequest.onupgradeneeded = function(event) {
      const db = event.target.result

      console.log(db)

      // 创建一些存储对象
      db.createObjectStore("users", { keyPath: "id" })
    }

    class User {
      constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
      }
    }

    const users = [
      new User(100, "zh", 18),
      new User(101, "llm", 40),
      new User(102, "zh-llm", 30),
    ]

    // 获取btns, 监听点击
    const btns = document.querySelectorAll("button")
    for (let i = 0; i < btns.length; i++) {
      btns[i].onclick = function() {
        const transaction = db.transaction("users", "readwrite")
        const store = transaction.objectStore("users")

        switch(i) {
          case 0:
            console.log("点击了新增")
            for (const user of users) {
              const request = store.add(user)
              request.onsuccess = function() {
                console.log(`${user.name}插入成功`)
              }
            }
            transaction.oncomplete = function() {
              console.log("添加操作全部完成")
            }
            break
          case 1:
            console.log("点击了查询")

            // 1.查询方式一(知道主键, 根据主键查询)标识要检索的记录的键或键范围。
            const request = store.get(102)
            request.onsuccess = function(event) {
              console.log(event.target.result)
            }

            // 2.查询方式二:
            // const request = store.openCursor()
            // request.onsuccess = function(event) {
            //   const cursor = event.target.result
            //   if (cursor) {
            //     if (cursor.key === 101) {
            //       console.log(cursor.key, cursor.value)
            //     } else {
            //       cursor.continue()
            //     }
            //   } else {
            //     console.log("查询完成")
            //   }
            // }
            break
          case 2:
            console.log("点击了删除")
            const deleteRequest = store.openCursor()
            deleteRequest.onsuccess = function(event) {
              const cursor = event.target.result
              if (cursor) {
                if (cursor.key === 101) {
                  cursor.delete()
                } else {
                  cursor.continue()
                }
              } else {
                console.log("查询完成")
              }
            }
            break
          case 3:
            console.log("点击了修改")
            const updateRequest = store.openCursor()
            updateRequest.onsuccess = function(event) {
              const cursor = event.target.result
              if (cursor) {
                if (cursor.key === 101) {
                  const value = cursor.value;
                  value.name = "curry"
                  cursor.update(value)
                } else {
                  cursor.continue()
                }
              } else {
                console.log("查询完成")
              }
            }
            break
        }
      }
    }
复制代码
```

![1.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a2479e3747c4cdf8ab80564a7c3f962~tplv-k3u1fbpfcp-watermark.awebp?)

xdm,如果有帮助，就多多点赞，不要收藏比点赞多。


作者：Spirited_Away
链接：https://juejin.cn/post/7056420206000177159
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。