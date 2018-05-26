import Vue from 'vue'
import App from './App'
import router from './router' 
import store from '@/store/store'
import { sync } from 'vuex-router-sync'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(VueYouTubeEmbed)
Vue.use(Vuetify)
Vue.use(iView)
sync(store, router)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
