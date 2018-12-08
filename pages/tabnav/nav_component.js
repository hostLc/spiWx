// pages/tabnav/nav_component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabnavuser: Boolean,
    tabnavhome: Boolean,
    tabnavcreate: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    userclick(){
      this.setData({
         tabnavuser:this.data.tabnavuser,
         
      })
      wx.navigateTo({
         url: '../user/user',
      })
   
    },
    createclick: function (e) {
      this.setData({
        tabnavcreate:this.data.tabnavcreate,
      })
      wx.navigateTo({
        url: '../createorder/createorder',
      })
    },
    homeclick: function (e) {
      this.setData({
        tabnavhome:this.data.tabnavhome,
      })
      wx.navigateTo({
        url: '../home/home',
      })
    },
  },
  
})
