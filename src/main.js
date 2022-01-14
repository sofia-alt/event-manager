import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import infiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false
Vue.use(infiniteScroll)

require('@/assets/main.scss')
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
