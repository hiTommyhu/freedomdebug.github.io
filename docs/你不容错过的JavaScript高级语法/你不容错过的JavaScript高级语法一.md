# 你不容错过的JavaScript高级语法(一)

总所周知，js在前端开发中的地位。学好它，真的很重要。

## JS引擎-v8

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/425c5e7d9a654f85a71e90c1c1d5d7ae~tplv-k3u1fbpfcp-watermark.awebp?) 下面，我们通过上面的图片，来介绍一下v8引擎是如何解析js代码的。

- 首先通过词法分析，分析每条语句中的代码，生成一个个词法对象。
- 语法分析上面生成的词法对象，然后生成抽象语法树。[这里推荐一个网站](https://link.juejin.cn?target=https%3A%2F%2Fastexplorer.net%2F)
- 然后通过Ignition库将抽象语法树转化成字节码，因为字节码是跨平台的。如果直接转化为机器码，在不同平台上同一个抽象语法树，运行的机器码是不同的。
- 为了优化，可以通过TurboFan库将常用的代码直接转化为机器码，可以提高代码执行性能。
- 由于js代码没有类型限制，所以对于类型不同的函数传参，他还会将机器码转化为字节码，再去执行。

## js的执行过程

### 初始化全局对象

- js引擎会在执行代码之前，会在堆内存中创建一个全局对象：Global Object（GO）
- 该对象所有的作用域（scope）都可以访问；
- 里面会包含Date、Array、String、Number、setTimeout、setInterval等等；
- 其中还有一个window属性指向自己；

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7e3f0ec77ec4d86bfc764b9a5df52a0~tplv-k3u1fbpfcp-watermark.awebp?)

### 执行上下文栈（调用栈）

js引擎内部有一个执行上下文栈（Execution Context Stack，简称ECS），它是用于执行代码的调用栈。

- 全局执行上下文(global execution context )
- 函数执行上下文(functional execution context)

全局的代码块为了执行会构建一个 Global Execution Context（GEC）。GEC会被放入到ECS中执行。

GEC被放入到ECS中里面包含两部分内容：

- 在代码执行前，在parser转成AST的过程中，会将全局定义的变量、函数等加入到GlobalObject中，但是并不会赋值；这个过程也称之为变量的作用域提升（hoisting）。
- 在代码执行中，对变量赋值，或者执行其他的函数。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ffbbf16a9f964a6f8bf616381b50b8a9~tplv-k3u1fbpfcp-watermark.awebp?) **当在执行过程中，遇到函数，将会创建一个内存空间，用于存放父级作用域（所以在编译的时候就确定了作用域）和执行的函数体。然后把该内存空间的地址赋值给GO对应的函数中。所以函数可以再函数定义之前调用。** ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba6c1e6b564a4c28a8b137031ef294a6~tplv-k3u1fbpfcp-watermark.awebp?) ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed4fc97c2f264a41a7e8aa24899d8f05~tplv-k3u1fbpfcp-watermark.awebp?)

在执行的过程中执行到一个函数时，就会根据函数体创建一个函数执行上下文（Functional Execution Context，简称FEC），并且压入到ECS中。

FEC中包含三部分内容：

- 在解析函数成为AST树结构时，会创建一个Activation Object（AO）：AO中包含形参、arguments、函数定义和指向函数对象、定义的变量
- 作用域链：由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找
- this绑定的值：这个我们后续会详细解析

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd9a86baa6ba4d8ea0e9a4b9abbf0729~tplv-k3u1fbpfcp-watermark.awebp?) ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1c081248cdd43f7a93ac4fbe7b36a5b~tplv-k3u1fbpfcp-watermark.awebp?) 嵌套函数的解析执行 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4461f45961334708a0dc0539fb72a76b~tplv-k3u1fbpfcp-watermark.awebp?) **综合上述来看，就是在编译的时候创建GO对象，调用函数的时候创建AO对象，然后再执行代码的时候为AO,GO对象变量赋值。**

## 垃圾回收机制

### 常见的GC算法 – 引用计数

当一个对象有一个引用指向它时，那么这个对象的引用就+1，当一个对象的引用为0时，这个对象就可以被销毁掉。

这个算法有一个很大的弊端就是会产生循环引用。 ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b66094e76224d31b391841d9a24c9eb~tplv-k3u1fbpfcp-watermark.awebp?)

### 常见的GC算法 – 标记清除

这个算法是设置一个根对象（root object），垃圾回收器会定期从这个根开始，找所有从根开始有引用到的对象，对于哪些没有引用到的对象，就认为是不可用的对象。

这个算法可以很好的解决循环引用的问题。 ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fee06dd138494993a68bb07f5b5b09b1~tplv-k3u1fbpfcp-watermark.awebp?)

JS引擎比较广泛的采用的就是标记清除算法，当然类似于V8引擎为了进行更好的优化，它在算法的实现细节上也会结合一些其他的算法。

## 闭包

### 对于闭包的理解

这里先来看一下闭包的定义，分成两个：在计算机科学中和在JavaScript中。

在计算机科学中对闭包的定义（维基百科）：

- 闭包（英语：Closure），又称**词法闭包**（Lexical Closure）或函数闭包（function closures）；
- 是在支持 头等函数 的编程语言中，实现词法绑定的一种技术；
- 闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号查找表）；
- 闭包跟函数最大的区别在于，当捕捉闭包的时候，它的**自由变量**会在补充时被确定，这样即使脱离了捕捉时的上下文，它也能照常运行；

我们再来看一下MDN对JavaScript闭包的解释：

- 一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）；
- 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域；
- 在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来；

那么我的理解和总结：

- 一个普通的函数function，如果它可以访问外层作用于的自由变量，那么这个函数就是一个闭包；
- 从广义的角度来说：JavaScript中的函数都是闭包；
- 从狭义的角度来说：JavaScript中一个函数，如果访问了外层作用于的变量，那么它是一个闭包；

### 在内存角度分析闭包

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8260912bc452437d9dabef38d0cab450~tplv-k3u1fbpfcp-watermark.awebp?)

### 闭包的内存泄露

正如上述例图所示，当我们在使用完bar函数的时候，他不会被回收，而且会引用foo的AO对象，所以会存在内存泄漏。

## this指向

### this介绍

在常见的编程语言中，几乎都有this这个关键字（Objective-C中使用的是self），但是JavaScript中的this和常见的面向对象语言中的this不太一样：

常见面向对象的编程语言中，比如Java、C++、Swift、Dart等等一系列语言中，this通常只会出现在类的方法中。也就是你需要有一个类，类中的方法（特别是实例方法）中，this代表的是当前调用对象。 但是JavaScript中的this更加灵活，无论是它出现的位置还是它代表的含义。

- 函数在调用时，JavaScript会默认给this绑定一个值；
- this的绑定和定义的位置（编写的位置）没有关系；
- this的绑定和调用方式以及调用的位置有关系；
- this是在运行时被绑定的；

那么this到底是怎么样的绑定规则呢？一起来学习一下吧

- 绑定一：默认绑定；

当一个函数被独立调用的时候，this默认绑定为window。下列this都是指向window。

```js
    // 默认绑定: 独立函数调用
    // 1.案例一:
    function foo() {
      console.log(this)
    }

    foo()

    // 2.案例二:
    function foo1() {
      console.log(this)
    }

    function foo2() {
      console.log(this)
      foo1()
    }

    function foo3() {
      console.log(this)
      foo2()
    }

    foo3()


    // 3.案例三:
    var obj = {
      name: "why",
      foo: function() {
        console.log(this)
      }
    }

    var bar = obj.foo
    bar() // window


    // 4.案例四:
    function foo() {
      console.log(this)
    }
    var obj = {
      name: "why",
      foo: foo
    }

    var bar = obj.foo
    bar() // window

    // 5.案例五:
    function foo() {
      function bar() {
        console.log(this)
      }
      return bar
    }

    var fn = foo()
    fn() // window
复制代码
```

- 绑定二：隐式绑定；

通过某个对象进行调用的。也就是它的调用位置中，是通过某个对象发起的函数调用。

```js
    // 1.案例一:
    function foo() {
      console.log(this)
    }
    var obj = {
      name: "why",
      foo: foo
    }

    obj.foo() // obj

    // 2.案例二:
   
    var obj1 = {
      name: "obj1",
      foo: function() {
        console.log(this)
      }
    }

    var obj2 = {
      name: "obj2",
      bar: obj1.foo
    }

    obj2.bar()// obj2
复制代码
```

- 绑定三：显示绑定；

通过bind,apply,bind方法，将函数的this显示绑定。

- 绑定四：new绑定；

使用new关键字来调用函数是，会执行如下的操作：

- 创建一个全新的对象；
- 这个新对象会被执行prototype连接；
- 这个新对象会绑定到函数调用的this上（this的绑定在这个步骤完成）；
- 如果函数没有返回其他对象，表达式会返回这个新对象；

**如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则**

### this绑定优先级比较

new > 显示绑定 > 隐式绑定 > 默认绑定

### 箭头函数中的this

箭头函数不使用this的四种标准规则（也就是不绑定this），而是根据外层作用域 **(全局作用域和函数作用域)** 来决定this。

我们来看一个模拟网络请求的案例：

这里我使用setTimeout来模拟网络请求，请求到数据后如何可以存放到data中呢？

我们需要拿到obj对象，设置data；但是直接拿到的this是window，我们需要在外层定义：var _this = this在setTimeout的回调函数中使用_this就代表了obj对象。

但是使用箭头函数就能有效的解决这个问题。

```js
var obj = {
  data: [],
  getData: function() {
    // 发送网络请求, 将结果放到上面data属性中
    // 在箭头函数之前的解决方案
    // var _this = this
    // setTimeout(function() {
    //   var result = ["abc", "cba", "nba"]
    //   _this.data = result
    // }, 2000);
    
    // 箭头函数之后
    setTimeout(() => {
      var result = ["abc", "cba", "nba"]
      // 这里的this指向的是上层函数this。
      this.data = result
    }, 2000);
  }
}

obj.getData()
复制代码
```

### 关于this的一些面试题

[关于this的一些面试题](https://juejin.cn/post/6950604619231805477)

### 手写call, apply, bind

- call的实现

```js
    // 给所有的函数添加一个hycall的方法
    Function.prototype.mycall = function(thisArg, ...args) {
      // 1.获取需要被执行的函数
      var fn = this

      // 2.对thisArg转成对象类型(防止它传入的是非对象类型)
      thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

      // 3.调用需要被执行的函数
      const symbol = Symbol()
      thisArg[symbol] = fn
      var result = thisArg.fn(...args)
      delete thisArg[symbol]

      // 4.将最终的结果返回出去
      return result
    }
复制代码
```

- apply实现

```js
    // 自己实现hyapply
    Function.prototype.hyapply = function(thisArg, argArray) {
      // 1.获取到要执行的函数
      var fn = this

      // 2.处理绑定的thisArg
      thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

      // 3.执行函数
      const symbol = Symbol()
      thisArg[symbol] = fn
      // 这里是当为传入argArray时，他得值为undefined,...运算会报错。
      argArray = argArray || []
      result = thisArg.fn(...argArray)

      delete thisArg[symbol]

      // 4.返回结果
      return result
    }
复制代码
```

- bind实现

```js
Function.prototype.hybind = function(thisArg, ...argArray) {
  // 1.获取到真实需要调用的函数
  var fn = this

  // 2.绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg): window

  return function (...args) {
    // 3.将函数放到thisArg中进行调用
    const symbol = Symbol()
    thisArg[symbol] = fn
    // 特殊: 对两个传入的参数进行合并
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg[symbol]

    // 4.返回结果
    return result
  }
}
复制代码
```

## 纯函数

纯函数的维基百科定义：

在程序设计中，若一个函数符合以下条件，那么这个函数被称为纯函数：

- 此函数在相同的输入值时，需产生相同的输出。
- 函数的输出和输入值以外的其他隐藏信息或状态无关，也和由I/O设备产生的外部输出无关。
- 该函数不能有语义上可观察的函数副作用，诸如“触发事件”，使输出设备输出，或更改输出值以外物件的内容等。

当然上面的定义会过于的晦涩，所以我简单总结一下：

- 确定的输入，一定会产生确定的输出；
- 函数在执行过程中，不能产生副作用；

那么什么是副作用呢？

在计算机科学中，也引用了副作用的概念，表示在执行一个函数时，**除了返回函数值之外，还对调用函数产生了附加的影响**，比如修改了全局变量，修改参数或者改变外部的存储。

下面来看一些案例

```js
    // foo函数是否是一个纯函数?
    // 1.相同的输入一定产生相同的输出
    // 2.在执行的过程中不会产生任何的副作用
    function foo(num1, num2) {
      return num1 * 2 + num2 * num2
    }

    // bar不是一个纯函数, 因为它修改了外界的变量
    var name = "abc" 
    function bar() {
      console.log("bar其他的代码执行")
      name = "cba"
    }

    // baz也不是一个纯函数, 因为我们修改了传入的参数
    function baz(info) {
      info.age = 100
    }

    var obj = {name: "zh", age: 22}
    baz(obj)

    // test是否是一个纯函数? 是一个纯函数
    function test(info) {
      return {
        ...info,
        age: 100
      }
    }
复制代码
```

foo, test是纯函数。bar, baz不是纯函数，因为产生了副作用。

## 函数柯里化

柯里化也是属于函数式编程里面一个非常重要的概念。

我们先来看一下维基百科的解释：

- 在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化；
- 是把接收多个参数的函数，变成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数，而且返回结果的新函数的技术；

柯里化声称 “如果你固定某些参数，你将得到接受余下参数的一个函数”；

维基百科的结束非常的抽象，我们这里做一个总结：

- 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余的参数。

那么他到底有什么用处呢？

- 让函数的职责单一

在函数式编程中，我们其实往往希望一个函数处理的问题尽可能的单一，而不是将一大堆的处理过程交给一个函数来处理。那么我们是否就可以将每次传入的参数在单一的函数中进行处理，处理完后在下一个函数中再使用处理后的结果。

下面一个例子，在每一步都处理一下传入的参数如，然后再将处理后的参数作为下一次调用的参数。

```js
    function add(x, y, z) {
      x = x + 2
      y = y * 2
      z = z * z
      return x + y + z
    }

    console.log(add(10, 20, 30))


    function sum(x) {
      x = x + 2

      return function(y) {
        y = y * 2

        return function(z) {
          z = z * z

          return x + y + z
        }
      }
    }

    console.log(sum(10)(20)(30))
复制代码
```

- 复用参数逻辑

就是固定传入的指定参数，然后还可以按照定制传入其他的参数。

下面是一个输出日志函数

```js
    function log(date, type, message) {
      console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)
    }

    // log(new Date(), "DEBUG", "查找到轮播图的bug")
    // log(new Date(), "DEBUG", "查询菜单的bug")
    // log(new Date(), "DEBUG", "查询数据的bug")

    // 柯里化的优化
    var log = date => type => message => {
      console.log(`[${date.getHours()}:${date.getMinutes()}][${type}]: [${message}]`)
    }

    // 如果我现在打印的都是当前时间
    var nowLog = log(new Date())
    nowLog("DEBUG")("查找到轮播图的bug")
    nowLog("FETURE")("新增了添加用户的功能")

    var nowAndDebugLog = log(new Date())("DEBUG")
    nowAndDebugLog("查找到轮播图的bug")
    nowAndDebugLog("查找到轮播图的bug")
    nowAndDebugLog("查找到轮播图的bug")
    nowAndDebugLog("查找到轮播图的bug")


    var nowAndFetureLog = log(new Date())("FETURE")
    nowAndFetureLog("添加新功能~")
复制代码
```

那么如何实现自动函数柯里化呢？

他就是将一个函数传入全部参数调用转化为传入不确定的参数不断调用函数的过程叫做函数柯里化。

```js
    function curry(fn, ...args1) {
      return function curried(...args2) {
        // 判断当前已经接收的参数的个数, 可以参数本身需要接受的参数是否已经一致了
        // 1.当已经传入的参数 大于等于 需要的参数时, 就执行函数
        totalArgs = [...args1, ...args2]
        if(fn.length <= totalArgs.length) {
          // 防止显示改变this指向
          return fn.apply(this, totalArgs)
        }else {
          // 没有达到个数时, 需要返回一个新的函数, 继续来接收的参数
          return function curried2(...args3) {
            // 接收到参数后, 需要** 递归 **调用curried来检查函数的个数是否达到。这里的return是为了调用curried2
            return curried.call(this, ...args2, ...args3);
          }

        }
      }
    }
    
    
    function foo(x, y, z) {
      return x + y + z;
    }


    const curryFn = curry(foo, 10);
    console.log(curryFn(20)(30))

    const curryFn2 = curry(foo);
    console.log(curryFn2(10, 20)(30))
复制代码
```

## 组合函数

组合（Compose）函数是在JavaScript开发过程中一种对函数的使用技巧、模式：

比如我们现在需要对某一个数据进行函数的调用，执行两个函数fn1和fn2，这两个函数是依次执行的。那么如果每次我们都需要进行两个函数的调用，操作上就会显得重复。

那么是否可以将这两个函数组合起来，自动依次调用呢？这个过程就是对函数的组合，我们称之为 组合函数（Compose Function）。

下面举个例子来理解一下组合函数的使用。

```js
    function double(num) {
      return num * 2
    }

    function square(num) {
      return num ** 2
    }

    var count = 10
    var result = square(double(count))
    console.log(result)

    // 实现最简单的组合函数
    function composeFn(m, n) {
      return function(count) {
        return n(m(count))
      }
    }

    var newFn = composeFn(double, square)
    console.log(newFn(10))
复制代码
```

下面来实现一个组合函数

```js
    function hyCompose(...fns) {
      var length = fns.length
      for (var i = 0; i < length; i++) {
        if (typeof fns[i] !== 'function') {
          throw new TypeError("Expected arguments are functions")
        }
      }

      function compose(...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args): args
        while(++index < length) {
          result = fns[index].call(this, result)
        }
        return result
      }
      return compose
    }
复制代码
```

## with

with语句 扩展一个语句的作用域链。 不建议使用with语句，因为它可能是混淆错误和兼容性问题的根源。

```js
    with({
      name: 'zh',
      age: 20
    }) {
      console.log(name)// 'zh'
    }
复制代码
```

## eval

eval是一个特殊的函数，它可以将传入的字符串当做JavaScript代码来运行。并且作为全局代码执行。

```js
    var jsString = 'var message = "Hello World"; console.log(message);'

    eval(jsString)
    ;(function() {
      console.log(message) // hello world
    })();
复制代码
```

不建议在开发中使用eval：

- eval代码的可读性非常的差（代码的可读性是高质量代码的重要原则）；
- eval是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险；
- eval的执行必须经过JS解释器，不能被JS引擎优化

## 严格模式

在ECMAScript5标准中，JavaScript提出了严格模式的概念（Strict Mode）：

严格模式很好理解，是一种具有限制性的JavaScript模式，从而使代码隐式的脱离了 懒散（sloppy）模式。支持严格模式的浏览器在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行。严格模式对正常的JavaScript语义进行了一些限制：

- 严格模式通过 抛出错误 来消除一些原有的 静默（silent）错误；
- 严格模式让JS引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）；
- 严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法。

**那么如何开启严格模式呢？** 通过`"use strict";`

- 可以支持在js文件中开启严格模式；
- 也支持对某一个函数开启严格模式；

**这里我们来说几个严格模式下的严格语法限制：**

1. 无法意外的创建全局变量

```js
    "use strict"
    // 1. 禁止意外创建全局变量
    message = "Hello World"
    console.log(message)

    function foo() {
      age = 20
    }

    foo()
    console.log(age)
复制代码
```

1. 严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常

```js
    // 静默错误
    true.name = "abc"
    NaN = 123
    var obj = {}
    Object.defineProperty(obj, "name", {
      configurable: false,
      writable: false,
      value: "zh"
    })
    console.log(obj.name)
    // obj.name = "llm"

    delete obj.name
复制代码
```

1. 严格模式下试图删除不可删除的属性
2. 严格模式不允许函数参数有相同的名称

```js
    // 不允许函数有相同的参数名称
    function foo(x, y, x) {
      console.log(x, y, x)
    }

    foo(10, 20, 30)
复制代码
```

1. 不允许0的八进制语法

```js
    // 不允许使用原先的八进制格式 0123
    var num = 0o123 // 八进制
    var num2 = 0x123 // 十六进制
    var num3 = 0b100 // 二进制
    console.log(num, num2, num3)
复制代码
```

1. 在严格模式下，不允许使用with
2. 在严格模式下，eval不再为上层引用变量

```js
    // message不会作为全局变量
    var jsString = '"use strict"; var message = "Hello World"; console.log(message);'
    eval(jsString)

    console.log(message)
复制代码
```

1. 严格模式下，this绑定不会默认转成对象。

默认绑定的this，为undefined。但是setTimeout函数中的传递的函数this依旧是window。


作者：Spirited_Away
链接：https://juejin.cn/post/7048549054438965285
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
