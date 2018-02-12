import Vue from "vue"

// vuex
import Vuex from "vuex"
Vue.use(Vuex)

/* const store = new Vuex.Store({
  modules: {
    main,
  },
}) */

// router
import VueRouter from "vue-router"
Vue.use(VueRouter)

import routes from "./root/routes"
const router = new VueRouter({
  mode: "history",
  routes,
})

import App from "./root/a.vue"
new Vue({
  router,
  // store,
  el: "#app",
  render: (h) => h(App),
})
