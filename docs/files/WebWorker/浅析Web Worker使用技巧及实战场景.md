　　以前我们总说，JS是单线程没有多线程，当JS在页面中运行长耗时同步任务的时候就会导致页面假死影响用户体验，从而需要设置把任务放在任务队列中；执行任务队列中的任务也并非多线程进行的，然而现在HTML5提供了我们前端开发这样的能力 - Web Workers API，我们一起来看一看 Web Worker 是什么，怎么去使用它，在实际生产中如何去用它来进行产出。

一、概述
　　JavaScript 语言采用的是单线程模型，也就是说，所有任务只能在一个线程上完成，一次只能做一件事。前面的任务没做完，后面的任务只能等着。随着电脑计算能力的增强，尤其是多核 CPU 的出现，单线程带来很大的不便，无法充分发挥计算机的计算能力。

　　Web Workers 使得一个Web应用程序可以在与主执行线程分离的后台线程中运行一个脚本操作。这样做的好处是可以在一个单独的线程中执行费时的处理任务，从而允许主（通常是UI）线程运行而不被阻塞。

　　Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。

　　在主线程运行的同时，worker线程也在运行，相互不干扰。等到 Worker 线程完成计算任务，再把结果返回给主线程。这样做的好处是主线程可以把一些计算密集型或高延迟的任务交给worker线程执行，被 Worker 线程负担了，这样主线程（通常负责 UI 交互）就会很轻松流畅，不会被阻塞或拖慢。

　　但是注意这并不是意味着JS语言本身支持了多线程能力，而是浏览器作为宿主环境提供了JS一个多线程运行的环境。

　　而且Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该注意及时关闭。

　　或者说：如果worker无实例引用，该worker空闲后立即会被关闭；如果worker实列引用不为0，该worker空闲也不会被关闭。

二、使用
1、限制
　　worker线程的使用有一些注意点：

（1）同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

（2）文件限制：为了安全，Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本必须来自网络，且需要与主线程的脚本同源。

（3）DOM操作限制：worker线程在与主线程的window不同的另一个全局上下文中运行，其中无法读取主线程所在网页的DOM对象，也不能获取 document、window等对象，但是可以获取navigator、location(只读)、XMLHttpRequest、setTimeout等浏览器API。

（4）通信限制：worker线程与主线程不在同一个上下文，不能直接通信，需要通过postMessage方法传递消息来通信。

（5）脚本限制：worker线程不能执行alert、confirm，但可以使用 XMLHttpRequest 对象发出ajax请求。

2、基本用法
（1）Worker()构造函数
　　在主线程中生成 Worker 线程很容易：主线程采用new命令，调用Worker()构造函数，新建一个 Worker 线程。

var myWorker = new Worker(jsUrl, options)
　　第一个参数是脚本的网址（必须遵守同源政策），该参数是必需的，且只能加载 JS 脚本，否则报错。该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络。如果下载没有成功（比如404错误），Worker 就会默默地失败。

　　第二个参数是配置对象，该对象可选。它的一个作用就是指定 Worker 的名称，用来区分多个 Worker 线程。
```
// 主线程
var myWorker = new Worker('worker.js', { name : 'myWorker' });

// Worker 线程
self.name // myWorker
```
　　然后，主线程调用worker.postMessage()方法，向 Worker 发消息。

（2）消息传递
主线程：

　　然后，主线程调用worker.postMessage()方法，向 Worker 发消息。
```
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});
　　worker.postMessage()方法的参数，就是主线程传给 Worker 的数据。它可以是各种数据类型，包括二进制数据。
```
　　接着，主线程通过worker.onmessage指定监听函数，接收子线程发回来的消息。
```

worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
  doSomething();
}

function doSomething() {
  // 执行任务
  worker.postMessage('Work done!');
}
```

　　上面代码中，事件对象的data属性可以获取 Worker 发来的数据。

　　Worker 完成任务以后，主线程就可以把它关掉。
```
worker.terminate();
Worker 线程

　　Worker 线程内部需要有一个监听函数，监听message事件。

self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);
　　上面代码中，self代表子线程自身，即子线程的全局对象。因此，等同于下面两种写法。


// 写法一
this.addEventListener('message', function (e) {
  this.postMessage('You said: ' + e.data);
}, false);

// 写法二
addEventListener('message', function (e) {
  postMessage('You said: ' + e.data);
}, false);
```

　　除了使用self.addEventListener()指定监听函数，也可以使用self.onmessage指定。监听函数的参数是一个事件对象，它的data属性包含主线程发来的数据。

　　self.postMessage()方法用来向主线程发送消息。

　　根据主线程发来的数据，Worker 线程可以调用不同的方法，下面是一个例子。
```

self.addEventListener('message', function (e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER STARTED: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER STOPPED: ' + data.msg);
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('Unknown command: ' + data.msg);
  };
}, false);
```

　　上面代码中，self.close()用于在 Worker 内部关闭自身。

（3）API实例
　　关于api什么的，直接上例子大概就能明白了，首先是worker线程的js文件：

```

// workerThread1.js
let i = 1

function simpleCount() {
  i++
  self.postMessage(i)
  setTimeout(simpleCount, 1000)
}

simpleCount()

self.onmessage = ev => {
  postMessage(ev.data + ' 呵呵~')
}
```

　　在HTML文件中的body中：


// 主线程，HTML文件的body标签中

```
<div>
  Worker 输出内容：<span id='app'></span>
  <input type='text' title='' id='msg'>
  <button onclick='sendMessage()'>发送</button>
  <button onclick='stopWorker()'>stop!</button>
</div>

<script type='text/javascript'>
  if (typeof(Worker) === 'undefined')    // 使用Worker前检查一下浏览器是否支持
    document.writeln(' Sorry! No Web Worker support.. ')
  else {
    window.w = new Worker('workerThread1.js')
    window.w.onmessage = ev => {
      document.getElementById('app').innerHTML = ev.data
    }
    
    window.w.onerror = err => {
      w.terminate()
      console.log(error.filename, error.lineno, error.message) // 发生错误的文件名、行号、错误内容
    }
    
    function sendMessage() {
      const msg = document.getElementById('msg')
      window.w.postMessage(msg.value)
    }
    
    function stopWorker() {
      window.w.terminate()
    }
  }
</script>
```

　　可以自己运行一下看看效果，上面用到了一些常用的api：

　　主线程中的api，worker表示是 Worker 的实例：

worker.postMessage: 主线程往worker线程发消息，消息可以是任意类型数据，包括二进制数据
worker.terminate: 主线程关闭worker线程
worker.onmessage: 指定worker线程发消息时的回调，也可以通过worker.addEventListener('message',cb)的方式
worker.onerror: 指定worker线程发生错误时的回调，也可以 worker.addEventListener('error',cb)
　　Worker线程中全局对象为 self，代表子线程自身，这时 this指向self，其上有一些api：

self.postMessage: worker线程往主线程发消息，消息可以是任意类型数据，包括二进制数据
self.close: worker线程关闭自己
self.onmessage: 指定主线程发worker线程消息时的回调，也可以self.addEventListener('message',cb)
self.onerror: 指定worker线程发生错误时的回调，也可以 self.addEventListener('error',cb)
　　注意，w.postMessage(aMessage, transferList) 方法接受两个参数，aMessage 是可以传递任何类型数据的，包括对象，这种通信是拷贝关系，即是传值而不是传址，Worker 对通信内容的修改，不会影响到主线程。事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原。一个可选的 Transferable 对象的数组，用于传递所有权。如果一个对象的所有权被转移，在发送它的上下文中将变为不可用（中止），并且只有在它被发送到的worker中可用。可转移对象是如ArrayBuffer，MessagePort或ImageBitmap的实例对象，transferList数组中不可传入null。

　　Transferable 接口代表一个能在不同可执行上下文之间，例如如主线程和 Worker 之间，相互传递的对象。这是一个抽象接口，没有任何对象属于此类型。它也没有定义任何方法和属性；它只是一个标签，用来指示对象在特定场合下，比如如通过 Worker.postMessage() 方法传递到 Worker，是可用的。

备注：技术上，Transferable 接口已不复存在。但是，Transferable 对象的效用依旧存在，只是其实现被移到了更加底层的位置。（转而通过WebIDL 拓展属性 [Transferable] 实现）。

ArrayBuffer、MessagePort 和 ImageBitmap 实现了此接口。

　　更详细的API参见 MDN - WorkerGlobalScope。

（4）Worker 加载脚本
　　Worker 内部如果要加载其他脚本，有一个专门的方法importScripts()。

　　worker线程中加载脚本的api：

```
importScripts('script1.js')    // 加载单个脚本
importScripts('script1.js', 'script2.js')    // 加载多个脚本
```
（5）错误处理
　　主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的error事件。

```
worker.onerror(function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});

// 或者
worker.addEventListener('error', function (event) {
  // ...
});
```

Worker 内部也可以监听error事件。

（6）关闭 Worker

使用完毕，为了节省系统资源，必须关闭 Worker。

```
// 主线程
worker.terminate();

// Worker 线程
self.close();
```
三、数据通信
　　前面说过，主线程与 Worker 之间的通信内容，可以是文本，也可以是对象。需要注意的是，这种通信是拷贝关系，也就是传值而不是传址，Worker 对通信内容的修改，不会影响到主线程。事实上，浏览器内部的运行机制是，先将通信内容串行化，然后把串行化后的字符串发给 Worker，后者再将它还原。

　　主线程与 Worker 之间也可以交换二进制数据，比如 File、Blob、ArrayBuffer 等类型，也可以在线程之间发送。下面是一个例子：
```

// 主线程
var uInt8Array = new Uint8Array(new ArrayBuffer(10));
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]
}
worker.postMessage(uInt8Array);

// Worker 线程
self.onmessage = function (e) {
  var uInt8Array = e.data;
  postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
  postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
};
```

　　但是，拷贝方式发送二进制数据，会造成性能问题。比如，主线程向 Worker 发送一个 500MB 文件，默认情况下浏览器会生成一个原文件的拷贝。为了解决这个问题，JavaScript 允许主线程把二进制数据直接转移给子线程，但是一旦转移，主线程就无法再使用这些二进制数据了，这是为了防止出现多个线程同时修改数据的麻烦局面。这种转移数据的方法，叫做Transferable Objects。这使得主线程可以快速把数据交给 Worker，对于影像处理、声音处理、3D 运算等就非常方便了，不会产生性能负担。

　　如果要直接转移数据的控制权，就要使用下面的写法。
```

// Transferable Objects 格式
worker.postMessage(arrayBuffer, [arrayBuffer]);

// 例子
var ab = new ArrayBuffer(1);
worker.postMessage(ab, [ab]);
```

四、同页面的 Web Worker
　　通常情况下，Worker 载入的是一个单独的 JavaScript 脚本文件，但是也可以载入与主线程在同一个网页的代码。
```

    <!DOCTYPE html>
      <body>
        <script id="worker" type="app/worker">
          addEventListener('message', function () {
            postMessage('some message');
          }, false);
        </script>
      </body>
    </html>

```
　　上面是一段嵌入网页的脚本，注意必须指定script标签的type属性是一个浏览器不认识的值，上例是app/worker。

　　然后，读取这一段嵌入页面的脚本，用 Worker 来处理。

```

    var blob = new Blob([document.querySelector('#worker').textContent]);
    var url = window.URL.createObjectURL(blob);
    var worker = new Worker(url);

    worker.onmessage = function (e) {
      // e.data === 'some message'
    };

```
　　上面代码中，先将嵌入网页的脚本代码，转成一个二进制对象，然后为这个二进制对象生成 URL，再让 Worker 加载这个 URL。这样就做到了，主线程和 Worker 的代码都在同一个网页上面。

五、实战场景
　　个人觉得，Web Worker我们可以当做计算器来用，需要用的时候掏出来摁一摁，不用的时候一定要收起来。

1、加密数据：有些加解密的算法比较复杂，或者在加解密很多数据的时候，这会非常耗费计算资源，导致UI线程无响应，因此这是使用Web Worker的好时机，使用Worker线程可以让用户更加无缝的操作UI。

2、预取数据：有时候为了提升数据加载速度，可以提前使用Worker线程获取数据，因为Worker线程是可以是用 XMLHttpRequest 的。

3、预渲染：在某些渲染场景下，比如渲染复杂的canvas的时候需要计算的效果比如反射、折射、光影、材料等，这些计算的逻辑可以使用Worker线程来执行，也可以使用多个Worker线程。

4、复杂数据处理场景：某些检索、排序、过滤、分析会非常耗费时间，这时可以使用Web Worker来进行，不占用主线程。

5、预加载图片：有时候一个页面有很多图片，或者有几个很大的图片的时候，如果业务限制不考虑懒加载，也可以使用Web Worker来加载图片，可以参考一下这篇文章的探索，这里简单提要一下。
```

// 主线程
let w = new Worker("js/workers.js");
w.onmessage = function (event) {
  var img = document.createElement("img");
  img.src = window.URL.createObjectURL(event.data);
  document.querySelector('#result').appendChild(img)
}


// worker线程
let arr = [...好多图片路径];
for (let i = 0, len = arr.length; i < len; i++) {
  let req = new XMLHttpRequest();
  req.open('GET', arr[i], true);
  req.responseType = "blob";
  req.setRequestHeader("client_type", "DESKTOP_WEB");
  req.onreadystatechange = () => {
    if (req.readyState == 4) {
      postMessage(req.response);
    }
  }
  req.send(null);
}
```

　　在实战的时候注意

虽然使用worker线程不会占用主线程，但是启动worker会比较耗费资源
主线程中使用XMLHttpRequest在请求过程中浏览器另开了一个异步http请求线程，但是交互过程中还是要消耗主线程资源
　　在 Webpack 项目里面使用 Web Worker 请参照：怎么在 ES6+Webpack 下使用 Web Worker

1、Worker 线程完成轮询

　　有时，浏览器需要轮询服务器状态，以便第一时间得知状态改变。这个工作可以放在 Worker 里面。
```

    function createWorker(f) {
      var blob = new Blob(['(' + f.toString() +')()']);
      var url = window.URL.createObjectURL(blob);
      var worker = new Worker(url);
      return worker;
    }

    var pollingWorker = createWorker(function (e) {
      var cache;

      function compare(new, old) { ... };

      setInterval(function () {
        fetch('/my-api-endpoint').then(function (res) {
          var data = res.json();

          if (!compare(data, cache)) {
            cache = data;
            self.postMessage(data);
          }
        })
      }, 1000)
    });

    pollingWorker.onmessage = function () {
      // render data
    }

    pollingWorker.postMessage('init');

```
　　上面代码中，Worker 每秒钟轮询一次数据，然后跟缓存做比较。如果不一致，就说明服务端有了新的变化，因此就要通知主线程。

2、Worker 新建 Worker

　　Worker 线程内部还能再新建 Worker 线程（目前只有 Firefox 浏览器支持）。下面的例子是将一个计算密集的任务，分配到10个 Worker。

　　主线程代码如下：
```
    var worker = new Worker('worker.js');
    worker.onmessage = function (event) {
      document.getElementById('result').textContent = event.data;
    };

    // worker.js

    // settings
    var num_workers = 10;
    var items_per_worker = 1000000;

    // start the workers
    var result = 0;
    var pending_workers = num_workers;
    for (var i = 0; i < num_workers; i += 1) {
      var worker = new Worker('core.js');
      worker.postMessage(i * items_per_worker);
      worker.postMessage((i + 1) * items_per_worker);
      worker.onmessage = storeResult;
    }

    // handle the results
    function storeResult(event) {
      result += event.data;
      pending_workers -= 1;
      if (pending_workers <= 0)
        postMessage(result); // finished!
    }

```
　　上面代码中，Worker 线程内部新建了10个 Worker 线程，并且依次向这10个 Worker 发送消息，告知了计算的起点和终点。计算任务脚本的代码如下。
```

// core.js
var start;
onmessage = getStart;
function getStart(event) {
  start = event.data;
  onmessage = getEnd;
}

var end;
function getEnd(event) {
  end = event.data;
  onmessage = null;
  work();
}

function work() {
  var result = 0;
  for (var i = start; i < end; i += 1) {
    // perform some complex calculation here
    result += 1;
  }
  postMessage(result);
  close();
}
```
