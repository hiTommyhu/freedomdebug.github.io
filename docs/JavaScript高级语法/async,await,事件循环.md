# async，await，事件循环

众所周知，js在前端开发中的地位。学好它，真的很重要。

下面这篇文章，介绍一下async，await，事件循环。

## async

- async关键字用于声明一个异步函数。

- 异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行。

- **该函数一定返回一个Promise。**

- 异步函数有返回值时，和普通函数会有区别：

  - 异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中。
  - 如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定。
  - 如果我们的异步函数的返回值是一个对象并且实现了thenable(一个包含then方法的对象)，那么会由对象的then方法来决定。

  其实上面的返回值情况，就是和

  你不容错过的JavaScript高级语法(Promise)

  中then方法一样。

- 如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递。

```js
    async function foo() {
      console.log("foo function start~")

      console.log("中间代码~")

      // 异步函数中的异常, 会被作为异步函数返回的Promise的reject值的
      throw new Error("error message")

      console.log("foo function end~")
    }

    // 异步函数的返回值一定是一个Promise
    foo().catch(err => {
      console.log("err:", err)
    })

    console.log("后续还有代码~~~~~")
复制代码
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12c3b6bf0b6b436da5f780ab46712c72~tplv-k3u1fbpfcp-watermark.awebp?)

## await

async函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的。

await关键字有什么特点呢？

- 通常使用await是后面会跟上一个表达式，这个表达式会返回一个Promise。
- 那么await会等到Promise的状态变成fulfilled状态，之后继续执行异步函数。
- 如果await后面是一个普通的值，那么会直接返回这个值。
- 如果await后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值。

```js
    async function foo() {
      const res1 = await 123
      const res2 = await {
        then: function(resolve, reject) {
          resolve("abc")
        }
      }
      console.log(res1, res2) //123 abc
    }
    foo()
复制代码
```

- **如果await后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值。**

```js
    async function foo() {
      const res1 = await Promise.reject("error----------")
      console.log("res1:", res1)
    }

    foo().catch(err => {
      console.log("err:", err) // error---------
    })
复制代码
```

## 进程和线程

线程和进程是操作系统中的两个概念：

- 进程（process）：计算机已经运行的程序，是操作系统管理程序的一种方式。
- 线程（thread）：操作系统能够运行运算调度的最小单位，通常情况下它被包含在进程中。

总之就是

- 进程：我们可以认为，启动一个应用程序，就会默认启动一个进程（也可能是多个进程）。
- 线程：每一个进程中，都会启动至少一个线程用来执行程序中的代码，这个线程被称之为主线程。

所以我们也可以说进程是线程的容器。

## 浏览器中的JavaScript线程

我们经常会说JavaScript是单线程的，但是JavaScript的线程应该有自己的容器进程：浏览器或者Node。

浏览器是一个进程吗，它里面只有一个线程吗？

- 目前多数的浏览器其实都是多进程的，当我们打开一个tab页面时就会开启一个新的进程，这是为了防止一个页面卡死而造成所有页面无法响应，整个浏览器需要强制退出。
- 每个进程中又有很多的线程，其中包括执行JavaScript代码的线程。

JavaScript的代码执行是在一个单独的线程中执行的：

- 这就意味着JavaScript的代码，在同一个时刻只能做一件事。
- 如果这件事是非常耗时的，就意味着当前的线程就会被阻塞。所以真正耗时的操作，实际上并不是由JavaScript线程在执行的。浏览器的每个进程是多线程的，那么其他线程可以来完成这个耗时的操作。

比如网络请求、定时器，我们只需要在特性的时候执行应该有的回调即可。

## 浏览器的事件循环

如果在执行JavaScript代码的过程中，有异步操作是否会在JavaScript中执行呢？ 由于js是单线程的。如果主线程用来处理这些耗时操作，那么将会阻塞后续需要执行的代码。所以异步操作都会调用浏览器其他线程来帮助处理，然后放入对应的队列中，通过js的事件循环机制，来取出并执行。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1fdd2a1c2f348828248a81ac7828c37~tplv-k3u1fbpfcp-watermark.awebp?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9525be95b8c4473999abbdf0e5e87945~tplv-k3u1fbpfcp-watermark.awebp?) 导图要表达的内容用文字来表述的话：

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
- 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
- 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
- 上述过程会不断重复，也就是常说的Event Loop(事件循环)。

MacroTask（宏任务）

- `setTimeout`、`setInterval`、`setImmediate`（浏览器暂时不支持，只有IE10支持，具体可见[`MDN`](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FWindow%2FsetImmediate)）、`I/O`、`UI Rendering`。

MicroTask（微任务）

- `Promise`的then回调、`queueMicrotask()`、`Object.observe(废弃)`、`MutationObserver`（具体使用方式查看[这里](https://link.juejin.cn?target=http%3A%2F%2Fjavascript.ruanyifeng.com%2Fdom%2Fmutationobserver.html)）

`setTimeout`这个函数，是经过指定时间后，把要执行的任务加入到Event Queue中。并不是到了指定的时间就执行，只有当主线程空闲出来后，才回去执行event queue中的等待事件。

`setTimeout(fn,0)`的含义是，指定某个任务在主线程最早可得的空闲时间执行，意思就是不用再等多少秒了，只要主线程执行栈内的同步任务全部执行完成，栈为空就马上执行。

那么事件循环对于两个队列的优先级是怎么样的呢？

- main script中的代码优先执行（编写的顶层script代码）。
- **在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行。** 也就是宏任务执行之前，必须保证微任务队列是空的。如果不为空，那么就优先执行微任务队列中的任务（回调）。

下面来看一些面试题吧。

```js
    setTimeout(function () {
      console.log("setTimeout1");
      new Promise(function (resolve) {
        resolve();
      }).then(function () {
        new Promise(function (resolve) {
          resolve();
        }).then(function () {
          console.log("then4");
        });
        console.log("then2");
      });
    });

    new Promise(function (resolve) {
      console.log("promise1");
      resolve();
    }).then(function () {
      console.log("then1");
    });

    setTimeout(function () {
      console.log("setTimeout2");
    });

    console.log(2);

    queueMicrotask(() => {
      console.log("queueMicrotask1")
    });

    new Promise(function (resolve) {
      resolve();
    }).then(function () {
      console.log("then3");
    });
    // promise1
    // 2
    // then1
    // queueMicrotask1
    // then3
    // setTimeout1
    // then2
    // then4
    // setTimeout2
复制代码
    async function async1 () {
      console.log('async1 start')
      await async2();
      console.log('async1 end')
    }

    async function async2 () {
      console.log('async2')
    }

    console.log('script start')

    setTimeout(function () {
      console.log('setTimeout')
    }, 0)

    async1();

    new Promise (function (resolve) {
      console.log('promise1')
      resolve();
    }).then (function () {
      console.log('promise2')
    })

    console.log('script end')
复制代码
```

下面这道题分析了三种情况。如果说then方法返回的不是一个普通值。即不是thenable,或者不是Promise。那么它将还是按照以前那样执行。

- 如果返回的是thenable类型，那么顺延下一次微任务执行。
- 如果返回的是Promise类型，那么顺延两次微任务执行。

```js
    Promise.resolve().then(() => {
      console.log(0);
      // 1.直接return一个值 相当于resolve(4)
      // return 4

      // 2.return thenable的值
      // 不是普通的值, 多加一次微任务
      return {
        then: function(resolve) {
          // 大量的计算
          resolve(4)
        }
      }

      // 3.return Promise
      // 不是普通的值, 多加一次微任务
      // Promise.resolve(4), 多加一次微任务
      // 一共多加两次微任务
      return Promise.resolve(4)
    }).then((res) => {
      console.log(res)
    })

    Promise.resolve().then(() => {
      console.log(1);
    }).then(() => {
      console.log(2);
    }).then(() => {
      console.log(3);
    }).then(() => {
      console.log(5);
    }).then(() =>{
      console.log(6);
    })





    // 1.return 4
    // 0
    // 1
    // 4
    // 2
    // 3
    // 5
    // 6

    // 2.return thenable
    // 0
    // 1
    // 2
    // 4
    // 3
    // 5
    // 6

    // 3.return promise
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
复制代码
```

## Node的事件循环

浏览器中的EventLoop是根据HTML5定义的规范来实现的，不同的浏览器可能会有不同的实现，而Node中是由libuv实现的。

这里我们来给出一个Node的架构图： ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/616b114c15df47ef9a60579eb5066d78~tplv-k3u1fbpfcp-watermark.awebp?)

- libuv中主要维护了一个EventLoop和worker threads（线程池）。
- EventLoop负责调用系统的一些其他操作：文件的IO、Network、child-processes等。

libuv是一个多平台的专注于异步IO的库，它最初是为Node开发的，但是现在也被使用到Luvit、Julia、pyuv等其他地方。

事件循环像是一个桥梁，是连接着应用程序的JavaScript和系统调用之间的通道。无论是我们的文件IO、数据库、网络IO、定时器、子进程，在完成对应的操作后，都会将对应的结果和回调函数放到事件循环（任务队列）中。事件循环会不断的从任务队列中取出对应的事件（回调函数）来执行。

但是一次完整的事件循环Tick分成很多个阶段：

- 定时器（Timers）：本阶段执行已经被 setTimeout() 和 setInterval() 的调度回调函数。
- 待定回调（Pending Callback）：对某些系统操作（如TCP错误类型）执行回调，比如TCP连接时接收到ECONNREFUSED。
- idle, prepare：仅系统内部使用。
- 轮询（Poll）：检索新的 I/O 事件；执行与 I/O 相关的回调。
- 检测（check）：setImmediate() 回调函数在这里执行。
- 关闭的回调函数：一些关闭的回调函数，如：socket.on('close', ...)。

### node中的宏任务和微任务

我们会发现从一次事件循环的Tick来说，Node的事件循环更复杂，它也分为微任务和宏任务：

- 宏任务（macrotask）：setTimeout、setInterval、IO事件、setImmediate、close事件。
- 微任务（microtask）：Promise的then回调、process.nextTick、queueMicrotask。

但是，Node中的事件循环不只是 微任务队列和 宏任务队列：

- 微任务队列：
  - next tick queue：process.nextTick。
  - other queue：Promise的then回调、queueMicrotask。
- 宏任务队列：
  - timer queue：setTimeout、setInterval。
  - poll queue：IO事件。
  - check queue：setImmediate。
  - close queue：close事件。

### Node事件循环的顺序

所以，在每一次事件循环的tick中，会按照如下顺序来执行代码：

- next tick microtask queue。
- other microtask queue。
- timer queue。
- poll queue。
- check queue。
- close queue。

下面来看一道代码题

```js
    async function async1() {
      console.log('async1 start')
      await async2()
      console.log('async1 end')
    }

    async function async2() {
      console.log('async2')
    }

    console.log('script start')

    setTimeout(function () {
      console.log('setTimeout0')
    }, 0)

    setTimeout(function () {
      console.log('setTimeout2')
    }, 300)

    setImmediate(() => console.log('setImmediate'));

    process.nextTick(() => console.log('nextTick1'));

    async1();

    process.nextTick(() => console.log('nextTick2'));

    new Promise(function (resolve) {
      console.log('promise1')
      resolve();
      console.log('promise2')
    }).then(function () {
      console.log('promise3')
    })

    console.log('script end')

    // script start
    // async1 start
    // async2
    // promise1
    // promise2
    // script end
    // nexttick1
    // nexttick2
    // async1 end
    // promise3
    // settimetout0
    // setImmediate
    // setTimeout2
复制代码
```

xdm，如果感觉有帮助就多多点赞，别总收藏不点赞啊。


作者：Spirited_Away
链接：https://juejin.cn/post/7055522384408739847
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。