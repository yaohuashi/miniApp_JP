// pages/searchInfo/searchInfo.js
Page({

  data: {
    tabTxt: ['范围', '价格', '其他'], //分类
    tab: [true, true, true],
    localList: [{
      'id': '1',
      'title': '同村'
    }, {
      'id': '2',
      'title': '同镇'
    }, {
      'id': '2',
      'title': '同市'
    }],
    local_id: 0, //范围
    local_txt: '',
    jiage_id: 0, //价格
    jiage_txt: '',
    other_id: 0, //其他
    other_txt: '',
    inputValue: null,
    placeholder: null,
    details: [{
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
      {
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
      {
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
      {
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
      {
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
      {
        img: '../../img/phone.jpg',
        prix: '599',
        local1: '东京',
        local2: '江户川区',
        price: '11456',
        chanquan: '产权',
        title: '锤子T2 95新 保存完好 功能正常 屏幕无划痕',
        yongjin: '佣金1%，成交奖励奖励1万元',
        world: [{
            message: '95新',
          },
          {
            message: '包邮送'
          }
        ]
      },
    ],

  },

  onLoad: function(options) {
    console.log(options.searchText);
    this.setData({
      placeholder: options.searchText,
      inputValue: this.data.placeholder,
    })
  },

  // 选项卡
  filterTab: function(e) {
    var data = [true, true, true],
      index = e.currentTarget.dataset.index;
    data[index] = !this.data.tab[index];
    this.setData({
      tab: data
    })
  },
  navigateToShopInfo: function() {
    wx.navigateTo({
      url: '../shopinfo/shopinfo'
    })
  },

  //筛选项点击操作
  filter: function(e) {
    var self = this,
      id = e.currentTarget.dataset.id,
      txt = e.currentTarget.dataset.txt,
      tabTxt = this.data.tabTxt;
    switch (e.currentTarget.dataset.index) {
      case '0':
        tabTxt[0] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          local_id: id,
          local_txt: txt
        });
        break;
      case '1':
        tabTxt[1] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          jiage_id: id,
          jiage_txt: txt
        });
        break;
      case '2':
        tabTxt[2] = txt;
        self.setData({
          tab: [true, true, true],
          tabTxt: tabTxt,
          other_id: id,
          other_txt: txt
        });
        break;
    }
    //数据筛选
    self.getDataList();
  },

  //加载数据
  getDataList: function() {
    //调用数据接口，获取数据


  },
  onPageScroll: function(e) {
    var that = this

    that.setData({
      scrollTop: e.scrollTop
    })
  },

})