
import App from './App.vue'
import Vue from 'vue'
import router from './router'
import VueChatScroll from 'vue-chat-scroll'
import './plugins/bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueChatScroll)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')