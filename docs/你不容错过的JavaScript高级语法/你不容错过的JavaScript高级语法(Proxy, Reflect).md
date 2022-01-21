# 你不容错过的JavaScript高级语法(Proxy, Reflect)

众所周知，js在前端开发中的地位。学好它，真的很重要。

下面这篇文章，介绍一下Proxy, Reflect后，然后分析vue中的响应式原理，带你手写vue响应式。

## Proxy

### 监听对象

我们先来看一个需求：有一个对象，我们希望监听这个对象中的属性被设置或获取的过程

我们可以通过 `Object.defineProperty` 的存储属性描述符来对属性的操作进行监听。

```js
    Object.keys(obj).forEach(key => {
      let value = obj[key]

      Object.defineProperty(obj, key, {
        get: function() {
          console.log(`监听到obj对象的${key}属性被访问了`)
          return value
        },
        set: function(newValue) {
          console.log(`监听到obj对象的${key}属性被设置值`)
          value = newValue
        }
      })
    })
复制代码
```

但是这样做有什么缺点呢？

- 首先，`bject.defineProperty`设计的初衷，不是为了去监听一个对象中所有的属性的。我们在定义某些属性的时候，初衷其实是定义普通的属性，但是后面我们强行将它变成了数据属性描述符。
- 其次，如果我们想监听更加丰富的操作，比如新增属性、删除属性，那么`Object.defineProperty`是无能为力的。

### Proxy基本使用

在ES6中，新增了一个Proxy类，这个类从名字就可以看出来，是用于帮助我们创建一个代理的。也就是说，如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy对象）。

之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行哪些操作。

我们可以将监听对象的案例用Proxy来实现一次：

- 首先，我们需要new Proxy对象，并且传入需要侦听的对象以及一个处理对象，可以称之为handler。
- 其次，我们之后的操作都是直接对Proxy的操作，而不是原有的对象，因为我们需要在handler里面进行侦听。

```js
    const objProxy = new Proxy(obj, {
      // 获取值时的捕获器
      get: function(target, key) {
        console.log(`监听到对象的${key}属性被访问了`, target)
        return target[key]
      },

      // 设置值时的捕获器
      set: function(target, key, newValue) {
        console.log(`监听到对象的${key}属性被设置值`, target)
        target[key] = newValue
      }
    })
复制代码
```

### Proxy所有捕获器

13个捕捉器分别是做什么的呢？

- ```
  handler.getPrototypeOf()
  ```

  :

  - `Object.getPrototypeOf` 方法的捕捉器。

- ```
  handler.setPrototypeOf()
  ```

  :

  - `Object.setPrototypeOf` 方法的捕捉器。

- ```
  handler.isExtensible()
  ```

  :

  - `Object.isExtensible` 方法的捕捉器。

- ```
  handler.preventExtensions()
  ```

  :

  - `Object.preventExtensions` 方法的捕捉器。

- ```
  handler.getOwnPropertyDescriptor()
  ```

  - `Object.getOwnPropertyDescriptor` 方法的捕捉器。

- ```
  handler.defineProperty()
  ```

  - `Object.defineProperty` 方法的捕捉器。

- ```
  handler.ownKeys()
  ```

  - `Object.getOwnPropertyNames` 方法
  - `Object.getOwnPropertySymbols` 方法的捕捉器。

- ```
  handler.has()
  ```

  - `in` 操作符的捕捉器。

- ```
  handler.get()
  ```

  - 属性读取操作的捕捉器。

- ```
  handler.set()
  ```

  - 属性设置操作的捕捉器。

- ```
  handler.deleteProperty()
  ```

  - `delete` 操作符的捕捉器。

- ```
  handler.apply()
  ```

  - 函数调用操作的捕捉器。

- ```
  handler.construct()
  ```

  - `new` 操作符的捕捉器。

要想让代理对象捕获到这些操作，他们都是对代理对象的操作。而不是直接操作原对象。

后两种监听比较特殊，他是为了监听函数对象的。下面我们来介绍一下。

```js
    function foo() {

    }

    const fooProxy = new Proxy(foo, {
      apply: function(target, thisArg, argArray) {
        console.log("对foo函数进行了apply调用")
        return target.apply(thisArg, argArray)
      },
      construct: function(target, argArray, newTarget) {
        console.log("对foo函数进行了new调用")
        return new target(...argArray)
      }
    })

    fooProxy.apply({}, ["zh", "llm"])
    new fooProxy("zh", "llm")
复制代码
```

其中set, get操作捕捉器最后一个参数receiver表示的是代理对象本身。一般他会结合`Reflect.get / set`方法来使用，目的是改变原对象中的getter,setter中的this。

```js
    const obj = {
      name: "zh",
      age: 22
    }

    const objProxy = new Proxy(obj, {
      get: function(target, key, receiver) {
        console.log(receiver === objProxy) // true
        return Reflect.get(target, key, receiver)
      },
      set: function(target, key, newValue, receiver) {
        const result = Reflect.set(target, key, newValue, receiver)
      }
    })
复制代码
```

## Reflect

Reflect也是ES6新增的一个API，它是一个对象，字面的意思是反射。

那么这个Reflect有什么用呢？

- 它主要提供了很多操作JavaScript对象的方法，有点像Object中操作对象的方法。
- 比如Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()。
- 比如Reflect.defineProperty(target, propertyKey, attributes)类似于Object.defineProperty()。

如果我们有Object可以做这些操作，那么为什么还需要有Reflect这样的新增对象呢？

- 这是因为在早期的ECMA规范中没有考虑到这种对 对象本身 的操作如何设计会更加规范，所以将这些API放到了Object上面。
- 但是Object作为一个构造函数，这些操作实际上放到它身上并不合适。
- 另外还包含一些类似于 in、delete操作符，让JS看起来是会有一些奇怪的。

所以在ES6中新增了Reflect，让我们这些操作都集中到了Reflect对象上。

那么Object和Reflect对象之间的API关系，[可以参考MDN文档](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FReflect%2FComparing_Reflect_and_Object_methods)。

### Reflect中所有的方法

它和Proxy是一一对应的，也是13个。

- Reflect.getPrototypeOf(target)
  - 类似于 Object.getPrototypeOf()。
- Reflect.setPrototypeOf(target, prototype)
  - 设置对象原型的函数. **返回一个 Boolean**， 如果更新成功，则返回true。
- Reflect.isExtensible(target)
  - 类似于 Object.isExtensible()
- Reflect.preventExtensions(target)
  - 类似于 Object.preventExtensions()。**返回一个Boolean。**
- Reflect.getOwnPropertyDescriptor(target, propertyKey)
  - 类似于 Object.getOwnPropertyDescriptor()。如果对象中存在该属性，则返回对应的属性描述符, 否则返回 undefined。
- Reflect.defineProperty(target, propertyKey, attributes)
  - 和 Object.defineProperty() 类似。**如果设置成功就会返回 true**
- Reflect.ownKeys(target)
  - 返回一个包含所有自身属性（不包含继承属性）的数组。(类似于Object.keys(), 但不会受enumerable影响)。
- Reflect.has(target, propertyKey)
  - 判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
- Reflect.get(target, propertyKey[, receiver])
  - 获取对象身上某个属性的值，类似于 target[name]。
- Reflect.set(target, propertyKey, value[, receiver])
  - 将值分配给属性的函数。返回一个Boolean，如果更新成功，则返回true。
- Reflect.deleteProperty(target, propertyKey)
  - 作为函数的delete操作符，相当于执行 delete target[name]。
- Reflect.apply(target, thisArgument, argumentsList)
  - 对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和Function.prototype.apply() 功能类似。
- Reflect.construct(target, argumentsList[, newTarget])
  - 对构造函数进行 new 操作，相当于执行 new target(...args)。

下面我们来介绍一下最后一个方法

它主要的作用就是通过调用一个target类的构造函数，但是创建出newTarget类的对象。很奇怪吧。其中第二个参数argumentsList表示构造函数的参数。

```js
    function Student(name, age) {
      this.name = name
      this.age = age
    }

    function Teacher() {

    }

    // 执行Student函数中的内容, 但是创建出来对象是Teacher对象
    const teacher = Reflect.construct(Student, ["zh", 22], Teacher)
    console.log(teacher) //Teacher { name: 'zh', age: 22 }
    console.log(teacher.__proto__ === Teacher.prototype) // true
复制代码
```

### Reflect的基本使用

下面介绍一下Reflect和Proxy一起使用

```js
    const obj = {
      name: "zh",
      age: 22
    }

    const objProxy = new Proxy(obj, {
      get: function(target, key, receiver) {
        console.log("get---------")
        return Reflect.get(target, key)
      },
      set: function(target, key, newValue, receiver) {
        console.log("set---------")
        const result = Reflect.set(target, key, newValue)
      }
    })

    objProxy.name = "llm"
    console.log(objProxy.name)
复制代码
```

### Receiver的作用

上面Proxy中的handler.set / get的最后一个参数receiver。看似没有用处，就表示代理对象的本身。但是他与Reflect结合使用后，就有了大用处。通过Reflect修改原对象中getter， setter函数调用时的this指向。

```js
    const obj = {
      _name: "zh",
      get name() {
        // 这里的this默认指向obj，但是通过Reflect.get修改了this指向
        return this._name
      },
      set name(newValue) {
        this._name = newValue
      }
    }

    const objProxy = new Proxy(obj, {
      get: function(target, key, receiver) {
        // receiver是创建出来的代理对象
        console.log("get方法被访问--------")
        return Reflect.get(target, key, receiver)
      },
      set: function(target, key, newValue, receiver) {
        console.log("set方法被访问--------")
        Reflect.set(target, key, newValue, receiver)
      }
    })


    objProxy.name = "llm"
    console.log(objProxy.name)
复制代码
```

## vue响应式原理

了解了上面的知识，那么我们来看看vue(2,3)响应式是如何实现的吧。

### 什么是响应式？

我们先来看一下响应式意味着什么？

我们来看一段代码：

- m有一个初始化的值，有一段代码使用了这个值。
- 那么在m有一个新的值时，这段代码可以自动重新执行。

```js
    let m = 100
    // 一段代码
    console.log(m)
    console.log(m * 2)
    
    m = 200
复制代码
```

上面的这样一种可以自动响应数据变量的代码机制，我们就称之为是响应式的。

### 响应式的设计

首先，执行的代码中可能不止一行代码，所以我们可以将这些代码放到一个函数中。那么我们的问题就变成了，当数据发生变化时，自动去执行某一个函数。

但是有一个问题：在开发中我们是有很多的函数的，我们如何区分一个函数需要响应式，还是不需要响应式呢？

所以这个时候就需要函数来收集相关的依赖函数。并将其保存在一个数组中。当相关数据改变后，将收集到的依赖函数依次执行。

```js
    let reactiveFns = []
    function watchFn(fn) {
      reactiveFns.push(fn)
    }
    
    // 当相关数据改变后，将收集到的依赖函数依次执行。
    // 对象的响应式
    const obj = {
      name: "zh",
      age: 22
    }

    watchFn(function() {
      const newName = obj.name
      console.log("Hello World")
      console.log(obj.name) // 100行
    })

    watchFn(function() {
      console.log(obj.name, "demo function -------")
    })

    function bar() {
      console.log("普通的其他函数")
      console.log("这个函数不需要有任何响应式")
    }

    obj.name = "llm"
    reactiveFns.forEach(fn => {
      fn()
    })
复制代码
```

从上面可以看出

- 凡是传入到watchFn的函数，就是需要响应式的。
- 其他默认定义的函数都是不需要响应式的。

### 响应式依赖的收集

由于我们收集的依赖是放到一个数组中来保存的，但是这里会存在数据管理的问题：

- 我们在实际开发中需要监听很多对象的响应式。
- 这些对象需要监听的不只是一个属性，它们很多属性的变化，都会有对应的响应式函数。
- 我们不可能在全局维护一大堆的数组来保存这些响应函数。
- 所以我们要设计一个类，这个类用于管理某一个对象的某一个属性的所有响应式函数。相当于替代了原来的简单 reactiveFns 的数组。

```js
    class Depend {
      constructor() {
        this.reactiveFns = []
      }

      // 收集依赖
      addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
      }
      // 响应
      notify() {
        this.reactiveFns.forEach(fn => {
          fn()
        })
      }
    }

    // 封装一个响应式的函数
    const depend = new Depend()
    function watchFn(fn) {
      depend.addDepend(fn)
    }

    // 对象的响应式
    const obj = {
      name: "zh", // depend对象
      age: 22 // depend对象
    }

    watchFn(function() {
      const newName = obj.name
      console.log("Hello World")
      console.log(obj.name) // 100行
    })

    watchFn(function() {
      console.log(obj.name, "demo function -------")
    })

    obj.name = "llm"
    depend.notify()
复制代码
```

上面案例的实现，依旧是我们手动触发的。那么如何才能让其自动响应依赖变化呢？

就需要我们学习到的`Proxy`(vue3)和`Object.defineProperty`(vue2)来监听对象的变化了。

```js
    const objProxy = new Proxy(obj, {
      get: function(target, key, receiver) {
        return Reflect.get(target, key, receiver)
      },
      set: function(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        // 当对象属性改变的时候，自动执行
        depend.notify()
      }
    })
复制代码
```

### 对象的依赖管理

直到设计到现在，上面还是有很多缺陷

- 由于我们在项目中有很多对象，需要区分不同对象，来做依赖收集。
- 而且对于同一个对象，我们也需要对于不同属性进项依赖收集。

针对上面的问题，如何使用一种数据结构来管理不同对象的不同依赖关系呢？ ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6ac997ad65ac4d65ae5733286ad4d067~tplv-k3u1fbpfcp-watermark.awebp?)

```js
    // 封装一个获取depend函数
    const targetMap = new WeakMap()
    function getDepend(target, key) {
      // 根据target对象获取map的过程
      let map = targetMap.get(target)
      if (!map) {
        map = new Map()
        targetMap.set(target, map)
      }

      // 根据key获取depend对象
      let depend = map.get(key)
      if (!depend) {
        depend = new Depend()
        map.set(key, depend)
      }
      return depend
    }
复制代码
```

我们之前收集依赖的地方是在 watchFn 中：

- 这种收集依赖的方式我们根本不知道是哪一个key的哪一个depend需要收集依赖。
- 你只能针对一个单独的depend对象来添加你的依赖对象。

那么正确的应该是在哪里收集呢？

应该在我们调用了Proxy的get捕获器时。因为如果一个函数中使用了某个对象的key，那么它应该被收集依赖。

```js
    // 封装一个响应式的函数
    let activeReactiveFn = null
    function watchFn(fn) {
      activeReactiveFn = fn
      fn()
      activeReactiveFn = null
    }
    
    const objProxy = new Proxy(obj, {
      get: function(target, key, receiver) {
        // 根据target.key获取对应的depend
        const depend = getDepend(target, key)
        // 给depend对象中添加响应函数
        depend.addDepend(activeReactiveFn)

        return Reflect.get(target, key, receiver)
      },
      set: function(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        // depend.notify()
        const depend = getDepend(target, key)
        depend.notify()
      }
    })
复制代码
```

上面代码中，响应式函数是为了可以收集到依赖改变后需要执行的操作，所以定义了一个全局变量。并且在Proxy的handler.get中注入该依赖函数。

### Depend重构

但是这里有两个问题：

- 如果函数中有用到两次key，比如name，那么这个函数会被收集两次。

```js
    // 传入的函数会被添加两次
    watchFn(() => {
      console.log(objProxy.name, "-------")
      console.log(objProxy.name, "+++++++")
    })
复制代码
```

- 我们并不希望将添加reactiveFn放到get中，以为它是属于Dep的行为。

所以我们需要对Depend类进行重构：

- 解决问题一的方法：不使用数组，而是使用Set。
- 解决问题二的方法：添加一个新的方法，用于收集依赖。

```js
    // 保存当前需要收集的响应式函数
    let activeReactiveFn = null

    /**
     * Depend优化:
     *  1> depend方法
     *  2> 使用Set来保存依赖函数, 而不是数组[]
     */

    class Depend {
      constructor() {
        this.reactiveFns = new Set()
      }

      // addDepend(reactiveFn) {
      //   this.reactiveFns.add(reactiveFn)
      // }

      depend() {
        if (activeReactiveFn) {
          this.reactiveFns.add(activeReactiveFn)
        }
      }

      notify() {
        this.reactiveFns.forEach(fn => {
          fn()
        })
      }
    }

    // 封装一个响应式的函数
    function watchFn(fn) {
      activeReactiveFn = fn
      fn()
      activeReactiveFn = null
    }

    // 封装一个获取depend函数
    const targetMap = new WeakMap()
    function getDepend(target, key) {
      // 根据target对象获取map的过程
      let map = targetMap.get(target)
      if (!map) {
        map = new Map()
        targetMap.set(target, map)
      }

      // 根据key获取depend对象
      let depend = map.get(key)
      if (!depend) {
        depend = new Depend()
        map.set(key, depend)
      }
      return depend
    }

    function reactive(obj) {
      return new Proxy(obj, {
        get: function(target, key, receiver) {
          // 根据target.key获取对应的depend
          const depend = getDepend(target, key)
          // 给depend对象中添加响应函数
          // depend.addDepend(activeReactiveFn)
          depend.depend()

          return Reflect.get(target, key, receiver)
        },
        set: function(target, key, newValue, receiver) {
          Reflect.set(target, key, newValue, receiver)
          // depend.notify()
          const depend = getDepend(target, key)
          depend.notify()
        }
      })
    }
复制代码
```

### vue2中响应式实现

```js
    function reactive(obj) {
      // ES6之前, 使用Object.defineProperty
      Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
          get: function() {
            const depend = getDepend(obj, key)
            depend.depend()
            return value
          },
          set: function(newValue) {
            value = newValue
            const depend = getDepend(obj, key)
            depend.notify()
          }
        })
      })
      return obj
    }
复制代码
```

### 测试

```js
    const objProxy = reactive({
      name: "zh", // depend对象
      age: 22 // depend对象
    })

    const infoProxy = reactive({
      address: "hn",
      height: 1.80
    })

    watchFn(() => {
      console.log(infoProxy.address)
    })

    infoProxy.address = "北京市"

    const foo = reactive({
      name: "foo"
    })

    watchFn(() => {
      console.log(foo.name)
    })

    foo.name = "bar"
    foo.name = "hhh"
复制代码
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b38bb9f2652489c85f8e73828708d85~tplv-k3u1fbpfcp-watermark.awebp?)

**[想详细学习vue(2,3)及其生态请访问我的vue专栏.](https://juejin.cn/column/7036633477013307423)**


作者：Spirited_Away
链接：https://juejin.cn/post/7054119692687917087
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。