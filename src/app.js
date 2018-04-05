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
Vue.use(ElementUI)

// common components
import CommonComponents from "@mhf-vue/components"
Vue.use(CommonComponents)

// app specific components
import Components from "./components"
Vue.use(Components)
/* import { use, Card } from "./components"
use(Vue, [
  Card,
]) */

// root
new Vue({
  router,
  store,
  el: "#app",
  render: (h) => h("router-view"),
})
