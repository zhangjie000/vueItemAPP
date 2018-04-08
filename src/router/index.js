import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import investIndex from "@/components/invest/index"
import investDetails from "@/components/invest/investDetails"
import buyNow from "@/components/invest/buyNow"
import homeIndex from "@/components/home/index"

import bidSuccess from "@/components/callBack/bidSuccess"


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: homeIndex
    },
    /*首页*/
    {
        path: '/investIndex',
        component: investIndex,
    },
    /*投标详情*/
    {
        path:'/investDetails',
        component:investDetails
    },
    /*立即购买*/
    {
        path:'/buyNow',
        component:buyNow
    },
    /*购买成功*/
    {
        path:'/bidSuccess',
        component:bidSuccess
    }


  ]
})
