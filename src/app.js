import Vue from "vue"

// vuex
import Vuex from "vuex"
Vue.use(Vuex)

// router
import VueRouter from "vue-router"
Vue.use(VueRouter)

import routes from "./root/routes"
const router = new VueRouter({
  mode: "history",
  routes,
})

import App from "./root/App.vue"
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
})
