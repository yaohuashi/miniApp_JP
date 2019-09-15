//index.js
//获取应用实例
var app = getApp();
var swiperIndex = 0;
let lazyload;
Page({
  data: {
    indicatorDots: "true", //是否显示面板指示点
    autoplay: "true", //是否自动切换
    interval: "5000", //自动切换时间间隔
    duration: "1000", //滑动动画时长
    userInfo: null,
    navbar: ['附近', '推荐', '数码', '牛羊', '蔬菜', '二手', '汽车'],
    currentTab: 1,
    fixTop: '',
    arry: [false, false, false, false, false, false, false, false],
    damoHeight: '200',//demo高度


    imgUrls: [
      "../../img/img1.jpg",
      "../../img/img1.jpg",
      "../../img/img1.jpg"
    ],
    messageInfo: [{
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },

    ],
    messageInfo1: [{
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },
      {
        userImg: "../../img/icon-new-list1.png",
        userName: "牛羊家禽",
        userPlace: "东京",
        megTitle: "二手手机100元出，99新",
        megDetil: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaasfafaefefafdfdsfsfesfsfsese",
        // megImg1: "../../img/icon-new-list1.png",
        // megImg2: "../../img/icon-new-list1.png",
        // megImg3: "../../img/icon-new-list1.png",
        megImg: "../../img/icon-new-list1.png",
      },

    ],
    navs: [{
        icon: "../../img/icon-new-list1.png",
        text: "牛羊家禽"
      },
      {
        icon: "../../img/icon-new-list2.png",
        text: "大棚蔬菜"
      },
      {
        icon: "../../img/icon-new-list3.png",
        text: "二手小物"
      },
      {
        icon: "../../img/icon-new-list4.png",
        text: "捎脚跑腿"
      },

    ],
    navs2: [{
        icon: "../../img/icon-new-list4.png",
        text: "手机数码"
      },
      {
        icon: "../../img/icon-new-list4.png",
        text: "五金器具"
      },
      {
        icon: "../../img/icon-new-list4.png",
        text: "人力雇佣"
      },
      {
        icon: "../../img/icon-new-list4.png",
        text: "汽车"
      },

    ]


  },

  //点击轮播图
  swiperClick: function() {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },

  navigateToShopInfo: function () {
    wx.navigateTo({
      url: '../shopinfo/shopinfo'
    })
  },

  navbarTap: function(e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },


  //轮播图轮播事件
  swiperChange: function(e) {
    swiperIndex = e.detail.current
  },
  /**
   * 首页导航点击事件
   */
  navClick: function(e) {
    wx.navigateTo({
      url: '../huawei/huawei?itemType=' + e.currentTarget.dataset.type,
    })
  },

  /**
   * 最热
   */
  searchClick: function() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  searchInfoClick: function (e) {
    var type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: '../searchInfo/searchInfo?searchText=' + type
    })
  },
  /**
   * 最新
   */
  newClick: function() {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },
  /**
   * 最火
   */
  hotClick: function() {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },
  onLoad: function() {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  onReady: function () {
    
  },
  onShow: function() {
    let self = this;
    wx.createSelectorQuery().select('#header').boundingClientRect(function(rect) {
      self.setData({
        fixTop: rect.top,
      })
      console.log(rect.top);
    }).exec()

  },

  // 2.监听页面滚动距离scrollTop

  onPageScroll: function(e) {
    var that = this

    that.setData({
      scrollTop: e.scrollTop
    })
    //console.log(res.scrollTop);
    var str = parseInt(e.scrollTop-559 / that.data.damoHeight);
    that.data.arry[str] = true;
    that.setData({
      arry: that.data.arry
    })
  },


})