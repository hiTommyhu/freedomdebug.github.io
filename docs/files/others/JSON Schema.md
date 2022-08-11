# JSON Schema 

http://json-schema.org/

JSON (JavaScript Object Notation) 缩写，JSON 是一种数据格式，具有简洁、可读性高、支持广泛的特点JSON。通过JSON 我们可以灵活地来表示任意复杂的数据结构。

JSON Schema 主要用于描述 JSON 数据

## 何为JSON Schema？

JSON数据格式对于web开发者都为所熟悉，在平时的开发中离不开它，例如前后端数据传输格式，webpack配置文件，对象序列化等实际应用场景，通常都以JSON格式定义和储存。它以简洁易懂的结构、体积小的优点得以在各类编程语言中广泛流行。

那么什么是JSON Schema?
JSON Schema其实是对json数据格式的描述和规范，是对JSON格式一种约束，更明确地定义数据的类型和结构。伴随着JSON被创造出来，JSON Schema的诞生是必然的，类似其他数据格式YAML，也会创造YAML Schema的标准来进行规范，并使用这个规范来校验格式。这就好比有了Javascript，自然就会有Typescript，开发者更倾向于使用工具替代人为来进行约束，校验，使开发效率和开发质量大大加强。

## 掌握使用

举个简单的例子，你便清楚JSON Schema的使用

这里有两个对象a，b，唯一的区别是对象里的属性类型不同，当你想指定对象属性的类型时，假若你只想要字符串类型，那么可以使用JSON Schema来进行定义

```json
{
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    }
  }
}
// right
var a = {
  title: '123'
}

// error
var b = {
  title: 123
}
```

上面是最简洁的JSON Schema对象定义，从中我们可以得知定义的变量类型是对象，而这个变量对象里具有title属性，title属性的类型是string类型。好了，到这里你已经掌握了JSON Schema使用，是不是好简单 。

当然，JSON Schema既然是一套标准和规范，那么就会有好多语义需要理解，下面说说常见用法

### 数据类型

在JSON Schema中使用最多的是`type`关键字，它包含了JSON格式的基本类型



| 类型 | 描述 |
| ---- | ---- | 
| string | 字符串型，双引号包裹的 Unicode 字符和反斜杠转义字符| 
| number | 数字型，包括整型(int)和浮点数型(float) | 
| boolean | 布尔型，true 或 false | 
| object | 对象型，无序的键:值对集合 | 
| array | 数组型，有序的值序列 | 
| null | 空型 |

### 关键字

以Object类型为例，列举在JSON Schma所经常用到的关键字

示例:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "$id": "https://example.com/schemas/person",
  "title": "base info",
  "description": "base information about person",
  "type": "object",
  "required": ["name", "age", "phone"],
  "definitions": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 10
    }
  },
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 10
    },
    "age": {
      "type": "number",
      "minimum": 18,
      "exclusiveMinimum": true,
      "maximum": 65,
      "exclusiveMaximum": true
    },
    "phone": {
      "type": "string",
      "pattern": "^1\\d{10}$"
    },
    "parents": {
      "type": "array",
      "items": [{ "$ref": "#/definitions/name" }],
      "minItems": 1,
      "maxItems": 2,
      "uniqueItems": true
    },
    "address": {
      "type": "object",
      "properties": {
        "city": {
          "type": "string",
          "enum": ["guangzhou", "beijing"]
        }
      }
    }
  }
}
```

| 关键字 | 描述 | 
| ---- | ---- | 
| $schema | 声明此json片段属于JSON Schema，并遵循所声明的JSON Schema版本规范 | | $id | 为JSON Schema声明一个统一资源标识符，使解析$ref时能够引用片段 | 
| title | 为JSON Schema文件提供标题 | 
| description | 为JSON Schema文件提供描述信息 | 
| definitions | 声明子schema,使解析$ref能够引用片段 | 
| $ref | 引用JSON Schema片段 | 
| required | 定义对象类型properties所声明的字段是否必须，值必须是数组，数组中的元素必须是字符串类型且唯一 | 
| type | 定义元素的类型 | 
| properties | 定义对象类型里的属性(键值对)，每个字段的值都是一个有效的schema片段，用来限制每个字段的格式 | 
| minimum | 约束取值范围，标识取值范围应该大于或等于minimum | 
| exclusiveMinimum | 假若minimum或exclusiveMinimum同时存在，且exclusiveMinimum为true，则取值范围大于minimum | 
| maximum | 约束取值范围，标识取值范围应该小于或等于maximum | 
| exclusiveMaximum | 假若maximum或exclusiveMaximum同时存在，且exclusiveMaximum为true，则取值范围小于maximum | 
| minLength | 字符串类型数据的最小长度 | 
| maxLength | 字符串类型数据的最大长度 | 
| pattern | 使用正则表达式约束字符串类型数据 | 
| items | 用来定义数组类型的子元素，值必须为数组，且是一个有效的schema片段 | 
| minItems | 定义数组类型大小的最小长度 | 
| maxItems | 定义数组类型大小的最大长度 | 
| uniqueItems | 定义数组类型子元素是否必须唯一 | 
| enum | 用来限制值的范围，值必须在enum所指定的集合里面 |

以上是比较常用到的关键字，还有一些其他的关键字可以阅读官方文档进行深入地了解和使用

[Understanding JSON Schema](https://link.zhihu.com/?target=https%3A//json-schema.org/understanding-json-schema/index.html)

### 进阶使用：

### 正则属性

提供`patternProperties`关键字，对属性字段名提供正则校验

```json
{
  "type": "object",
  "patternProperties": {
    "^S_": { "type": "string" },
    "^I_": { "type": "integer" }
  }
}
// right
"{ "S_25": "This is a string" }"

// right
{ "I_0": 42 }
// error S_开头的字段名的值必须为字符串类型
{ "S_0": 42 }

// error I_开头的字段名的值必须为数值类型
{ "I_42": "This is a string" }
```

### 组合sechma

JSON Sechma提供一些关键字来讲多个子schema片段组合在一起，类似布尔算符AND, OR, XOR, 和 NOT，通过布尔逻辑来验证 
| 关键字 | 描述 | 
| ---- | ---- | 
| allOf | 相当于AND布尔算符，必须满足所有的子schema校验 | 
| anyOf | 相当于OR布尔算符，必须满足任意子schema校验 | 
| oneOf | 相当于XOR布尔算符，必须满足其中一个子schema校验 | 
| not | 相当于NOT布尔算符，必须都不满足所有的子schema校验 |

以`allOf`关键字为例：

必须要满足符合字符串类型且最大长度为5的值

```json
{
  "allOf": [
    { "type": "string" },
    { "maxLength": 5 }
  ]
}
// right
"short"
// error 字符长度超出5
"too long"
```

### 条件sechma

可以使用`if`,`then`,`else`关键字实现条件逻辑判断，当符合`if`子schema条件，则对`then`的子schema条件进行校验，若`if`子schema条件不通过，则走`else`子schema条件校验

```json
{
  "type": "object",
  "properties": {
    "street_address": {
      "type": "string"
    },
    "country": {
      "default": "United States of America",
      "enum": ["United States of America", "Canada"]
    }
  },
  "if": {
    "properties": { "country": { "const": "United States of America" } }
  },
  "then": {
    "properties": { "postal_code": { "pattern": "[0-9]{5}(-[0-9]{4})?" } }
  },
  "else": {
    "properties": { "postal_code": { "pattern": "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" } }
  }
}
// right
// if的schema验证通过，则校验then的schema，20500 符合 /[0-9]{5}(-[0-9]{4})?/ 正则表达式
{
  "street_address": "1600 Pennsylvania Avenue NW",
  "country": "United States of America",
  "postal_code": "20500"
}
// error
// if的schema验证不通过，则校验else的schema，10000 不符合 /[A-Z][0-9][A-Z] [0-9][A-Z][0-9]/ 正则表达式
{
  "street_address": "24 Sussex Drive",
  "country": "Canada",
  "postal_code": "10000"
}
```

### 递归

使用`$ref`关键字引用自己的子schema片段，实现递归模式，可以用于树形结构的描述

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "title": "$ref递归调用",
  "definitions": {
    "node": {
      "type": "object",
      "properties": {
        "children": {
          "type": "array",
          "items": {
            "$ref": "#/definitions/node"
          }
        }
      }
    }
  },
  "type": "object",
  "properties": {
    "tree": {
      "$ref": "#/definitions/node"
    }
  }
}
```

以下的JSON结构才能在上述的JSON Schema校验通过

```json
{
  "tree": {
    "children": [
      {
        "children": [
          {
            "children": []
          }
        ]
      }
    ]
  }
}
```

## 应用

JSON Schema规范了JSON格式，使JSON的解析控制在一定的范围了，在JSON输入到输出等过程中添加Schema协议的校验，减少了代码程序出错的几率，一定程度上保证了代码的质量。
JSON Schema在公司的内部项目上也有应用，例如raptor活动运营平台JSON Schema可视化组件编辑器，pear配置管理平台使用JSON Schema生成输入表单，在amis开发中通过json配置中台页面等等。可见，JSON Schema在代码开发过程中发挥不可忽视的作用，我们应该加以理解并应用JSON Schema，下面归纳一下JSON Schema一些用途。

### 1、生成JSON格式可读文档

使用过typescript都应该了解静态类型的好处，代码包含了类型接口声明，相当于文档注释，使代码一目了然，提高了可读性。我们可以基于现有的JSON来生成JSON Schema，快速生成JSON格式规范，相当于一份可读文档，减少了团队之间的沟通理解成本。

通过JSON转换JSON Schema在线工具：
[https://www.jsonschema.net/](https://link.zhihu.com/?target=https%3A//www.jsonschema.net/)

### 2、提供更为准确可靠的mock数据

基于JSON Schema提供多种校验约束条件，可以使用它原生的能力来生成更为准确可靠的mock数据

使用JSON Schema生成mock数据在线工具：
[https://json-schema-faker.js.org/](https://link.zhihu.com/?target=https%3A//json-schema-faker.js.org/)

### 3、数据校验

基于JSON Schema提供多种校验约束条件，可以定义数据的校验规则，通过JSON Schema进行数据校验，多用于接口请求参数校验，表单校验，和数据校验自动化测试上

JSON Schema校验工具：[Ajv](https://link.zhihu.com/?target=https%3A//github.com/ajv-validator/ajv)

### 4、基于JSON Schema配置文件渲染UI组件



![img](https://pic2.zhimg.com/80/v2-b985737ea138eaaf9fa2543bd86e707d_720w.jpg)



借助vue、react框架组件化理念以及动态渲染组件能力，涌现了许多基于JSON Schema配置文件渲染表单或者组件的库，有效解决通用性组件大量重复使用的场景。通过JSON配置组件乃至页面，能够使代码转化为文件，使数据得以导入导出，便于迁移储存。另外也可以开发可视化编辑器，通过拖拽交互，生成JSON文件，降低开发使用难度。基于这一系列的方案，使开发效率大大提升和降低后续的代码维护。

在vue框架下，[vue-json-schema-form](https://link.zhihu.com/?target=https%3A//github.com/lljj-x/vue-json-schema-form)提供了表单组件生成工具

vue-json-schema-form 基于JSON Schema的关键字`type`所定义的类型来渲染对应表单组件，并适配了第三方的UI库

主要架构：



![img](https://pic4.zhimg.com/80/v2-6031c382802a45e71c1c24a302866bab_720w.jpg)



渲染流程：



![img](https://pic2.zhimg.com/80/v2-ed8402eadd6cee5c3bb5bd21f81771b9_720w.jpg)



参考资料：

[Understanding JSON Schema](https://link.zhihu.com/?target=https%3A//json-schema.org/understanding-json-schema/index.html)
[vue-json-schema-form](https://link.zhihu.com/?target=https%3A//github.com/lljj-x/vue-json-schema-form)
