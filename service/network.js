import {
  baseURL,
  timeout
} from './config.js'

function request(options) {
  console.log(options)
  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      method: options.method || 'post',
      data: options.data,
      header: {
        'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

export default request;