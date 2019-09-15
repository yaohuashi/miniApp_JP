// pages/serach/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchButton: ['二手手机', '二手汽车', '捎脚', '租车', '五金工具', '五金工具', '五金工具', '租车', '租车', '租车'],
    searchHistory: [],
    inputValue: null,
    focus: true,
    placeholder:'二手手机 汽车'
  },
  openHistorySearch: function () {
    this.setData({
      searchHistory: wx.getStorageSync('searchHistory') || [],//若无储存则为空
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.openHistorySearch()
    this.setData({
      inputValue: this.data.placeholder,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  searchButtonClick: function(event) {
    this.setData({
      inputValue: event.currentTarget.dataset.search,
      focus: true,
    })
  },
  searchBtn: function (e) {
    var that = this;
    var inputVal = e.detail.value;
    var searchHistory = this.data.searchHistory;
    if (inputVal == '') {
      //输入为空时的处理
    }else{
      if (searchHistory.length < 20) {
        searchHistory.unshift(
          {
            value: inputVal,
            id: searchHistory.length
          }
        )
        this.setData({
          searchHistory: searchHistory,
        })
      }
      else {
        searchHistory.pop()//删掉旧的时间最早的第一条
        searchHistory.unshift(
          {
            value: inputVal,
            id: searchRecord.length
          }
        )
      }
    }
    wx.setStorageSync('searchHistory', searchHistory)
    wx.navigateTo({
      url: '../searchInfo/searchInfo?searchText=' + inputVal
    })
  },
  historyDelFn: function () {
    wx.clearStorageSync('searchHistory')
    this.setData({
      searchHistory: []
    })
  },
})