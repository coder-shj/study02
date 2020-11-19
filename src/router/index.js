import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/profile.vue'

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
    meta: {  //元数据：数据的数据
      title: '首页'
    },
    component: Home,
    children: [
      {
        path: '', 
        redirect: '/home/news'  //设置默认路径
        
      },
      {
        path: 'news', //该地址前不需要加/，会自动加入
        component: homenews,
        meta: {
          title: '新闻'
        }
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
    meta: {
      title: '关于'
    },
    component: about,
    // beforeEnter: (to, from, next) => {  //局部守卫的使用
    //   console.log('局部守卫')
    //   next()
    // }
  },
  {
    path: '/profile',
    name: 'new',
    meta: {
      title: '档案'
    },
    component: New
  },
  {
    path: '/user/:id',
    name: 'user',
    meta: {
      title: '用户',
      num: 1
    },
    component: user
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'asd'  //修改活跃的router的class属性
})

// 导航首位的使用

//前置守卫：表示页面打开前执行
// router.beforeEach((to, from, next) => {
//   //每次跳转路由均会执行该函数
//   //从from跳转到to
//   document.title = to.matched[0].meta.title  //matched中为一个数组，下表为0时表示本身，为1时为子路由
//   // console.log(to.matched);

//   console.log('我是前置')

//   // next中可以传入path参数使跳转到特定页面。
//   // if (to.matched[0].meta.num == 1)
//   //   next('/about') //必须调用、忘记调用的话会无法在组件中跳转
//   // else
//     next()
// })

// //后置钩子(hook 表示回调)：表示页面打开后执行
// router.afterEach((to, from) => {
//   console.log('我是后置');
// })

export default router
