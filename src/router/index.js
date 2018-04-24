import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

/*invest文件夹*/
import investIndex from "@/components/invest/index"
import investDetails from "@/components/invest/investDetails"
import buyNow from "@/components/invest/buyNow"
/*home文件*/
import homeIndex from "@/components/home/index"

/*main文件夹*/
import mainIndex from "@/components/main/index"
import userCenter from "@/components/main/userCenter"
import voucher from "@/components/main/voucher"
import funds from "@/components/main/funds"
import InvestRecord from "@/components/main/InvestRecord"
import spread from "@/components/main/spread"

/*成功页面回调callBack文件夹*/
import bidSuccess from "@/components/callBack/bidSuccess"

/*登录注册页面 passport文件夹*/
import login from "@/components/passport/login"
import register from "@/components/passport/register"


Vue.use(Router)

export default new Router({
  routes: [
    /*首页*/
    {
        path: '/',
        component: homeIndex
    },
    /*投资列表*/
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
    },
    /*个人中心*/
    {
        path:"/mainIndex",
        component:mainIndex
    },
   /* 用户中心*/
    {
        path:"/userCenter",
        component:userCenter
    },
    /*我的赠券*/
    {
        path:"/voucher",
        component:voucher
    },
    /*资金明细*/
    {
        path:'/funds',
        component:funds
    },
    /*投资详情*/
    {
        path:'/InvestRecord',
        component:InvestRecord
    },
    /*推荐管理*/
    {
        path:"/spread",
        component:spread
    },
    /*登录页面*/
    {
        path:"/login",
        component:login
    },
    /*注册页面*/
    {
        path:"/register",
        component:register
    }

  ]
})
