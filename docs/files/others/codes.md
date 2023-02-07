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
