import Vue from "vue"

// vuex
import Vuex from "vuex"
Vue.use(Vuex)

import modules from "./conf/store-modules"
const store = new Vuex.Store({
  modules,
})

// router
import VueRouter from "vue-router"
Vue.use(VueRouter)

import routes from "./conf/routes"
const router = new VueRouter({
  routes,
  mode: "history",
})

// element-ui
import ElementUI from "element-ui"
// import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)

// root
import App from "./root/a.vue"
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h(App),
})
