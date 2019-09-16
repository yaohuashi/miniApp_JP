// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    isShow: true,
    titleCount: 30,
    content: '',
    KeyboardKeys: [1, 2, 3, 4, 5, 6, 7, 8, 9, '·', 0, '<'],
    keyShow: false,
    inputLocal: 1,
    price: '开价',
    oldprice: '',
    yunfei: '',
    navbar: ['商品类', '消息类'],
    currentTab: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let pages = getCurrentPages(); //当前页面    （pages就是获取的当前页面的JS里面所有pages的信息）
    let prevPage = pages[pages.length - 2]; //上一页面（prevPage 就是获取的上一个页面的JS里面所有pages的信息）
    prevPage.setData({
      backFlg: false,
    })
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      //切换发布分类时清除已经上传的图片
      images: [],
      isShow: true
    })
  },
  chooseImage(e) {
    const selectNum = this.data.images.length;
    const num = 8 - selectNum;
    num != 0 && wx.chooseImage({
      count: num,
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        let tempFilePaths = res.tempFilePaths;
        let newList = this.data.images;
        for (let i = 0; i < tempFilePaths.length; i++) {
          newList.push(tempFilePaths[i]);
        }
        newList.length == 8 ? this.setData({
          isShow: false
        }) : null;
        this.setData({
          images: newList
        }, () => {
          console.log(this.data.images)
        })
        // const images = this.data.images.concat(res.tempFilePaths)
        // // 限制最多只能留下8张照片
        // this.data.images = images.length <= 8 ? images : images.slice(0, 8)
        // that.setData({
        //   images: this.data.images
        // })
      }
    })

  },
  removeImage(e) {
    // const idx = e.target.dataset.idx
    // this.data.images.splice(idx, 1)

    const {
      index
    } = e.currentTarget.dataset;
    let imagelist = this.data.images;
    imagelist.splice(index, 1);
    this.setData({
      images: imagelist,
      isShow: true
    })
    console.log(JSON.stringify(e))
  },

  handleImagePreview(e) {
    const idx = e.target.dataset.idx
    const images = this.data.images
    wx.previewImage({
      current: images[idx], //当前预览的图片
      urls: images, //所有要预览的图片
    })
  },
  titleInput(e) {
    const that = this;
    that.setData({
      titleCount: 30 - e.detail.value.length
    })
  },

  //改变光标位置 1
  changeInputLocal1() {
    this.setData({
      inputLocal: 1
    });
  },
  //改变光标位置 2
  changeInputLocal2() {
    this.setData({
      inputLocal: 2
    });
  },
  //改变光标位置 3
  changeInputLocal3() {
    this.setData({
      inputLocal: 3
    });
  },
  //点击界面键盘消失
  hindKeyboard() {
    this.setData({
      keyShow: false
    });
  },
  //点击输入框，键盘显示
  showKeyboard() {
    this.setData({
      keyShow: true
    });
  },
  keyTap(e) {
    let keys = e.currentTarget.dataset.keys,
      content = this.data.content,
      oldprice = this.data.oldprice,
      yunfei = this.data.yunfei,
      inputLocal = this.data.inputLocal,
      len = content.length,
      oldpriceLen = oldprice.length,
      yunfeiLen = yunfei.length;

    switch (keys) {
      case '·': //点击小数点，（注意输入字符串里的是小数点，但是我界面显示的点不是小数点，是居中的点，在中文输入法下按键盘最左边从上往下数的第二个键，也就是数字键1左边的键可以打出居中的点）
        if (inputLocal == 1) {
          if (len < 11 && content.indexOf('.') == -1) { //如果字符串里有小数点了，则不能继续输入小数点，且控制最多可输入10个字符串
            if (content.length < 1) { //如果小数点是第一个输入，那么在字符串前面补上一个0，让其变成0.
              content = '0.';
            } else { //如果不是第一个输入小数点，那么直接在字符串里加上小数点
              content += '.';
            }
          }
        } else if (inputLocal == 2) {
          if (oldpriceLen < 11 && oldprice.indexOf('.') == -1) { //如果字符串里有小数点了，则不能继续输入小数点，且控制最多可输入10个字符串
            if (oldprice.length < 1) { //如果小数点是第一个输入，那么在字符串前面补上一个0，让其变成0.
              oldprice = '0.';
            } else { //如果不是第一个输入小数点，那么直接在字符串里加上小数点
              oldprice += '.';
            }
          }
        } else if (inputLocal == 3) {
          if (yunfeiLen < 11 && yunfei.indexOf('.') == -1) { //如果字符串里有小数点了，则不能继续输入小数点，且控制最多可输入10个字符串
            if (yunfei.length < 1) { //如果小数点是第一个输入，那么在字符串前面补上一个0，让其变成0.
              yunfei = '0.';
            } else { //如果不是第一个输入小数点，那么直接在字符串里加上小数点
              yunfei += '.';
            }
          }
        }
        break;
      case '<': //如果点击删除键就删除字符串里的最后一个
        if (inputLocal == 1) {
          content = content.substr(0, content.length - 1);
        } else if (inputLocal == 2) {
          oldprice = oldprice.substr(0, oldprice.length - 1);
        } else if (inputLocal == 3) {
          yunfei = yunfei.substr(0, yunfei.length - 1);
        }
        break;
      default:
        if (inputLocal == 1) {
          let Index = content.indexOf('.'); //小数点在字符串中的位置
          if (Index == -1 || len - Index != 3) { //这里控制小数点只保留两位
            if (len < 11) { //控制最多可输入10个字符串
              content += keys;
            }
          }
        } else if (inputLocal==2){
          let Index = oldprice.indexOf('.'); //小数点在字符串中的位置
          if (Index == -1 || oldpriceLen - Index != 3) { //这里控制小数点只保留两位
            if (oldpriceLen < 11) { //控制最多可输入10个字符串
              oldprice += keys;
            }
          }
        } else if (inputLocal==3){
          let Index = yunfei.indexOf('.'); //小数点在字符串中的位置
          if (Index == -1 || yunfeiLen - Index != 3) { //这里控制小数点只保留两位
            if (yunfeiLen < 11) { //控制最多可输入10个字符串
              yunfei += keys;
            }
          }
        }
        break
    }

    this.setData({
      content, oldprice, yunfei
    });

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

  }
})