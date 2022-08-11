function Person() {}

/** 
 * constructor： 将需要单例的类 通过参数传递
*/
const singleton = function (constructor) {
    let singleInstance;
    return function () {
        // 第一次实例化时
        if (!singleInstance) {
            constructor.apply(this, arguments);
            Object.setPrototypeOf(this, constructor.prototype);
            singleInstance = this;
        }

        // 直接返回
        return singleInstance;
    };
};

const createPerson = singleton(Person)
const p = new createPerson();
const p2 = new createPerson();

console.log(p === p2); // true
