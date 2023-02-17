// https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html
// https://developers.weixin.qq.com/miniprogram/dev/reference/api/Behavior.html
module.exports = Behavior({
    behaviors: [],
    properties: {
      myBehaviorProperty: {
        type: String
      }
    },
    data: {
      myBehaviorData: {
          msg: '来自behavior的message'
      }
    },
    attached: function(){},
    methods: {
      myBehaviorMethod: function(){}
    }
  })