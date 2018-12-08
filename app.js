//app.js
App({

  WxValidate: (rules, messages) => new WxValidate(rules, messages),

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    console.log(that.globalData.wx_url_1);
    // 登录
    wx.login({    
      success: res => {
        console.log("Code:" + res.code);         
        if(res.code){          
          wx.request({
            url: that.globalData.wx_url_1 + res.code + that.globalData.wx_url_2,
             success: res => {              
               console.log("OpenId:"+res.data.openid);
               console.log("Session_key:" + res.data.session_key);
               that.globalData.openid = res.data.openid;
          }          
        })
        }else{
          console.log("Error:" + error);
        }     
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              console.log('获取useinfo')           
             console.log(res.userInfo);     
              this.globalData.userInfo = res.userInfo    
              this.globalData.clientid = res.userInfo.clientid   
              console.log('给全局变量赋值完毕')    
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    /**
     * 设置全局变量
     */
     userInfo: null,
      openid: 0,
      clientid:0,
      wx_url_1: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx5d16566f3049a946&secret=d21c3a7a09fd77af230ea6ac4109a8d0&js_code=',
      wx_url_2: '&grant_type=authorization_code',
      urlPath:'http://47.52.70.208:9001/'
      // urlPath: 'http://localhost:9001/'
    }
})