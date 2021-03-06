import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../views/Home.vue' // 路由级组件
import Home from '../views/home/'
import Login from '../views/login'
import Main from '../views/home/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '', // 什么都不写，就默认是二级路由组件
          component: Main // 默认的二级路由
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  ]
})
