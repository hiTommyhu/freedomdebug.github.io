# JavaScript高级语法4

众所周知，js在前端开发中的地位。学好它，真的很重要。

## es7

### `Array.prototype.includes`

- 判断数组中是否包含该元素。
- 参数一查询的字符串，参数二开始查找的下标。默认是0。

以前的判断方式`indexOf`。

```js
    const names = ["zh", "llm", NaN]

    if (names.indexOf("zh") !== -1) {
      console.log("包含zh元素")
    }
复制代码
```

缺点不能判断`NaN == NaN`。`includes`是认为`NaN == NaN`。

```js
if (names.indexOf(NaN) !== -1) {// false
  console.log("包含NaN")
}

if (names.includes(NaN)) { // true
  console.log("包含NaN")
}
复制代码
```

### 指数(乘方) exponentiation运算符

在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。

在ES7中，增加了 `**` 运算符，可以对数字来计算乘方。

```js
    const result1 = Math.pow(3, 3)
    // ES7: **
    const result2 = 3 ** 3
复制代码
```

## es8

### `Object.values`

之前我们可以通过 `Object.keys` 获取一个对象所有的key，在ES8中提供了 `Object.values` 来获取所有的value值。

```js
    const obj = {
      name: "zh",
      age: 22
    }

    console.log(Object.keys(obj)) // [ 'name', 'age' ]
    console.log(Object.values(obj)) // [ 'zh', 22 ]
复制代码
```

如果传入一个数组，那么它将返回数组本身

```js
    // 用的非常少
    console.log(Object.values(["zh", "llm"]))
复制代码
```

如果传入一个字符串，那么它将返回由每个字符组成的数组。等同于`str.split("")`

```js
    console.log(Object.values("zh"))// [ 'z', 'h' ]
    console.log("zh".split("")) // [ 'z', 'h' ]
复制代码
```

### `Object.entries`

通过Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。

```js
    const obj = {
      name: "zh",
      age: 22
    }

    console.log(Object.entries(obj)) // [ [ 'name', 'zh' ], [ 'age', 22 ] ]
    const objEntries = Object.entries(obj)
    objEntries.forEach(item => {
      console.log(item[0], item[1])
    })
复制代码
```

如果传入一个数组或者字符串，那么将返回下标和元素组成的entries。

```js
console.log(Object.entries(["zh", "llm"])) //[ [ '0', 'zh' ], [ '1', 'llm' ] ]
console.log(Object.entries("zh")) // [ [ '0', 'z' ], [ '1', 'h' ] ]
复制代码
```

## `String.prototype.padStart / padEnd`

某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 `padStart` 和 `padEnd` 方法，分别是对字符串的首尾进行填充的。

- 参数一填充的最大长度，参数二填充的字符。默认是空格填充。

```js
    const message = "Hello World"
    const newMessage = message.padStart(15, "*").padEnd(20, "-")
    console.log(newMessage) // ****Hello World-----
复制代码
```

- 如果填充的最大长度小于原字符串的长度，那么将会输出原字符串。

```js
    const message = "Hello World"
    console.log(message.padStart(1, 0)) //Hello World
复制代码
```

- 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。

```js
    '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
    '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"
复制代码
```

我们简单具一个应用场景：比如需要对身份证、银行卡的前面位数进行隐藏:

```js
    const cardNumber = "321324234242342342341312"
    const lastFourCard = cardNumber.slice(-4)
    const finalCard = lastFourCard.padStart(cardNumber.length, "*")
    console.log(finalCard) // ********************1312
复制代码
```

## es10

### `Array.prototype.flat`

将嵌套的数组“拉平”，变成一维的数组。该方法返回一个新数组，**对原数组没有影响。**

- 参数，表明需要展开多少层的数组。默认值为1。

```js
    [1, 2, [3, [4, 5]]].flat() // [1, 2, 3, [4, 5]]

    [1, 2, [3, [4, 5]]].flat(2) // [1, 2, 3, 4, 5]
复制代码
```

- 如果不管有多少层嵌套，都要转成一维数组，可以用`Infinity`关键字作为参数。

```js
    [1, [2, [3]]].flat(Infinity) // [1, 2, 3]
复制代码
```

- 如果原数组有空位，`flat()`方法会跳过空位。

```js
    [1, 2, , 4, 5].flat() // [1, 2, 4, 5]
复制代码
```

### `Array.prototype.flatMap`

他就是`map`和`flat`的结合体。相当于执行`map()`，然后对返回值组成的数组执行`flat()`方法。**该方法返回一个新数组，不改变原数组。**

- 参数一一个遍历函数， 参数二绑定遍历函数里面的`this`值。
- 他只能展开一层数组。

```js
    const messages = ["Hello World", "hello zh"]
    const words = messages.flatMap(item => {
      return item.split(" ")
    })

    console.log(words) //[ 'Hello', 'World', 'hello', 'zh' ]
复制代码
```

### `Object.fromEntries`

我们可以通过 `Object.entries` 将一个对象转换成 `entries`，那么如果我们有一个`entries`了，如何将其转换成对象呢？

ES10提供了 Object.formEntries来完成转换。

```js
    const obj = {
      name: "zh",
      age: 22
    }

    const entries = Object.entries(obj)
    const newObj = Object.fromEntries(entries)
    console.log(newObj) //{ name: 'zh', age: 22 }
复制代码
```

那么这个方法有什么应用场景呢？

将查询字符串转化成一个对象。

```js
    const queryString = 'name=zh&age=22'
    const queryParams = new URLSearchParams(queryString) // 返回一个可迭代对象
    console.log(queryParams) //{ 'name' => 'zh', 'age' => '22' }

    const paramObj = Object.fromEntries(queryParams)
    console.log(paramObj)
复制代码
```

### `String.prototype.trimStart / trimEnd`

它们的行为与`trim()`一致，`trimStart()`消除字符串头部的空格(**tab 键、换行符等不可见的空白符号**)，`trimEnd()`消除尾部的空格(**tab 键、换行符等不可见的空白符号**)。它们返回的都是新字符串，不会修改原始字符串。

`trimLeft()`是`trimStart()`的别名，`trimRight()`是`trimEnd()`的别名。

## es11

### BigInt

在早期的JavaScript中，我们不能正确的表示过大的数字。大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。

```js
    const maxInt = Number.MAX_SAFE_INTEGER
    console.log(maxInt) // 9007199254740991
    console.log(maxInt + 1) //9007199254740992
    console.log(maxInt + 2) // 9007199254740992 // 出现错误
复制代码
```

那么ES11中，引入了新的数据类型BigInt，用于表示大的整数。BitInt的表示方法是在数值的后面加上n。

```js
    const bigInt = 900719925474099100n
    console.log(bigInt + 10n)
复制代码
```

当BigInt类型的数字和Number类型的数字运算时，BigInt不会隐私转化，所以在运算之前，我们需要手动转换他们的类型。

```js
    const num = 100
    console.log(bigInt + BigInt(num))

    const smallNum = Number(bigInt)
    console.log(smallNum)
复制代码
```

### `??`空值合并操作符

在es11之前，我们是通过`||`来运算的。但是它会存在一些问题。当前面一个运算数为0，""等时，依旧会赋值第二个运算数。

```js
    const foo = 0
    const bar1 = foo || "default value"
    console.log(bar1) // default value
复制代码
```

所以接下来我们就可以使用`??`来进行运算了。只有当前一个运算数为undefined, null时，才会赋值第二个运算数。

```js
    const foo = 0
    const bar1 = foo || "default value"
    const bar2 = foo ?? "defualt value"

    console.log(bar1, bar2) // default value 0
复制代码
```

### `?.`可选链

直接在链式调用的时候判断，**左侧的对象是否为`null`或`undefined`**。如果是的，就不再往下运算，而是返回`undefined`。

### globalThis

由于在浏览器中，全局对象是window。在nodejs中全局对象是global。

在ES11中对获取全局对象进行了统一的规范：globalThis。不管是在浏览器还是在nodejs中，打印globalThis就获取的是对应的全局对象。

### for..in标准化

在ES11之前，虽然很多浏览器支持for...in来遍历对象类型，但是并没有被ECMA标准化。

在ES11中，对其进行了标准化，for...in是用于遍历对象的key的。

## es12

### FinalizationRegistry

FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。

FinalizationRegistry 提供了这样的一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为 finalizer ）。

你可以通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值。

```js
    const finalRegistry = new FinalizationRegistry((value) => {
      console.log("注册在finalRegistry的对象, 某一个被销毁", value)
    })
    
    let obj = { name: "zh" }
    let info = { age: 22 }

    finalRegistry.register(obj, "obj")
    finalRegistry.register(info, "value")

    obj = null
    info = null
复制代码
```

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52db58d7e1e6460ba54d4e490d25a172~tplv-k3u1fbpfcp-watermark.awebp?) 当注册的对象被销毁时，会调用FinalizationRegistry传入的构造函数。

### WeakRefs

如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用。

如果我们希望是一个弱引用的话，可以使用WeakRef。

```js
    const finalRegistry = new FinalizationRegistry((value) => {
      console.log("注册在finalRegistry的对象, 某一个被销毁", value)
    })

    let obj = { name: "why" }
    let info = new WeakRef(obj)

    finalRegistry.register(obj, "obj")
    obj = null

    setTimeout(() => {
      console.log(info.deref()) //undefined
      console.log(info.deref()?.name) //undefined
      console.log(info.deref() && info.deref().name) //undefined
    }, 10000)
复制代码
```

上面代码表示，当obj对象指空的时候，由于info对象是对obj的弱引用，那么obj销毁的时候，那么在堆内存中的对象也会被销毁。所以info获取不到。**并且weakRef获取对象中的属性是通过`weakRef.deref()`来获取的。** 当对象销毁时，他的值是undefined。

其他比较重要的es6-es12知识，后期文章会单独介绍。


作者：Spirited_Away
链接：https://juejin.cn/post/7053765287522336782
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。