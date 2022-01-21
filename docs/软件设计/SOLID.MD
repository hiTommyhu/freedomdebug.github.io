# 
SOLID是SRP、OCP、LSP、ISP和DIP的首字母缩写组成，接下来看一下SOLID的具体含义

## 单一职责原则

S：SRP(The Single-Responsibility Principle) 单一职责原则，其表示对象应该具有一种单一功能的原则，降低各个功能之间的耦合，保证高内聚、低耦合的功能
比如我们在表单提交时，会先校验输入的内容是否符合期望，然后才会进行数据的提交，那么在校验的过程中便会存在很多校验逻辑，此时将每一种校验规则进行抽取为一个函数，只做对应的规则校验
```
// 校验邮箱
const validateEmail = () => {
	return new Promise((resolve, reject) => {
		// todo ...
		resolve(true)
	})
}

// 校验年龄
const validateAge = () => {
	return new Promise((resolve, reject) => {
		// todo ...
		resolve(true)
	})
}
```

## 开放封闭原则

O：OCP(The Open/Closed Principle)  开放封闭原则，其表示“程序中对于扩展开发，对于修改封闭”，一个类或者函数确定其能力之后，便不能再对其原有能力进行修改，只能在其原有功能之上进行扩展新的能力
继续上面的表单校验
```
/** 
 * 校验通过走 resolve， 不通过走 reject
*/
const validate = () => {
	return new Promise((resolve, reject) => {
		Promise.all([validateEmail(), validateAge()]).then(res => {
			console.log('校验成功', res);
			resolve(true)
		}).catch(err => {
			console.log('校验失败',err);
			resolve(err)
		})
	})
}

/** 
 * 提交数据
*/
const submit = async () => {
	// 1. 校验数据
	const pass = await validate()
	console.log('pass', pass);
	
	if(pass) {
		// 2 提交数据
	}else {
		// todo ...
	}
}
```
若是此时再增加一种校验规则：
```
// 校验时间
const validateTime = () => {
	return new Promise((resolve, reject) => {
		// todo ...
		resolve(true)
	})
}
```
仅仅扩展Promise.all即可，不会对原有的业务逻辑产生影响，之后再新增校验规则直接增加新的校验函数即可
tips：
比如现在常用的element-ui框架中，Promise.all这个过程是通过表单元素上绑定props属性进行自动校验的，并不会如上述代码这般显示调用，此处使用Promise.all是为了方便理解
校验函数中并没有具体实现校验规则，具体业务逻辑根据业务编写

## 里氏替换原则

L：LSP(The Liskov Substitution Principle) 里氏替换原则，其表示“程序中的对象应该是可以在不改变程序正确性的前提下被它的子类所替换”，基类能够使用的地方，子类都可以完全覆盖、替换基类，使用基类和子类都不影响程序的正常运转，功能完全一致，主要强调的就是继承的实现，JS中使用较少
先看代码：
```
class Cat {
	constructor(name) {
		this.name = name;
	}

	eat() {}
}

class BritishShorthair extends Cat {
	constructor(name) {
		super(name);
	}

	eat() {}
}

const animal = new Cat("猫类");
const bs = new BritishShorthair("英短");

const my = {
	pet(p: Cat) { // 限制传递是Cat或者Cat的子类
		console.log(`我的宠物是${p.name}`);
	}
}

my.pet(bs)
my.pet(animal)
```
有一个Cat类和一个BritishShorthair类，BritishShorthair作为Cat的子类，我有一个宠物，这个宠物是一个猫，那么此时当我向外介绍我的宠物时，我可以说我的宠物是一个BritishShorthair，也可以说是Cat，因为英短属于猫的细化的一个分支，在此可以完全替换Cat的使用

## 接口隔离原则

I：ISP(The Interface Segregation Principle) 接口隔离原则，其表示一个接口应该拥有尽可能少的行为，保持其单一独立，必秒出现胖接口。对于不同的功能的模块分别使用不同接口，而不是使用同一个通用的接口，有些类似于单一职责原则，在JS中无接口的概念，可以利用TS中的接口进行实现
将不同的接口进行拆分，互相隔离
```
interface Alarm {
    alert(): void;
}

interface Light {
    lightOn(): void;
    lightOff(): void;
}

class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
}
```

## 依赖倒置原则

D：DIP(The Dependency-Inversion Principle) 依赖导致(反转)原则，高层模块不应该依赖低层模块，两者都应该依赖其抽象；抽象不应该依赖细节，细节应该依赖于抽象，使用方只关注接口而不关注具体类的实现，JS中使用较少
在上述代码中pet的参数应该使用Cat，而不是BritishShorthair，比如之后又养了一个其他品种的猫咪，不会影响pet的调用，反之则会影响
```
const my = {
	pet(p: Cat) { // 限制传递是Cat或者Cat的子类
		console.log(`我的宠物是${p.name}`);
	}
}
```

作者：Nordon
链接：https://juejin.cn/post/7015582644645675044
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
