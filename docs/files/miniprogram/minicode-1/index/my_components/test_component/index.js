// index/components/test_component.js
// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/
var my_behavior = require('../../my_behaviors/test_behaviors')
var pageCommonBehavior  = require('../../my_behaviors/page-common-behavior')
Component({
    options: {
        // https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/pure-data.html
        pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
    },
    // 相当于vue的混合
    behaviors: [
        my_behavior,
        pageCommonBehavior,
        'wx://component-export'
    ],
    relations: {
        // https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/relations.html
    },
    // 若需要自定义 selectComponent 返回的数据，可使用内置 behavior: wx://component-export
    // behaviors: ['wx://component-export'],
    export() {
        return { myField: 'myValue' }
    },
    /**
     * 组件的属性列表
     */
    properties: {
        innerText: {
            type: String,
            value: 'innerText default vale'
        },
        myProperty2: String // 简化的定义方式
    },

    /**
     * 组件的初始数据
     */
    data: {
        someData: {
            msg: '来自component的message'
        },
        someMsg: 'someMsg',
        newInnerText: '',
        _b: true, // 纯数据字段 this.data._b // 纯数据字段可以在 this.data 中获取
    },

    // 数据监听器,类似vue watch https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/observer.html
    /**
     *  数据监听器监听的是 setData 涉及到的数据字段，即使这些数据字段的值没有发生变化，数据监听器依然会被触发。
     *  如果在数据监听器函数中使用 setData 设置本身监听的数据字段，可能会导致死循环，需要特别留意。
     *  数据监听器和属性的 observer 相比，数据监听器更强大且通常具有更好的性能
     */
    observers: {
        // 多个逗号分隔，支持链式写法，支持通配置符（例如：some.field.**）,仅使用**可以监听全部setData
        'innerText': function(val) {
            this.setData({
                newInnerText: `新的innerText值为:${val}`
            })
        }
    },

    lifetimes: {
        // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
        attached: function () {
            // 在组件实例进入页面节点树时执行
        },
        moved: function () {},
        detached: function () {
            // 在组件实例被从页面节点树移除时执行
        },
    },

    // 生命周期函数，可以为函数，或一个在 methods 段中定义的方法名
    attached: function () {}, // 此处 attached 的声明会被 lifetimes 字段中的声明覆盖
    ready: function () {},

    pageLifetimes: {
        // 组件所在页面的生命周期函数
        show: function () {
            // 页面被展示
        },
        hide: function () {
            // 页面被隐藏
        },
        resize: function () {
            // 页面尺寸变化
        },
    },

    methods: {
        onMyButtonTap: function () {
            // this.setData({
            //     // 更新属性和数据的方法与更新页面数据的方法类似
            // })
            var myEventDetail = { a: 1, b: 2, msg: 'hello, 我是一条来自组件内部的事件传递消息'} // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('componentEvent', myEventDetail, myEventOption)
        },
        // 内部方法建议以下划线开头
        _myPrivateMethod: function () {
            // 这里将 data.A[0].B 设为 'myPrivateData'
            this.setData({
                'A[0].B': 'myPrivateData'
            })
        },
        _propertyChange: function (newVal, oldVal) {

        }
    }
})