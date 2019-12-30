// 负责对axios进行处理
import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将地址的常态值设置给URL
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  // config是要发送请求的配置信息
  let token = window.localStorage.getItem('user-token')// 获取token
  config.headers['Authorization'] = `Bearer ${token}`// 统一注入token到headers属性，因为所有接口要求的token是一样的
  return config
}, function (error) {
  // 对响应错误做处理
  return Promise.reject(error)
})
export default axios
