import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Hequxq from '../pages/hequxq'
import Hqsh from '../pages/hqsh'
import Home from '../pages/home'
import Allorder from '../pages/allorder'
import Payment from '../pages/payment'
import Pdelivery from '../pages/pdelivery'
import Preceipt from '../pages/preceipt'
import Comment from '../pages/comment'
import My_mine from '../pages/my_mine'
import Mysearch from '../pages/mysearch'
import My_set from '../pages/my_set'
import Lundetails from "../pages/lundetails"
import List from '../pages/list'
import Details from '../pages/details'
import DetailsComment from '../components/details/details_comment'
import Denglu from '../pages/denglu'
import Denglutwo from '../pages/denglutwo'
import Register from '../pages/register'

import Carshop from '../pages/carshop'
import Fenlei from '../pages/fenlei'
import Hequlife from '../pages/Hequlife'
import Ddyvs from '../pages/ddyvs'
import Searchdel from '../pages/searchdel'

import ContainerContent from '../components/index/containercontent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },  
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/my_mine',
      name: 'My_mine',
      component: My_mine
    },
    {
      path: '/mysearch',
      name: 'Mysearch',
      component: Mysearch
    },
    {
      path: '/searchdel',
      name: 'Searchdel',
      component: Searchdel
    },
    {
      path: '/allorder',
      name: 'Allorder',
      component: Allorder
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/pdelivery',
      name: 'Pdelivery',
      component: Pdelivery
    },
    {
      path: '/preceipt',
      name: 'Preceipt',
      component: Preceipt
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/my_set',
      name: 'My_set',
      component: My_set},
      {
      path: '/hequlife',
      name: 'Hequlife',
      component: Hequlife
    },
   
    {
      path: '/carshop',
      name: 'Carshop',
      component: Carshop
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },

    { path: '/ddyvs',
    name: 'Ddyvs',
    component: Ddyvs
  },
    {
      path: '/denglu',
      name: '/Denglu',
      component: Denglu
    },
    {
      path: '/denglutwo',
      name: '/Denglutwo',
      component: Denglutwo
    },
    {
      path: '/register',
      name: '/Register',
      component: Register
    },
    {
      path: '/lundetails',
      name: 'Lundetails',
      component: Lundetails
    },
      {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path:'/details/:id',
      name:'Details',
      component:Details
    },
    {
      path: '/details_comment',
      name: 'DetailsComment',
      component: DetailsComment
    },
    {
      path: '/hequxq/:id',
      name: 'Hequxq',
      component: Hequxq
    },
    {
      path: '/hqsh',
      name: 'Hqsh',
      component: Hqsh
    },
    {
      path: '/containercontent/:id',
      name: 'ContainerContent',
      component: ContainerContent
    },
    {path:'/*',redirect:"/index"},


  ],
})