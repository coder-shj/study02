import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/new.vue'

//路由懒加载：在用到时才进行加载，节省页面加载时间。
const about = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const user = () => import(/* webpackChunkName: "about" */ '../views/User.vue')

//嵌套的路由
const homenews = () => import('../views/Homenews.vue')
const homemessage = () => import('../views/Homemessage.vue')

const routes = [
  {
    path: '/',  //首页默认的路由
    redirect: '/home'  //redirect：重定向，将上述路径重定向为该数值
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '', 
        redirect: '/home/news'  //设置默认路径
      },
      {
        path: 'news', //该地址前不需要加/，会自动加入
        component: homenews
      },
      {
        path: 'message',
        component: homemessage
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // 直接通过箭头函数通向组件
    component: about
  },
  {
    path: '/new',
    name: 'new',
    component: New
  },
  {
    path: '/user/:userid',
    name: 'user',
    component: user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'asd'  //修改活跃的router的class属性
})

export default router
