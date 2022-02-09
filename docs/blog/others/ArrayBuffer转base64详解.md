# ArrayBuffer转base64详解

```javascript
const base64String = window.btoa(String.fromCharCode(...new Uint8Array(buffer)))
```

在JavaScript中，有一个很常用的引用数据类型Array,你可以在里面放字符串、数字、对象、布尔值等等等等。它存放在堆中，可以自由增减。

而ArrayBuffer我们叫它类型化数组，它的诞生就是为了解决一个问题：操作二进制数据。

只由0和1组成的二进制数据往往是非常巨大的，上千个字节可以说司空见惯，传统的Array这时候处理起二进制数据起来就显得非常低效，所以ArrayBuffer出现了，它作为一块专用的内存区域存放在栈中，取数据非常快。

我们现在通过new ArrayBuffer(10)初始化一个buffer实例，看看会得到什么。

```javascript
let buffer = new ArrayBuffer(10);console.log(buffer);ArrayBuffer(10) {}
[[Int8Array]]: Int8Array(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[[Int16Array]]: Int16Array(5) [0, 0, 0, 0, 0]
[[Uint8Array]]: Uint8Array(10) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
byteLength: 10
__proto__: ArrayBuffer
```

可以看到在ArrayBuffer中，主要存放了几个“视图”，Int8Array表示8位有符号整数数组，Int16Array表示16位有符号整数数组，Uint8Array则表示8位无符号整数数组。

当然，如果比如说我们想取出Int8Array这个数组来，是不能直接通过buffer.Int8Array来取的。这是因为ArrayBuffer不能直接通过下标去读写，我们需要把它转成一个类型化数组（TypedArray）。

```javascript
const myTypedArray = new Uint8Array(buffer)
```

转化完之后，我们我们不仅可以通过下标去对类型化数组进行索引，也可以获取其length，当然TypedArray仍与普通的Array存在细微的区别，那就是假设我们用超出边界的索引语法去获取数组元素时，

TypedArray并不会去原型链中进行查找。

现在我们已经拿到了这个类型化数组，是时候把它转成普通字符串了。看看String.fromCharCode这个函数，它接受的参数为一堆代码单元序列，输出一个普通字符串。而我们刚刚得到的类型化数组，里

面存放的正是代码单元。

```javascript
const str = String.fromCharCode(...myTypedArray)
```

这里我们用拓展运算符...把类型数组的代码单元解出来，一次性转完，得到一个普通的字符串。

最后，我们需要借助一个window对象的方法，也就是btoa方法，它的作用是：把一个普通字符串编码成base-64格式的字符串。

有时候后台把图片资源通过arrayBuffer传给前端，这时候为了能正常显示，我们还需要在转化的base64字符串前面拼接上data:image/jpeg;base64,

所以我们整理一下，可以得出这样一个函数：

```javascript
const arrayBufferToBase64Img = (buffer) => {
  const str = String.fromCharCode(...new Uint8Array(buffer));
  return `data:image/jpeg;base64,${window.btoa(str)}`;
}
```

总结

得到一个ArrayBuffer ---> 转成类型化数组以正常读取 --> 转成普通字符串 --> 转成base64字符串