//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好哦！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    usermottoFlg: 'usermotto-hidden',
    hasUserFlg: 'view-hidden'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //getSpringHelloWord
  getHelloWord: function () {
    this.setData({
      usermottoFlg: 'usermotto'
    })
    wx.request({
      url: 'http://152.136.145.69/helloword', // 仅为示例，并非真实的接口地址
      data: {
        flg: '1'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        usermottoFlg: 'usermotto-hidden'
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      hasUserFlg: ''
    })
  }
})
