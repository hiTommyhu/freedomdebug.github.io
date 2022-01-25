下面一篇文章将整体分析一下BOM, DOM。这篇文章不是主要将知识，而是整体分析一下。

## BOM

### 认识BOM

JavaScript有一个非常重要的运行环境就是浏览器，而且浏览器本身又作为一个应用程序需要对其本身进行操作，所以通常浏览器会有对应的对象模型（BOM，Browser Object Model）。

我们可以将BOM看成是连接JavaScript脚本与浏览器窗口的桥梁。

BOM主要包括以下的对象模型：

- window：包括全局属性、方法，控制浏览器窗口相关的属性、方法。
- location：浏览器连接到的对象的位置（URL）。
- history：操作浏览器的历史。
- document：当前窗口操作文档的对象。

### window

window对象在浏览器中有两个身份：

- 全局对象

  - 我们知道ECMAScript其实是有一个全局对象的，这个全局对象在Node中是global。
  - 在浏览器中就是window对象。

  在浏览器中，window对象就是作为GO对象：

  - 比如在全局通过var声明的变量，会被添加到GO中，也就是会被添加到window上。
  - 比如window默认给我们提供了全局的函数和类：setTimeout、Math、Date、Object等。

- 浏览器窗口对象

  - 作为浏览器窗口时，提供了对浏览器操作的相关的API。

事实上window对象上肩负的重担是非常大的：

- 包含大量的属性，localStorage、console、location、history、screenX、scrollX等等（大概60+个属性）。
- 包含大量的方法，alert、close、scrollTo、open等等（大概40+个方法）。
- 包含大量的事件，focus、blur、load、hashchange等等（大概30+个事件）。
- 包含从EventTarget继承过来的方法，addEventListener、removeEventListener、dispatchEvent方法。

下面来介绍一下`dispatchEvent`方法：

- 他就是可以派发我们通过Event自定义的事件。然后通过addEventListener监听事件。

```js
    window.addEventListener("customEvent", () => {
      console.log("监听到了customEvent事件")
    })

    window.dispatchEvent(new Event("customEvent"))
复制代码
```

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b5d7dc3d608469ebc97cc37030b2747~tplv-k3u1fbpfcp-watermark.awebp?)

### location

Location对象用于表示window上当前链接到的URL信息。

常见的属性有哪些呢？

- href: 当前window对应的超链接URL, 整个URL。
- protocol: 当前的协议。
- host: 主机地址。（包括主机名和端口号）
- hostname: 主机地址(不带端口)。
- port: 端口。
- pathname: 路径；
- search: 查询字符串；
- hash: 哈希值；
- username：URL中的username（很多浏览器已经禁用）；
- password：URL中的password（很多浏览器已经禁用）；

我们会发现location其实是URL的一个抽象实现： ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13f4f0a3ca934aa99583fe7cc3c989a0~tplv-k3u1fbpfcp-watermark.awebp?) location有如下常用的方法：

- assign：赋值一个新的URL，并且跳转到该URL中。其实直接赋值href也可以。
- replace：打开一个新的URL，并且跳转到该URL中（不同的是不会在浏览记录中留下之前的记录）。
- reload：重新加载页面，可以传入一个Boolean类型。
  - true: 表示强制刷新页面。清缓存。
  - false：不强制刷新。

### history

history对象允许我们访问浏览器曾经的会话历史记录。 有两个属性：

- length：会话中的记录条数。
- state：当前保留的状态值。

有五个方法：

- back()：返回上一页，等价于history.go(-1)。
- forward()：前进下一页，等价于history.go(1)。
- go()：加载历史中的某一页。
- pushState()：打开一个指定的地址。
- replaceState()：打开一个新的地址，并且使用replace。

[他的使用请访问，vue-router。实现前端路由。](https://juejin.cn/post/7021175731820593159)

## DOM

### 认识DOM

浏览器是用来展示网页的，而网页中最重要的就是里面各种的标签元素，JavaScript很多时候是需要操作这些元素的。

JavaScript如何操作元素呢？

通过Document Object Model（DOM，文档对象模型）。DOM给我们提供了一系列的模型和对象，让我们可以方便的来操作Web页面。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7c1bd325fd64a5f8bd30bf607d75e2a~tplv-k3u1fbpfcp-watermark.awebp?) 由于所有元素都继承自EventTarget，所以都具有它上面的方法。

### Node

所有的DOM节点类型都继承自Node接口。[developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FAPI%2FNode)

Node有几个非常重要的属性：

- nodeName：node节点的名称。
- nodeType：可以区分节点的类型。为number类型。
- nodeValue：node节点的值。只能获取文本节点的值。
- childNodes：所有的子节点。

### 事件监听

JavaScript脚本和浏览器之间交互时，浏览器给我们提供的BOM、DOM等一些对象模型。

事实上还有一种需要和浏览器经常交互的事情就是事件监听：

浏览器在某个时刻可能会发生一些事件，比如鼠标点击、移动、滚动、获取、失去焦点、输入内容等等一系列的事件。

我们需要以某种方式（代码）来对其进行响应，进行一些事件的处理。在Web当中，事件在浏览器窗口中被触发，并且通过绑定到某些元素上或者浏览器窗口本身，那么我们就可以给这些元素或者window窗口来绑定事件的处理程序，来对事件进行监听。

如何进行事件监听呢？

- 事件监听方式一：在script中直接监听。

```html
  <div class="box" onclick="console.log('div元素被点击')"></div>
  <div class="box" onclick="divClick()"></div>
复制代码
```

- 事件监听方式二：通过元素的on来监听事件。这种在同一个dom中监听相同的事件会发生覆盖。

```js
    divEl.onclick = function() {
      console.log("div元素被点击")
    }
复制代码
```

- 事件监听方式三：通过EventTarget中的addEventListener来监听。这个监听相同事件不会发生覆盖。

```js
divEl.addEventListener("click", () => {
  console.log("div元素被点击")
})
复制代码
```

### 事件流

事实上对于事件有一个概念叫做事件流，为什么会产生事件流呢？

我们可以想到一个问题：当我们在浏览器上对着一个元素点击时，你点击的不仅仅是这个元素本身。这是因为我们的HTML元素是存在父子元素叠加层级的。

事件冒泡和事件捕获

- 默认情况下事件是从最内层向外依次传递的顺序，这个顺序我们称之为事件冒泡（EventBubble）。**即由具体的元素到不具体的元素。**
- 事实上，还有另外一种监听事件流的方式就是从外层到内层（body -> span），这种称之为事件捕获（Event Capture）。**由不具体的元素到具体的元素。**

为什么会产生两种不同的处理流呢？

- 这是因为早期浏览器开发时，不管是IE还是Netscape公司都发现了这个问题，但是他们采用了完全相反的事件流来对事件进行了传递。
- IE采用了事件冒泡的方式，Netscape采用了事件捕获的方式。

那么我们如何去监听事件捕获的过程呢？

通过控制addEventListener的第三个参数。默认为false。false: 表示冒泡，true表示捕获。

如果我们同时有事件冒泡和时间捕获的监听，那么会优先监听到事件捕获的： **他是先捕获后冒泡的。**

### 事件对象event

当一个事件发生时，就会有和这个事件相关的很多信息：

- 比如事件的类型是什么，你点击的是哪一个元素，点击的位置是哪里等等相关的信息。
- 那么这些信息会被封装到一个Event对象中。
- 该对象给我们提供了想要的一些属性，以及可以通过该对象进行某些操作。

常见的属性：

- type：事件的类型。
- target：当前事件发生的元素。**就是绑定事件的元素。**
- currentTarget：当前处理事件的元素。**就是触发事件的元素。**
- offsetX、offsetY：点击元素的位置。

常见的方法：

- preventDefault：取消事件的默认行为。
- stopPropagation：阻止事件的进一步传递。

事件类型：[developer.mozilla.org/zh-CN/docs/…](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FEvents)


作者：Spirited_Away
链接：https://juejin.cn/post/7056780470696017927
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。