import Vue from 'vue'
import Router from 'vue-router'
import Home2 from '@/show/Home2'
import Login from '@/show/Login'
import Register from '@/show/Register'
import Car from '@/show/Car'
import Detail from '@/show/Detail'
import Seckill from '@/show/Seckill'
import Shop from '@/show/Shop'
import MyOrder from '@/show/MyOrder'
import Pay from '@/show/Pay'
import Search from '@/show/Search'
import SubmitOrder from '@/show/SubmitOrder'
import UserCenter from '@/show/UserCenter'
import SellerCenter from '@/show/SellerCenter'
import ShopManage from '@/show/ShopManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home2',
      component: Home2
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Car',
      name: 'Car',
      component: Car,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Seckill',
      name: 'Seckill',
      component: Seckill
    },
    {
      path: '/MyOrder',
      name: 'MyOrder',
      component: MyOrder,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/Pay',
      name: 'Pay',
      component: Pay,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/SubmitOrder',
      name: 'SubmitOrder',
      component: SubmitOrder,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/UserCenter',
      name: 'UserCenter',
      component: UserCenter,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/SellerCenter',
      name: 'SellerCenter',
      component: SellerCenter,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    },
    {
      path: '/ShopManage',
      name: 'ShopManage',
      component: ShopManage,
      meta: {
        requireLogin: true // 当前路由需要校验，不需要就不用写
      }
    }
  ]
})
