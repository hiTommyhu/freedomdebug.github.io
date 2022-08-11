# Promise

众所周知，js在前端开发中的地位。学好它，真的很重要。

下面这篇文章，介绍一下Promise。

Promise想必大家都很熟悉了。他的基本使用这里就不介绍了。下面来介绍一些注意事项

## Promise的三种状态

一旦状态被确定下来，Promise的状态会被 锁死，该Promise的状态是不可更改的。

- 待定（pending）
  - 初始状态，既没有被兑现，也没有被拒绝；
  - 当执行executor中的代码时，处于该状态；
- 已兑现（fulfilled）
  - 意味着操作成功完成；
  - 执行了resolve时，处于该状态；
- 已拒绝（rejected）
  - 意味着操作失败；
  - 执行了reject时，处于该状态；

## resolve不同值的区别

- 如果resolve传入一个普通的值或者对象，那么这个值会作为then回调的参数。
- 如果resolve中传入的是另外一个Promise，**那么这个新Promise会决定原Promise的状态**。

```js
    const newPromise = new Promise((resolve, reject) => {
      resolve("resolve message")
      reject("err message")
    })

    new Promise((resolve, reject) => {
      // pending -> fulfilled
      resolve(newPromise)
    }).then(res => {
      console.log("res:", res)
    }, err => {
      console.log("err:", err)
    })
复制代码
```

- **如果resolve中传入的是一个对象，并且这个对象有实现then方法，那么会执行该then方法，并且根据then方法的结果来决定Promise的状态。**

```js
    new Promise((resolve, reject) => {
      // pending -> fulfilled
      const obj = {
        then: function(resolve, reject) {
          // resolve("resolve message")
          reject("reject message")
        }
      }
      resolve(obj)
    }).then(res => {
      console.log("res:", res)
    }, err => {
      console.log("err:", err)
    })
复制代码
```

## 实例方法

### then

- 接受两个参数
  - fulfilled的回调函数：当状态变成fulfilled时会回调的函数。
  - reject的回调函数：当状态变成reject时会回调的函数。（调用reject函数或者通过throw抛出错误）
- 多次调用
  - 每次调用我们都可以传入对应的fulfilled回调。
  - 当Promise的状态变成fulfilled的时候，这些回调函数都会被执行。
- 返回值

then方法本身是有返回值的，它的返回值是一个Promise，返回值被作为Promise的resolve()的参数。所以我们可以进行如下的链式调用。所有的返回值都想转换成下面这种

```js
    return new Promise((resolve,reject) => {resolve("return的表达式")})
复制代码
```

但是then方法返回的Promise到底处于什么样的状态呢？Promise有三种状态，那么这个Promise处于什么状态呢？

- 当then方法中的回调函数本身在执行的时候，那么它处于pending状态

- 当then方法中的回调函数返回一个结果时，那么它处于fulfilled状态，并且会将结果作为resolve的参数；

  - 返回一个普通的值。

  ```js
      const promise = new Promise((resolve, reject) => {
        resolve("zh")
      })
      // 1> 如果我们返回的是一个普通值(数值/字符串/普通对象/undefined), 那么这个普通的值被作为一个新的Promise的resolve值
      promise.then(res => {
        return "aaaaaa" // => return new Promise((resolve,reject) => {resolve("aaaaaa")})
      }).then(res => {
        console.log("res:", res)
      })
  复制代码
  ```

  - 返回一个Promise。

  ```js
      promise.then(res => {
        return new Promise((resolve, reject) => { // => return new Promise((resolve,reject) => {resolve("return的表达式")})
          setTimeout(() => {
            resolve(111111)
          }, 3000)
        })
      }).then(res => {
        console.log("res:", res)
      })
  复制代码
  ```

  - 返回一个thenable值。

  ```js
      promise.then(res => {
        return {
          then: function(resolve, reject) {
            resolve(222222)
          }
        }
      }).then(res => {
        console.log("res:", res)
      })
  复制代码
  ```

- 当then方法抛出一个异常时，那么它处于reject状态。

### catch

他的作用就是捕获异常。（reject调用或者throw抛出的异常）。

- 通过then方法的第二个参数。
- 通过catch方法。

```js
    const promise = new Promise((resolve, reject) => {
      reject("111111")
    })
    promise.catch(err => {

    })
复制代码
```

- **通过在then方法后面调用catch方法。（这种方式比较特殊）**

```js
    promise.then(res => {
    }).then(res => {
      throw new Error("then error message")
    }).catch(err => {
      console.log("err:", err)
    })
复制代码
```

**他的作用是捕获第一次抛出的错误。不管是Promise抛出的，还是then方法抛出的**

- **如果promise抛出的异常没有被处理，那么将会报错。**
- 返回值同then方法一样，将返回值传入Promise的reslve。
- 可以被多次调用

### finally

finally是在ES9（ES2018）中新增的一个特性：表示无论Promise对象无论变成fulfilled还是reject状态，最终都会被执行的代码。

finally方法是不接收参数的，因为无论前面是fulfilled状态，还是reject状态，它都会执行。

## 静态方法

### resolve

有时候我们已经有一个现成的内容了，希望将其转成Promise来使用，这个时候我们可以使用Promise.resolve 方法来完成。

Promise.resolve的用法相当于new Promise，并且执行resolve操作。

该方法参数同**resolve不同值的区别**的讲解。

### reject

reject方法类似于resolve方法，只是会将Promise对象的状态设置为reject状态。

Promise.reject的用法相当于new Promise，只是会调用reject。**Promise.reject传入的参数无论是什么形态，都会直接作为reject状态的参数传递到catch的。**

```js
    const promise = Promise.reject(new Promise(() => {}))

    promise.then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err)
    })
复制代码
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/576e615a2745466aae4bd0deec95ed3f~tplv-k3u1fbpfcp-watermark.awebp?)

### all

它的作用是将多个Promise包裹在一起形成一个新的Promise。

新的Promise状态由包裹的所有Promise共同决定：

- 当所有的Promise状态变成fulfilled状态时，新的Promise状态为fulfilled，并且会将所有Promise的返回值组成一个数组。
- **当有一个Promise状态为reject时，新的Promise状态为reject，并且会将第一个reject的返回值作为参数。**

### allSettled

all方法有一个缺陷：当有其中一个Promise变成reject状态时，新Promise就会立即变成对应的reject状态。那么对于resolved的，以及依然处于pending状态的Promise，我们是获取不到对应的结果的。

在ES11（ES2020）中，添加了新的API Promise.allSettled：

该方法会在所有的Promise都有结果（settled），无论是fulfilled，还是reject时，才会有最终的状态。**并且这个Promise的结果一定是fulfilled的。并且返回值会标识Promise的状态。**

```js
    // 创建多个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(11111)
      }, 1000);
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(22222)
      }, 2000);
    })

    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(33333)
      }, 3000);
    })

    // allSettled
    Promise.allSettled([p1, p2, p3]).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    
    // 打印
    [
      { status: 'fulfilled', value: 11111 },
      { status: 'rejected', reason: 22222 },
      { status: 'fulfilled', value: 33333 }
    ]
复制代码
```

### race

如果有一个Promise有了结果，我们就希望决定最终新Promise的状态，那么可以使用race方法。

### any

any方法是ES12中新增的方法，和race方法是类似的：

**any方法会等到一个fulfilled状态，才会决定新Promise的状态。** 如果所有的Promise都是reject的，那么也会等到所有的Promise都变成rejected状态。

如果所有的Promise都是reject的，那么会报一个AggregateError的错误。 ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3f49b40cdf345f48ad73b0431390038~tplv-k3u1fbpfcp-watermark.awebp?) 通过`err.errors`可以拿到全部的reject时传递的参数。

```js
    // 创建多个Promise
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(1111)
      }, 1000);
    })

    const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(2222)
      }, 500);
    })

    const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(3333)
      }, 3000);
    })

    // any方法
    Promise.any([p1, p2, p3]).then(res => {
      console.log("res:", res)
    }).catch(err => {
      console.log("err:", err.errors) //err: (3) [1111, 2222, 3333]
    })
复制代码
```

## 手写Promise

- then方法及其Promise的构建

```js
    const PROMISE_STATUS_PENDING = 'pending'
    const PROMISE_STATUS_FULFILLED = 'fulfilled'
    const PROMISE_STATUS_REJECTED = 'rejected'

    // 工具函数
    function execFunctionWithCatchError(execFn, value, resolve, reject) {
      try {
        const result = execFn(value)
        resolve(result)
      } catch(err) {
        reject(err)
      }
    }

    class Promise {
      constructor(executor) {
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledFns = []
        this.onRejectedFns = []

        const resolve = (value) => {
          if (this.status === PROMISE_STATUS_PENDING) {
            // 添加微任务
            queueMicrotask(() => {
              if (this.status !== PROMISE_STATUS_PENDING) return
              this.status = PROMISE_STATUS_FULFILLED
              this.value = value
              this.onFulfilledFns.forEach(fn => {
                fn(this.value)
              })
            });
          }
        }

        const reject = (reason) => {
          if (this.status === PROMISE_STATUS_PENDING) {
            // 添加微任务
            queueMicrotask(() => {
              if (this.status !== PROMISE_STATUS_PENDING) return
              this.status = PROMISE_STATUS_REJECTED
              this.reason = reason
              this.onRejectedFns.forEach(fn => {
                fn(this.reason)
              })
            })
          }
        }

        try {
          executor(resolve, reject)
        } catch (err) {
          reject(err)
        }
      }

      then(onFulfilled, onRejected) {
        return new Promise((resolve, reject) => {
          // 1.如果在then调用的时候, 状态已经确定下来
          if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
            // try {
            //   const value = onFulfilled(this.value)
            //   resolve(value)
            // } catch(err) {
            //   reject(err)
            // }
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          }
          if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
            // try {
            //   const reason = onRejected(this.reason)
            //   resolve(reason)
            // } catch(err) {
            //   reject(err)
            // }
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          }

          // 2.将成功回调和失败的回调放到数组中
          if (this.status === PROMISE_STATUS_PENDING) {
            this.onFulfilledFns.push(() => {
              // try {
              //   const value = onFulfilled(this.value)
              //   resolve(value)
              // } catch(err) {
              //   reject(err)
              // }
              execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            })
            this.onRejectedFns.push(() => {
              // try {
              //   const reason = onRejected(this.reason)
              //   resolve(reason)
              // } catch(err) {
              //   reject(err)
              // }
              execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            })
          }
        })
      }
    }
复制代码
```

- catch方法

```js
     then(onFulfilled, onRejected) {
        const defaultOnRejected = err => { throw err }
        onRejected = onRejected || defaultOnRejected

        return new HYPromise((resolve, reject) => {
          // 1.如果在then调用的时候, 状态已经确定下来
          if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          }
          if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          }

          // 2.将成功回调和失败的回调放到数组中
          if (this.status === PROMISE_STATUS_PENDING) {
            if (onFulfilled) this.onFulfilledFns.push(() => {
              execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            })
            if (onRejected) this.onRejectedFns.push(() => {
              execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            })
          }
        })
      }

      catch(onRejected) {
        this.then(undefined, onRejected)
      }
复制代码
```

- finally 方法

```js
      then(onFulfilled, onRejected) {
        const defaultOnRejected = err => { throw err }
        onRejected = onRejected || defaultOnRejected

        const defaultOnFulfilled = value => { return value }
        onFulfilled = onFulfilled || defaultOnFulfilled

        return new HYPromise((resolve, reject) => {
          // 1.如果在then调用的时候, 状态已经确定下来
          if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
            execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
          }
          if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
            execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
          }

          // 2.将成功回调和失败的回调放到数组中
          if (this.status === PROMISE_STATUS_PENDING) {
            if (onFulfilled) this.onFulfilledFns.push(() => {
              execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
            })
            if (onRejected) this.onRejectedFns.push(() => {
              execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
            })
          }
        })
      }

      catch(onRejected) {
        return this.then(undefined, onRejected)
      }

      finally(onFinally) {
        this.then(() => {
          onFinally()
        }, () => {
          onFinally()
        })
      }
复制代码
```

- Reject, Resolve方法

```js
     static resolve(value) {
        return new Promise((resolve) => resolve(value))
      }

      static reject(reason) {
        return new Promise((resolve, reject) => reject(reason))
      }
复制代码
```

- all， allSettled方法

```js
     static all(promises) {
        // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
        return new HYPromise((resolve, reject) => {
          const values = []
          promises.forEach(promise => {
            promise.then(res => {
              values.push(res)
              if (values.length === promises.length) {
                resolve(values)
              }
            }, err => {
              reject(err)
            })
          })
        })
      }

      static allSettled(promises) {
        return new HYPromise((resolve) => {
          const results = []
          promises.forEach(promise => {
            promise.then(res => {
              results.push({ status: PROMISE_STATUS_FULFILLED, value: res})
              if (results.length === promises.length) {
                resolve(results)
              }
            }, err => {
              results.push({ status: PROMISE_STATUS_REJECTED, value: err})
              if (results.length === promises.length) {
                resolve(results)
              }
            })
          })
        })
      }
复制代码
```

- race, any 方法

```js
     static race(promises) {
        return new HYPromise((resolve, reject) => {
          promises.forEach(promise => {
            // promise.then(res => {
            //   resolve(res)
            // }, err => {
            //   reject(err)
            // })
            promise.then(resolve, reject)
          })
        })
      } 

      static any(promises) {
        // resolve必须等到有一个成功的结果
        // reject所有的都失败才执行reject
        const reasons = []
        return new HYPromise((resolve, reject) => {
          promises.forEach(promise => {
            promise.then(resolve, err => {
              reasons.push(err)
              if (reasons.length === promises.length) {
                reject(new AggregateError(reasons))
              }
            })
          })
        })
      }
复制代码
```

- 完整的代码

```js
// ES6 ES2015
// https://promisesaplus.com/
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'

// 工具函数
function execFunctionWithCatchError(execFn, value, resolve, reject) {
  try {
    const result = execFn(value)
    resolve(result)
  } catch(err) {
    reject(err)
  }
}

class Promise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    this.onFulfilledFns = []
    this.onRejectedFns = []

    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_FULFILLED
          this.value = value
          this.onFulfilledFns.forEach(fn => {
            fn(this.value)
          })
        });
      }
    }

    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // 添加微任务
        queueMicrotask(() => {
          if (this.status !== PROMISE_STATUS_PENDING) return
          this.status = PROMISE_STATUS_REJECTED
          this.reason = reason
          this.onRejectedFns.forEach(fn => {
            fn(this.reason)
          })
        })
      }
    }

    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then(onFulfilled, onRejected) {
    const defaultOnRejected = err => { throw err }
    onRejected = onRejected || defaultOnRejected

    const defaultOnFulfilled = value => { return value }
    onFulfilled = onFulfilled || defaultOnFulfilled

    return new Promise((resolve, reject) => {
      // 1.如果在then调用的时候, 状态已经确定下来
      if (this.status === PROMISE_STATUS_FULFILLED && onFulfilled) {
        execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
      }
      if (this.status === PROMISE_STATUS_REJECTED && onRejected) {
        execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
      }

      // 2.将成功回调和失败的回调放到数组中
      if (this.status === PROMISE_STATUS_PENDING) {
        if (onFulfilled) this.onFulfilledFns.push(() => {
          execFunctionWithCatchError(onFulfilled, this.value, resolve, reject)
        })
        if (onRejected) this.onRejectedFns.push(() => {
          execFunctionWithCatchError(onRejected, this.reason, resolve, reject)
        })
      }
    })
  }

  catch(onRejected) {
    return this.then(undefined, onRejected)
  }

  finally(onFinally) {
    this.then(() => {
      onFinally()
    }, () => {
      onFinally()
    })
  }

  static resolve(value) {
    return new HYPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new HYPromise((resolve, reject) => reject(reason))
  }

  static all(promises) {
    // 问题关键: 什么时候要执行resolve, 什么时候要执行reject
    return new HYPromise((resolve, reject) => {
      const values = []
      promises.forEach(promise => {
        promise.then(res => {
          values.push(res)
          if (values.length === promises.length) {
            resolve(values)
          }
        }, err => {
          reject(err)
        })
      })
    })
  }

  static allSettled(promises) {
    return new HYPromise((resolve) => {
      const results = []
      promises.forEach(promise => {
        promise.then(res => {
          results.push({ status: PROMISE_STATUS_FULFILLED, value: res})
          if (results.length === promises.length) {
            resolve(results)
          }
        }, err => {
          results.push({ status: PROMISE_STATUS_REJECTED, value: err})
          if (results.length === promises.length) {
            resolve(results)
          }
        })
      })
    })
  }

  static race(promises) {
    return new HYPromise((resolve, reject) => {
      promises.forEach(promise => {
        // promise.then(res => {
        //   resolve(res)
        // }, err => {
        //   reject(err)
        // })
        promise.then(resolve, reject)
      })
    })
  } 

  static any(promises) {
    // resolve必须等到有一个成功的结果
    // reject所有的都失败才执行reject
    const reasons = []
    return new HYPromise((resolve, reject) => {
      promises.forEach(promise => {
        promise.then(resolve, err => {
          reasons.push(err)
          if (reasons.length === promises.length) {
            reject(new AggregateError(reasons))
          }
        })
      })
    })
  }
}
```


作者：Spirited_Away
链接：https://juejin.cn/post/7054519691368202253
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。