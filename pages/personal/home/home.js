// pages/personal/home/home.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  options: {
    addGlobalClass: true,
  },

  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isLogin: false,
  },
  lifetimes: {
    attached: function() {
      console.log(app.globalData.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: app.globalData.isLogin
      })
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      console.log('detached')
      // 在组件实例被从页面节点树移除时执行
    }
  },
  pageLifetimes: {
    show: function () {
      // 页面被展示
      console.log('show')
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: app.globalData.isLogin
      })
    },
    hide: function () {
      // 页面被隐藏
      console.log('hide')
    },
    resize: function (size) {
      // 页面尺寸变化
      console.log('size')
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpLogin() {
      console.log('跳转登录');
      wx.navigateTo({
        url: '/pages/personal/login/login',
      })
    },
    handleBowOut() {
      var _this = this;
      app.globalData.isLogin = false;
      wx.clearStorageSync('wxUserInfo')
      app.globalData.openid = ''
      wx.showToast({
        title: '退出成功',
        icon: 'none',
        mask: true,
        duration: 1000
      });
    },

  }
})