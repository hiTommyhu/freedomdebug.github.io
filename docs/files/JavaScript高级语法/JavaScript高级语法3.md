# JavaScript高级语法3

众所周知，js在前端开发中的地位。学好它，真的很重要。

下面我们来介绍一下es6中常用的语法。

## 解构

### 数组解构

- 普通的解构取值

```js
    var names = ["zh", "llm", "hz"]
    // var item1 = names[0]
    // var item2 = names[1]
    // var item3 = names[2]

    // 对数组的解构: []
    var [item1, item2, item3] = names
    console.log(item1, item2, item3)
复制代码
```

- 选择性取值。必须使用逗号分隔。

```js
    // 解构后面的元素
    var [, , item3] = names
    console.log(item3)
复制代码
```

- 将剩余的元素放在一个数组中，使用剩余参数。类似于函数传参的剩余参数。

```js
    // 解构出一个元素,后面的元素放到一个新数组中
    var [itemx, ...newNames] = names
    console.log(itemx, newNames)
复制代码
```

- 给解构的元素赋默认值

```js
    // 解构的默认值
    var [item1, item2, item3, item4 = "love"] = names
    console.log(item4)
复制代码
```

### 对象结构

- 对象结构比数组结构灵活，可以乱序取值

```js
    var obj = {
      name: "zh",
      age: 22
    }

    // 对象的解构: {}
    var { age, name} = obj
    console.log(name, age)
复制代码
```

- 将解构的剩余值放在一个新的对象中。还是需要借助剩余参数。

```js
    var {age, ...newObj} = obj
    console.log(newObj)
复制代码
```

- 给解构出来的属性重命名。就是将obj中的name属性取出，然后赋值给newName。

```js
    var { name: newName } = obj
    console.log(newName)
复制代码
```

- 给解构的属性赋默认值。由于obj中没有sex属性，如果不赋值的话，那么他的值将为undefined。

```js
    var { sex: newSex = "男" } = obj
    console.log(newSex)
复制代码
```

解构目前在开发中使用是非常多的：

- 比如在开发中拿到一个变量时，自动对其进行解构使用。
- 比如对函数的参数进行解构。

## let,const

- let定义变量
- const定义常量
- 在同一作用域下let, const定义后的变量是不能再重新定义的，会报错，但是var定义的变量时可以被再次定义的。

```js
let foo = "zh"
// SyntaxError: Identifier 'foo' has already been declared
let foo = "llm"
复制代码
```

- 我们知道var定义的变量是有作用域提升的，但是let,const是否有作用域提升呢？

首先我们来看一下作用域提升的定义？

在声明变量的作用域中，如果这个变量可以在声明之前被访问，那么我们可以称之为作用域提升

```js
    // Reference(引用)Error: Cannot access 'foo' before initialization(初始化)
    // let/const他们是没有作用域提升
    // foo被创建出来了, 但是不能被访问
    // 作用域提升: 能提前被访问
    console.log(foo)
    let foo = "foo"
复制代码
```

从上面代码来看，报错了。所以let,const定义的变量时没有作用域提升的。 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3698a52efd194568a035c2262d8fcccf~tplv-k3u1fbpfcp-watermark.awebp?) **所以let、const没有进行作用域提升，但是会在解析阶段被创建出来。**

- 我们知道var定义的变量最终会作为window的属性，但是let,const是否会绑定在window上呢？

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c627726e60d430dadb8cf794bfc7b6f~tplv-k3u1fbpfcp-watermark.awebp?) 其实他们被保存在VariableMap中，不会被绑定在window。

## 块级作用域

在es5中存在的作用域。并没有块级作用域。

- 全局作用域
- 函数作用域

```js
    // ES5中没有块级作用域
    // 块代码(block code)
    {
      // 声明一个变量
      var foo = "foo"
    }
    // 这里是可以访问的
    console.log(foo) //foo。
复制代码
```

在ES6中新增了块级作用域，并且通过let、const、function、class声明的标识符是具备块级作用域的限制的。**但是不同的浏览器有不同实现的(大部分浏览器为了兼容以前的代码, 让function是没有块级作用域)**

```js
    // ES6的代码块级作用域
    // 对let/const/function/class声明的类型是有效
    {
      let foo = "why"
      function demo() {
        console.log("demo function")
      }
      class Person {}
    }

    // console.log(foo) // foo is not defined
    // 不同的浏览器有不同实现的(大部分浏览器为了兼容以前的代码, 让function是没有块级作用域)
    // demo()
    var p = new Person() // Person is not defined
复制代码
```

并且if, switch, for循环的`{}`都具有块级作用域。

```js
    // if语句的代码就是块级作用域
    if (true) {
      var foo = "foo"
      let bar = "bar"
    }

    console.log(foo)
    console.log(bar)// bar is not defined

    // switch语句的代码也是块级作用域
    var color = "red"

    switch (color) {
      case "red":
        var foo = "foo"
        let bar = "bar"
    }

    console.log(foo)
    console.log(bar) //bar is not defined

    // for语句的代码也是块级作用域

    for (let i = 0; i < 10; i++) {
    }

    console.log(i) //i is not defined
复制代码
```

let,const定义for循环中的变量区别？

```js
    const names = ["zh", "llm", "zl"]

    // 不可以使用const
    for (let i = 0; i < names.length; i++) {
      console.log(names[i])
    }

    // 上面for循环的原理
    {
      let i = 0
      console.log(names[i])
    }

    {
      // 这个i是上一次的累加然后赋值的。
      let i = 1
      console.log(names[i])
    }

    {
      // 这个i是上一次的累加然后赋值的。
      let i = 2
      console.log(names[i])
    }
复制代码
```

我们知道let, const在for循环中定义的变量会形成块级作用域，而且，每次for循环他都会将上一次定义的变量累加然后赋值给下一次块级作用域中的变量，由于const定义的变量不能改变，所以不能使用const定义for循环中的变量。

## 模板字符串

使用非常简单，就是通过``来书写字符串。然后通过`${}`来标识变量。并且内部可以书写各种表达式。

```js
    const name = "zh"
    const age = 22

    // ES6提供模板字符串 ``
    const message = `my name is ${name}, age is ${age}`
    console.log(message)

    const info = `age double is ${age * 2}`
    console.log(info)

    function doubleAge() {
      return age * 2
    }

    const info2 = `double age is ${doubleAge()}`
    console.log(info2)
复制代码
```

但是有一种特殊用法，被叫做标签模板字符串。他可以用来调用函数。

- 字符串中的普通字符串将被`${}`标识的变量分割成一个数组然后传递个函数的第一个参数。`${}`的变量依次传递给函数中的其他参数。

```js
    function foo(m, n, x) {
      console.log(m, n, x)
    }
    const i = 'zh';
    const you = 'llm'
    foo`I love you` // [ 'I love you' ] undefined undefined
    foo`${i} love ${you}` // [ '', ' love ', '' ] zh llm
复制代码
```

## 函数

### 函数的默认值

- 我们定义函数形参的时候可以赋值默认值。并且，只有传递undefined时，他才会使用默认值。

```js
function foo(m = "aaa", n = "bbb") {
  console.log(m, n)
}
foo(0, "")
复制代码
```

- 对象参数默认值

```js
    // 对象参数和默认值以及解构
    function printInfo({name, age} = {name: "zh", age: 22}) {
      console.log(name, age)
    }

    printInfo({name: "llm", age: 21})

    // 另外一种写法
    function printInfo1({name = "zh", age = 22} = {}) {
      console.log(name, age)
    }

    printInfo1()
复制代码
```

- 默认值参数最好放在后面。要不然使用默认参数值不方便。

```js
    // 有默认值的形参最好放到最后
    function bar(x, y, z = 30) {
      console.log(x, y, z)
    }

    // bar(10, 20)
    bar(undefined, 10, 20)
复制代码
```

- 如果不讲默认参数值写在最后，那么获取函数参数个数会出问题。他只能获取到具有默认参数以前的参数个数。

```js
    // 有默认值的函数的length属性
    function baz(x, y, z, m, n) {
      console.log(x, y, z, m, n)
    }

    console.log(baz.length) // 5
    
    function bar(x, y, z = 10, m, n) {
      console.log(x, y, z, m, n)
    }

    console.log(bar.length) // 2
复制代码
```

### 函数的剩余参数

ES6中引用了rest parameter，可以将不定数量的参数放入到一个数组中：

如果最后一个参数是 `...` 为前缀的，那么它会将剩余的参数放到该参数中，并且作为一个数组。

那么剩余参数和arguments有什么区别呢？

- 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
- arguments对象不是一个真正的数组，而rest参数是一个真正的数组，可以进行数组的所有操作。
- arguments是早期的ECMAScript中为了方便去获取所有的参数提供的一个数据结构，而rest参数是ES6中提供并且希望以此来替代arguments的。
- 剩余参数必须放到最后一个位置，否则会报错。

## 数值的表示

```js
    const num1 = 100 // 十进制

    // b -> binary
    const num2 = 0b100 // 二进制
    // o -> octonary
    const num3 = 0o100 // 八进制
    // x -> hexadecimal
    const num4 = 0x100 // 十六进制

    console.log(num1, num2, num3, num4)

    // 大的数值的连接符(ES2021 ES12)
    const num = 10_000_000_000_000_000
    console.log(num)
复制代码
```

## Symbol

Symbol是什么呢？

Symbol是ES6中新增的一个基本数据类型，翻译为符号。

那么为什么需要Symbol呢？

- 在ES6之前，对象的属性名都是字符串形式，那么很容易造成属性名的冲突。
- 比如原来有一个对象，我们希望在其中添加一个新的属性和值，但是我们在不确定它原来内部有什么内容的情况下，很容易造成冲突，从而覆盖掉它内部的某个属性。
- 比如我们前面手写apply、call、bind实现时，我们有给其中添加一个fn属性，那么如果它内部原来已经有了fn属性了呢？
- 比如开发中我们使用混入，那么混入中出现了同名的属性，必然有一个会被覆盖掉。

Symbol就是为了解决上面的问题，用来生成一个独一无二的值。 下面就来看看Symbol的用法：

- Symbol值是通过Symbol函数来生成的，生成后可以作为属性名。

```js
    const s1 = Symbol()
    const s2 = Symbol()
    const s3 = Symbol()
复制代码
```

- 也就是在ES6中，对象的属性名可以使用字符串，也可以使用Symbol值。

```js
// Symbol值作为key
// 在定义对象字面量时使用
const obj = {
  [s1]: "zh"
}
// 新增属性
obj[s2] = "llm"

// Object.defineProperty方式
Object.defineProperty(obj, s3, {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "zl"
})
复制代码
```

- Symbol即使多次创建值，它们也是不同的：Symbol函数执行后每次创建出来的值都是独一无二的。
- 我们也可以在创建Symbol值的时候传入一个描述description：这个是ES2019（ES10）新增的特性。

```js
    // ES2019(ES10)中, Symbol还有一个描述(description)
    const s3 = Symbol("aaa")
    console.log(s3.description)// aaa
复制代码
```

- 使用Symbol作为key的属性名,在遍历Object.keys等中是获取不到这些Symbol值。**需要Object.getOwnPropertySymbols来获取所有Symbol的key。**

```js
    console.log(Object.keys(obj))
    console.log(Object.getOwnPropertyNames(obj))
    console.log(Object.getOwnPropertySymbols(obj))
    const sKeys = Object.getOwnPropertySymbols(obj)
    for (const sKey of sKeys) {
      console.log(obj[sKey])
    }
复制代码
```

- 通过`Symbol.for()`创建相等的Symbol值。如果传参，那么必须传递相同的参数。通过`keyFor`获取传递的参数，没有就是undefined。

```js
    const a = Symbol.for()
    const b = Symbol.for()
    console.log(a === b)
    const key = Symbol.keyFor(a)
    console.log(key) // undefined。
复制代码
```

## Set, WeakSet

在ES6之前，我们存储数据的结构主要有两种：数组、对象。在ES6中新增了另外两种数据结构：Set、Map，以及它们的另外形式WeakSet、WeakMap。

Set是一个新增的数据结构，可以用来保存数据，**类似于数组，但是和数组的区别是元素不能重复。**

创建Set我们需要通过Set构造函数（暂时没有字面量创建的方式）：

```js
    const set = new Set()
    set.add(10)
    set.add(10)
    console.log(set)
复制代码
```

我们可以发现Set中存放的元素是不会重复的，那么Set有一个非常常用的功能就是给数组去重。

```js
    const arr = [33, 10, 26, 30, 33, 26]
    const arrSet = new Set(arr)
    console.log(arrSet)
复制代码
```

下面是set的一些实例方法和属性

- `size`：返回Set中元素的个数。
- `add(value)`：添加某个元素，返回Set对象本身。
- `delete(value)`：从set中删除和这个值相等的元素，返回boolean类型。
- `has(value)`：判断set中是否存在某个元素，返回boolean类型。
- `clear()`：清空set中所有的元素，没有返回值。
- `forEach(callback, [thisArg])`：通过forEach遍历set。
- `keys()`：返回键名的遍历器。**set中键名和键值是一样的。**
- `values()`：返回键值的遍历器
- `entries()`：返回键值对的遍历器

和Set类似的另外一个数据结构称之为**WeakSet**，也是内部元素不能重复的数据结构。

那么和Set有什么区别呢？

- WeakSet中**只能存放对象类型**，不能存放基本数据类型。

```js
const weakSet = new WeakSet()
// 只能存放对象类型
weakSet.add(10)// TypeError: Invalid value used in weak set
复制代码
```

- WeakSet对元素的引用是**弱引用**，如果没有其他引用对某个对象进行引用，那么GC可以对该对象进行回收。

**弱引用的意思就是当对象本身赋值为null时，即使weakSet中的包含该对象，那么这个对象也会被js的垃圾回收。**

下图是对两者的分析 ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67cc1c0bf93746c99f94da6db1deadf6~tplv-k3u1fbpfcp-watermark.awebp?) WeakSet常见的方法：

- `add(value)`：添加某个元素，返回WeakSet对象本身。
- `delete(value)`：从WeakSet中删除和这个值相等的元素，返回boolean类型。
- `has(value)`：判断WeakSet中是否存在某个元素，返回boolean类型。

注意：WeakSet不能遍历。

因为WeakSet只是对对象的弱引用，如果我们遍历获取到其中的元素，那么有可能造成对象不能正常的销毁。所以存储到WeakSet中的对象是没办法获取的。

weakSet的一个应用场景

下面这段代码，不允许非类型的对象调用该类的方法。

```js
    const personSet = new WeakSet()
    class Person {
      constructor() {
        personSet.add(this)
      }

      running() {
        if (!personSet.has(this)) {
          throw new Error("不能通过非构造方法创建出来的对象调用running方法")
        }
        console.log("running~", this)
      }
    }

    let p = new Person()
    p.running() // 正常运行

    p.running.call({name: "zh"}) // 报错
复制代码
```

## Map, WeakMap

Map用于存储映射关系。

但是我们可能会想，在之前我们可以使用对象来存储映射关系，他们有什么区别呢？

- 事实上我们**对象存储映射关系只能用字符串（ES6新增了Symbol）作为属性名（key）。**
- 某些情况下我们可能希望通过其他类型作为key，比如对象，这个时候会自动将对象转成字符串来作为key。那么我们就可以使用Map。

下面是Map的一些实例方法和属性

- `size`：返回Map中元素的个数。
- `set(key, value)`：在Map中添加key、value，返回Map对象本身。
- `get(key)`: 根据key获取Map中的value。
- `has(key)`：判断是否包括某一个key，返回Boolean类型。
- `delete(key)`：根据key删除一个键值对，返回Boolean类型。
- `clear()`：清空所有的元素。
- `forEach(callback, [, thisArg])`：通过forEach遍历Map。**需要特别注意的是，Map 的遍历顺序就是插入顺序。**
- `keys()`：返回键名的遍历器。
- `values()`：返回键值的遍历器。
- `entries()`：返回键值对的遍历器。

Map也可以通过for of进行遍历。

```js
    // item是一个entries。包含键名和键值的数组。
    for (const item of map) {
      console.log(item[0], item[1])
    }
复制代码
```

和Map类型的另外一个数据结构称之为**WeakMap**，也是以键值对的形式存在的。

那么和Map有什么区别呢？

- WeakMap的key只能使用对象，不接受其他的类型作为key。
- WeakMap的key对对象想的引用是**弱引用**，如果没有其他引用引用这个对象，那么GC可以回收该对象。

```js
    let obj = {
      name: 'zh'
    }
    const wmap = new WeakMap();

    wmap.set(obj, "====")

    console.log(wmap.get(obj))// ====

    obj = null;

    console.log(wmap.get(obj))// undefined
复制代码
```

WeakMap常见的方法：

- set(key, value)：在Map中添加key、value，并且返回整个Map对象。
- get(key)：根据key获取Map中的value。
- has(key)：判断是否包括某一个key，返回Boolean类型。
- delete(key)：根据key删除一个键值对，返回Boolean类型。

注意：WeakMap不能遍历。

那么我们的WeakMap有什么作用呢？

实现vue的响应式原理（伪代码）

```js
    // 应用场景(vue3响应式原理)
    const obj1 = {
      name: "zh",
      age: 22
    }

    function obj1NameFn1() {
      console.log("obj1NameFn1被执行")
    }

    function obj1NameFn2() {
      console.log("obj1NameFn2被执行")
    }

    function obj1AgeFn1() {
      console.log("obj1AgeFn1")
    }

    function obj1AgeFn2() {
      console.log("obj1AgeFn2")
    }

    const obj2 = {
      name: "llm",
      age: 21
    }

    function obj2NameFn1() {
      console.log("obj1NameFn1被执行")
    }

    function obj2NameFn2() {
      console.log("obj1NameFn2被执行")
    }

    // 1.创建WeakMap
    const weakMap = new WeakMap()

    // 2.收集依赖结构
    // 2.1.对obj1收集的数据结构
    const obj1Map = new Map()
    obj1Map.set("name", [obj1NameFn1, obj1NameFn2])
    obj1Map.set("age", [obj1AgeFn1, obj1AgeFn2])
    weakMap.set(obj1, obj1Map)

    // 2.2.对obj2收集的数据结构
    const obj2Map = new Map()
    obj2Map.set("name", [obj2NameFn1, obj2NameFn2])
    weakMap.set(obj2, obj2Map)

    // 3.如果obj1.name发生了改变
    // Proxy/Object.defineProperty
    obj1.name = "lz"
    const targetMap = weakMap.get(obj1)
    const fns = targetMap.get("name")
    fns.forEach(item => item())
```


作者：Spirited_Away
链接：https://juejin.cn/post/7053421823035179045
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。