var app = getApp();
Page({
  data: {
    userInfo: null,
    details: {
      userImg: '../../img/phone.jpg',
      prix: '599',
      local1: '东京',
      local2: '江户川区',
      price: '11456',
      chanquan: '产权',
      title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕',
      yongjin: '佣金1%，成交奖励奖励1万元',
      youfei: '20',
      message1: '95新',
      message2: true,
      detail: '屏幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕屏\n幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕屏幕无划痕屏痕屏屏痕屏屏痕屏屏屏痕屏屏痕屏屏屏痕屏屏痕屏屏',
      picture1: ['../../img/phone0.jpg', '../../img/phone1.jpg', '../../img/phone2.jpg', '../../img/phone3.jpg' ],
      picture2: ['../../img/phone4.jpg', '../../img/phone5.jpg', '../../img/phone6.jpg', '../../img/phone7.jpg', '../../img/phone8.jpg', '../../img/phone8.jpg', '../../img/phone8.jpg', '../../img/phone8.jpg',
      ],
    },
    ellipsis: true,
    isEllipsis: false,

  },
  ellipsis: function() {
    var value = !this.data.ellipsis;
    this.setData({
      ellipsis: value
    })
  },
  onLoad: function() {
    // 页面初始化 options为页面跳转所带来的参数
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    if (this.data.details.detail.length > 50) {
      this.setData({
        isEllipsis: true,
      })
    }

  },
  onReady: function() {
    // 页面渲染完成

  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})