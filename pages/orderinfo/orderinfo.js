// pages/orderinfo/orderinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabnavuser: true,
    currentTab: 0,
    orderArray:[]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("进入订单列表页");
    var that = this;
    wx.request({
      url: getApp().globalData.urlPath + 'api/order/list',
      data: {
        userId: getApp().globalData.clientid
      },
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        that.setData({
          orderArray: res.data
        })
      }, fail: function () {
        console.log('fail');
      }
    })
  },
  orderinfoclick: function (event){
    var that = this;
    console.log("进入详情页面")
    wx.navigateTo({
      url: '../order_details/order_details?id=' + event.currentTarget.dataset.id,
    })
  },
  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})