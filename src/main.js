// IE10兼容 with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/'
import { VueAxios } from '@/utils/request'

import '@/mock'

import setStoreWidthConfig from '@/core/set_store_width_config'
import '@/core/lazy_use' // 按需加载
import '@/permission' // permission control
import '@/utils/filter' // global filter
import '@/style/global.less'

// 给 axios Promise 扩展 finally
import promiseFinally from 'promise.prototype.finally'
promiseFinally.shim()

// 全局注册k-form-design
import KFormDesign from './components/k-form-design/packages'
import './components/k-form-design/styles/form-design.less'
Vue.use(KFormDesign)

Vue.config.productionTip = false

Vue.use(VueAxios)

new Vue({
  router,
  store,
  created: setStoreWidthConfig,
  render: (h) => h(App),
}).$mount('#app')
