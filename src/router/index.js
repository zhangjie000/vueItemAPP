import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import investIndex from "@/components/invest/index"
import investDetails from "@/components/invest/investDetails"
import homeIndex from "@/components/home/index"


Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        component: homeIndex
    },
    {
        path: '/investIndex',
        component: investIndex,
    },
    {
        path:'/investDetails',
        component:investDetails
    }


  ]
})
