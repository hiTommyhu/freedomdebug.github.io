# 代码碎片

* [直播点赞css和canvas实现https://github.com/freedomdebug/praise-animation](https://github.com/freedomdebug/praise-animation)



## vue将组件挂载到指定dom

### vue3

```
// index.vue
let sidebarShow: any;
const createDialog = async (visible: boolean, data?: any) => {
  const HelloWorld = (await import("../components/Sidebar.vue")).default;
  let app = createApp(
    h(HelloWorld, {
      visible,
      data,
    })
  );
  if (!sidebarShow) sidebarShow = app;
  if (visible) {
    sidebarShow.mount(".hahaah");
  } else {
    sidebarShow.unmount();
    sidebarShow = null;
  }
}; 
```

### vue2

```
/**
 * 挂载vue组件到指定的target dom
 * @param {*} component 组件
 * @param {*} options 组件属性（当前支持 propsData 对应component.props， listeners对应component的事件@Event）
 * @param {*} target 目标dom
 * @returns
 */
function ComponentMount(component, options, target) {
    if (!target) target = document.body
    const { propsData, listeners} = options
    const instance = new (Vue.extend(component))({
        propsData: propsData || {},
    })
    instance.$mount()
    Object.keys(listeners || {}).forEach(eventKey => {
        instance.$on(eventKey, (e) => {
            if (typeof listeners[eventKey] === 'function') {
                listeners[eventKey]()
            }
        })
    })
    target.appendChild(instance.$el)
    instance.remove = function () {
        target.removeChild(instance.$el)
        instance.$destroy()
    }
    return instance
}
export default ComponentMount
export {
    ComponentMount
}
```

use

```
import dialog from './components/dialog.vue'
this.dialogInstance = new ComponentMount(
    dialog,
    {
        propsData: {
            value: true,
            user: this.user,
        },
        listeners: {
            success: () => {
                this.handleDialogSuccess()
            },
            input: () => {
                this.showDialog = false
                this.dialogInstance.remove()
            }
        }
    }
)
```

## other
```
// 获取dom后再append
this.$refs.box.$el
```

## 复制一个数组
```
[].slice()
```

## axios封装
```
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({
    timeout: 0,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    },
    validateStatus: (status) => {
        return (status >= 200 && status < 300) || status === 403
    }
})
const pending = new Map()

/**
 * 获取请求指纹
 * @param config 
 * @returns 
 */
const getRequestFingerPrint = (config: AxiosRequestConfig):string => {
    return [
        config.url
    ].join('&')
}

/**
 * 添加请求
 * @param {Object} config 
 */
const addPending = (config: AxiosRequestConfig) => {
    const fingerPrint = getRequestFingerPrint(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
        if (!pending.has(fingerPrint)) {
            pending.set(fingerPrint, cancel)
        }
    })
}

/**
 * 移除请求
 * @param {Object} config 
 */
const removePending = (config: AxiosRequestConfig) => {
    const fingerPrint = getRequestFingerPrint(config)
    if (pending.has(fingerPrint)) {
        const cancel = pending.get(fingerPrint)
        cancel(fingerPrint)
        pending.delete(fingerPrint)
    } else {
        console.log('cancel request不存在或已完成！')
    }
}

/**
 * 通过请求接口地址取消请求
 * @param url 
 */
const cancelSingleRequestByUrl = (url: string): void => {
    removePending({url})
}

/**
 * 清空 pending 中的请求
 */
export const clearPending = () => {
    for (const [fingerPrint, cancel] of pending) {
        cancel(fingerPrint)
    }
    pending.clear()
}

// 请求拦截器
instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        removePending(config)
        addPending(config)
        return config
    }, (error) => {
        error.data = {}
        error.data.msg = '服务器异常，请联系管理员！'
        return Promise.resolve(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (res: AxiosResponse) => {
        removePending(res.config)
        if ((res.status >= 200 && res.status < 300) || res.status === 403) {
            return res.data
        } else {
            let error = new Error(res.statusText)
            error.message = JSON.stringify(res)
            throw error
        }
    }, (err) => {
        if (axios.isCancel(err)) {
            console.log('repeated request: ' + err.message)
        } else {
            let error = new Error(err.statusText)
            err.message = error
            throw error
        }
        return Promise.reject(err)
    }
)

export function post<T = any>(url: string, data: any): Promise<T> {
    return instance.request({url, method: 'POST', data})
}

export default {
    request: instance,
    post,
    cancelSingleRequestByUrl,
    cancelAllRequest: clearPending,
}
```
