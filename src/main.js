// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'
/*信息提示框*/
import messagePop from "./lib/messagePop/messagePop.js"
Vue.use(messagePop);
/*提示语*/
import tipPop from "./lib/tipPop/tipPop.js"
Vue.use(tipPop);

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 跳转后返回顶部
router.afterEach((to,from,next) => {
  window.scrollTo(0,0)
})
