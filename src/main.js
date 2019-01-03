import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './route/index'
import App from './App.vue'
import { plugins } from './util/utils'
import 'iview/dist/styles/iview.css'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts'
// 地图数据json
import { map }from './assets/json/map.js'
echarts.registerMap('china', map)
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(plugins.component)
Vue.use(plugins.filter)
Vue.prototype.$chart = echarts

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
