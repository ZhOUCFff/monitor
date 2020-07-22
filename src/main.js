import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.scss'
import './assets/css/normal.scss'

import Flexble from './utils/flexible'
Vue.use(Flexble)

// 引入echarts
// import echarts from 'echarts'
// Vue.prototype.$echarts = echarts

Vue.prototype.$bus = new Vue()

// 全局注册Swiper
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
