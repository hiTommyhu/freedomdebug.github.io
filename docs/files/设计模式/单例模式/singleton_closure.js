// 单例-闭包
const singleton = (function () {
  function Person() {}
    let singleInstance;
    return function () {
        // 第一次实例化时
        if (!singleInstance) {
            singleInstance = new Person()
        }
    
        // 直接返回
        return singleInstance;
    };
})();

const single = singleton();
const single2 = singleton();

console.log(single === single2); // true
