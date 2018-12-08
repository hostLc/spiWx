// pages/user/user.js
var app = getApp();
var nickname = "";
var avatarUrl = "";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabnavuser:true,   
    nickname: nickname,
    avatarUrl: avatarUrl,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('我的界面') 
    console.log(app.globalData.clientid)
    this.setData({ 
      nickname: app.globalData.userInfo.NickName,
      avatarUrl: app.globalData.userInfo.AvatarUrl
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

  orderclick:function(e){
    wx.navigateTo({
      url: '../orderinfo/orderinfo',
    })
  },
  newsclick:function(e){
    wx.navigateTo({
      url: '../news/news',
      
    })
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