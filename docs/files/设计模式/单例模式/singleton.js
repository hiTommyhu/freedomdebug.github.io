// 单例
class Singleton {
  constructor() {
      if (!Singleton.instance) {
          Singleton.instance = this;
      }

      return Singleton.instance;
  }
}

const single = new Singleton()
const single2 = new Singleton()

console.log(single === single2); // true
