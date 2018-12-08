// pages/newsinfo/newsinfo.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:{},
    tabnavuser:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log("进入消息详情页")   
    wx.request({
      url: getApp().globalData.urlPath + 'api/message/read',
      data: {
        userId: getApp().globalData.clientid,
        messageId: options.messageid
      },
      method: 'get',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)       
        that.setData({
          message: res.data
        })
        //修改样式
        
      }, fail: function () {
        console.log('fail');
      }
    })
  },

  /**
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