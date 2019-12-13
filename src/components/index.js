// 实现整体组件的统一注册
import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
export default {
  install: function (Vue) {
    // 调用install方法 传入了Vue对象
    Vue.component('layout-aside', layoutAside) // 全局注册左侧导航组价
    Vue.component('layout-header', layoutHeader) // 全局注册头部组件
  }
}
