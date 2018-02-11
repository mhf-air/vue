import Vue from "vue"
import Vuex from "vuex"
import VueRouter from "vue-router"

import App from "./root/main/a.vue"

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
  el: "#app",
  render: (h) => h(App),
  components: { App },
})
