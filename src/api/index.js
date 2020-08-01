/*
包含n个接口请求函数的模块
 */
// 1、根据经纬度获取位置详情<br/>
// 2、获取食品分类列表<br/>
// 3、根据经纬度获取商铺列表<br/>
// 4、根据经纬度和关键字搜索商铺列表<br/>
// 5、获取一次性验证码<br/>
// 6、用户名密码登陆<br/>
// 7、发送短信验证码<br/>
// 8、手机号验证码登陆<br/>
// 9、根据会话获取用户信息<br/>
// 10、用户登出<br/>

import ajax from "./ajax";

/**
 * 获取地址信息(根据经纬度串)
 */
export const reqAddress = geohash => ajax('/api/position/' + geohash)
/**
 * 获取msite 页面食品分类列表
 */
export const reqCategorys = () => ajax('/api/index_category')
/**
 * 获取msite 商铺列表(根据经纬度)
 */
export const reqShops = ({latitude, longitude}) => ajax('/api/shops', {latitude, longitude})
/**
 * 账号密码登录
 */
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST')
/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})
/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')
/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')
/**
 * 请求登出
 */
export const reqLogout = () => ajax('/api/logout')
