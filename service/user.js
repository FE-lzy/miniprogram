import request from './network.js'

export function userLoginByAccount(param){
  return request({
    url: '/wx/wxUserLogin',
    data: param.data
  })
}
export function userGetOpenIdByCode(param){
  return request({
    url: '/wx/wxOpenid',
    data: param
  })
}

export function userLoginByOpenid(param){
  return request({
    url: '/wx/wxUserLoginByOpenid',
    data: param
  })
}