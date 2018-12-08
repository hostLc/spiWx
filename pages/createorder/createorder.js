// pages/createorder/createorder.js
import WxValidate from '../../utils/WxValidate.js'
var app = getApp()

Page({
  data: {
    displayWarn: 'display:none'
  },
 
  formSubmit:function(e){
    var fromdata = e.detail.value
    var Customer = e.detail.value.Customer;
    var Phone = e.detail.value.Phone;
    var Email = e.detail.value.Email;
    var Supplier = e.detail.value.Supplier;
    var SupplierPhone = e.detail.value.SupplierPhone;
    var SupplierAddress = e.detail.value.SupplierAddress;
    var Product = e.detail.value.Product;
    var Nunber = e.detail.value.Nunber;
    var Design = e.detail.value.Design;
    var UserID = getApp().globalData.clientid;
    var keywords ="傻";//关键词过滤
    var warn = "";
    var flag = true;
    if (Customer == "" || Customer == undefined){
      warn = "请输入客户名字";    
    } else if (Customer.indexOf(keywords)>=0){
      warn = "请输入客户名字";
    } else if (Phone == "" || Phone == undefined){
      warn = "请输入联系电话";
    } else if (!(/^1(3|4|5|7|8)\d{9}$/.test(Phone))) {
      warn = "联系电话格式不正确";
    } else if (Email=="" || Email==undefined){
      warn = "请输入邮箱";
    } else if (!(/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(Email))) { 
      warn = "邮箱格式不正确";
    }else if (Email.indexOf(keywords)>=0){
      warn = "请输入邮箱";
    } else if (Supplier == "" || Supplier == undefined){
      warn = "请输入供应商名称";  
    } else if (Supplier.indexOf(keywords) >= 0){
      warn = "请输入供应商名称";  
    } else if (SupplierPhone =="" || SupplierPhone==undefined) {
      warn = "请输入供应商联系电话";
    } else if (SupplierPhone.indexOf(keywords) >= 0) {
      warn = "请输入供应商联系电话";
    } else if (SupplierAddress == "" || SupplierAddress == undefined) {
      warn = "请输入供应商联系地址";
    } else if (SupplierAddress.indexOf(keywords) >= 0) {
      warn = "请输入供应商联系地址";
    } else if (Product == "" || Product == undefined) {
      warn = "请输入产品信息";
    } else if (Product.indexOf(keywords) >= 0) {
      warn = "请输入产品信息";
    } else if (Nunber == "" || Nunber == undefined) {
      warn = "请输入产品数量";
    } else if (Nunber.indexOf(keywords) >= 0) {
      warn = "请输入产品数量";
    } else if (Design == "" || Design == undefined) {
      warn = "请输入款数";
    } else if (Design.indexOf(keywords) >= 0) {
      warn = "请输入款数";
    }
    else{
       flag = false;
       var that = this;
        console.log("验证通过")
      var request = {
         UserID: UserID,
          Customer: Customer,
          Phone: Phone,
          Email: Email,
          Supplier: Supplier,
          SupplierPhone: SupplierPhone,
          SupplierAddress: SupplierAddress,
          Product: Product,
          Nunber: Nunber,
          Design: Design
        };

      if (UserID==0){
        wx.showModal({
          title: '提示',
          content: "登陆超时,请重新登陆",
          success: function (res) {
            wx.navigateTo({
              url: '../wxlogin/wxlogin',
            })
          }
        }) 
      }
         //提交到服务器
        wx.request({
          url: getApp().globalData.urlPath + 'api/order/create',
          data: request,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          success: function (res) {       
            console.log(res);   
            if (res.data.Success==true){
              wx.showModal({
                title: '提示',
                content: "订单创建成功",
                success:function(res){
                  wx.navigateTo({
                    url: '../home/home',
                  }) 
                }
              })                   
            }else{
              wx.showModal({
                title: '提示',
                content: "订单创建失败",
              })
            }
          }, fail: function () {
            wx.showModal({
              title: '提示',
              content: "网络连接错误",
            })
          }
        })
     }
     if(flag==true){ //验证不通过
       wx.showModal({
         title: '提示',
         content: warn,                                               
       })                                                                                           
     }
  } 
})