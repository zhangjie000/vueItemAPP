import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import imvestIndex from "@/components/invest/index"

import "@/assets/css/base.css"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/imvestIndex',
      name: 'imvestIndex',
      component: imvestIndex
    }
  ]
})
