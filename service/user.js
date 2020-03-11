import request from './network.js'

export function userLoginByAccount(param){
  return request({
    url: '/wx/wxUserLogin',
    data: param.data
  })
}