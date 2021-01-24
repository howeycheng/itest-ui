import Vue from 'vue'
import App from './App.vue'
import Cookies from 'js-cookie'
import router from './router'
import Element from 'element-ui'

import store from './store'
import '@/assets/styles/index.scss' // global css
import '@/assets/styles/ruoyi.scss' // ruoyi css
import './assets/icons' // icon
import './assets/styles/element-variables.scss'
Vue.use(router);
Vue.config.productionTip = false


Vue.use(Element, {
    size: Cookies.get('size') || 'medium' // set element-ui default size
})


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})
