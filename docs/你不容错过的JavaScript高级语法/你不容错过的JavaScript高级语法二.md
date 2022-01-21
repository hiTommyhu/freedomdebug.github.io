# 你不容错过的JavaScript高级语法(二)

众所周知，js在前端开发中的地位。学好它，真的很重要。

## 属性描述符

对象属性通常都是直接定义在对象内部，或者直接添加到对象内部的。但是这样来做的时候我们就不能对这个属性进行一些限制：比如这个属性是否是可以通过delete删除的？这个属性是否在for-in遍历的时候被遍历出来呢？

如果我们想要对一个属性进行比较精准的操作控制，那么我们就可以使用**属性描述符**。通过属性描述符可以精准的**添加或修改**对象的属性。属性描述符需要使用 `Object.defineProperty` 来对属性进行添加或者修改。

下面就来介绍一下`Object.defineProperty`

Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

可接收三个参数：

- obj要定义属性的对象；
- prop要定义或修改的属性的名称或 Symbol；
- descriptor要定义或修改的属性描述符；

返回值：被传递给函数的对象。

### 属性描述符的分类

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e82e785fc03043db8e0eaeb715df47aa~tplv-k3u1fbpfcp-watermark.awebp?) 属性描述符的类型有两种：

- 数据属性（Data Properties）描述符（Descriptor）。
  - `[[Configurable]]`：表示属性**是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符**。当我们直接在一个对象上定义某个属性时，这个属性的`[[Configurable]]`为true。当我们通过属性描述符定义一个属性时，这个属性的`[[Configurable]]`默认为false。
  - `[[Enumerable]]`：表示属性**是否可以通过`for-in`或者`Object.keys()`返回该属性**。当我们直接在一个对象上定义某个属性时，这个属性的`[[Enumerable]]`为true。当我们通过属性描述符定义一个属性时，这个属性的`[[Enumerable]]`默认为false。
  - `[[Writable]]`：表示**是否可以修改属性的值**。当我们直接在一个对象上定义某个属性时，这个属性的`[[Writable]]`为true。当我们通过属性描述符定义一个属性时，这个属性的`[[Writable]]`默认为false。
  - `[[value]]`：属性的value值，读取属性时会返回该值，修改属性时，会对其进行修改。默认情况下这个值是undefined。
- 存取属性（Accessor访问器 Properties）描述符（Descriptor）。
  - `[[Configurable]]`：表示属性是否可以通过delete删除属性，是否可以修改它的特性，或者是否可以将它修改为存取属性描述符, 和数据属性描述符是一致的。当我们直接在一个对象上定义某个属性时，这个属性的[[Configurable]]为true。当我们通过属性描述符定义一个属性时，这个属性的[[Configurable]]默认为false；
  - `[[Enumerable]]`：表示属性是否可以通过for-in或者Object.keys()返回该属性, 和数据属性描述符是一致的。当我们直接在一个对象上定义某个属性时，这个属性的[[Enumerable]]为true。当我们通过属性描述符定义一个属性时，这个属性的[[Enumerable]]默认为false。
  - `[[get]]`：获取属性时会执行的函数。默认为undefined
  - `[[set]]`：设置属性时会执行的函数。默认为undefined

存取描述符常用的作用？

- 隐藏某一个私有属性被希望直接被外界使用和赋值。

```js
    var obj = {
      _address: "北京市"
    }

    Object.defineProperty(obj, "address", {
      enumerable: true,
      configurable: true,
      get: function() {
        return this._address
      },
      set: function(value) {
        this._address = value
      }
    })
复制代码
```

- 如果我们希望截获某一个属性它访问和设置值的过程时, 也会使用存储属性描述符。

对于对象字面量定义的属性他们的属性描述符默认值都是`true`。

## 其他的对象方法

获取对象的属性描述符：

- getOwnPropertyDescriptor
- getOwnPropertyDescriptors

禁止对象添加新属性：`preventExtensions`

- 给一个对象添加新的属性会失败（在严格模式下会报错）；
- **只能约束第一层属性**

密封对象，不允许配置和删除属性：`seal`

- **实际是调用preventExtensions**
- 并且将现有属性的configurable:false
- 所以对象属性还是可以修改的
- **只能约束第一层属性**

冻结对象，不允许修改现有属性： `freeze`

- **实际上是调用seal**
- 并且将现有属性的writable: false
- **只能约束第一层的属性**

## 类的多种继承方式

[类的多种继承方式](https://juejin.cn/post/6844904169300557837/)

下面一张图带你理解原型链继承关系

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3fcbea3e8754cf38b47c0cdbebee074~tplv-k3u1fbpfcp-watermark.awebp?)

## es6中的class

基础语法就不多说了，大家应该都很熟悉了。只说一下注意点。

- class中书写的任何表达式形式的变量或者方法都是属于创建的对象本身。
- class书写的方法是属于改构造函数的原型对象

```js
     class Person {
          // 表达式形式的函数，他直接定义在创建的对象上，而不是定义在构造函数的原型上。
          name='zh'
          say=() => {
            console.log("say")
          }

          // 这个方法在Person的原型上
          play() {
            console.log("play")
          }
     }

     console.log(Object.getOwnPropertyDescriptors(new Person()))
     console.log(new Person())

     console.log(Object.getOwnPropertyDescriptors(Person.prototype))
复制代码
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1e618156fca4c76ac8ae66bfec08c9f~tplv-k3u1fbpfcp-watermark.awebp?)

- 在实现类的继承时，当在子类的构造函数中使用this之前或者返回对象时，一定要调用super方法。此时super表示父类构造函数。
- super也可以调用父类的静态和实例方法。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1c07d52f7e074434a435feaa734ddb9c~tplv-k3u1fbpfcp-watermark.awebp?)


作者：Spirited_Away
链接：https://juejin.cn/post/7052666740932608013
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
