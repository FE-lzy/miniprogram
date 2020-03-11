// pages/mine/mine.js
const app = getApp()
import {
  userLoginByAccount
} from '../../service/user.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: 'admin',
    password: '123456'
  },

  userNameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  passWdInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },
  /**
   * 登陆
   */
  handleLogin() {
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        mask: true,
        duration: 2000
      })
    } else {
      let param = {}
      param.data = {
        username: this.data.username,
        password: this.data.password,
        openid: app.globalData.openid
      };
      this._userLoginByAccount(param);

    }
  },
  _userLoginByAccount(data) {
    userLoginByAccount(data).then(res => {
      if (res.code == 0) {
        wx.showToast({
          title: '登录成功',
          icon: 'none',
          mask: true,
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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