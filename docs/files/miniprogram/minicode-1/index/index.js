const app = getApp()
// https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html
Page({
  data: {
    showAB: true,
    hiddenDom: false,
    templateMessage: 'i am data in template',
    objectArray: [
        {id: 5, unique: 'unique_5'},
        {id: 4, unique: 'unique_4'},
        {id: 3, unique: 'unique_3'},
        {id: 2, unique: 'unique_2'},
        {id: 1, unique: 'unique_1'},
        {id: 0, unique: 'unique_0'},
      ],
      input_value: 0,
      test: {
          msg: 'page msg'
      }
  },
  onComponentEvent: function(e) {
    // debugger
    wx.showToast({
      title: e.detail.msg,
    })
  },
  getChildComponent: function() {
    //https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/events.html
     console.log('测试获取组件实例')
     const child = this.selectComponent('.component-tag-name')
     console.log(child)
  },
  _forItemTap: function(e) {
    // data-element-type ，最终会呈现为 event.currentTarget.dataset.elementType ；
    // data-elementType ，最终会呈现为 event.currentTarget.dataset.elementtype 。
    console.log(e)
  },
  onLoad() {
    // console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    // console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
    this.getChildComponent()
  },
})
