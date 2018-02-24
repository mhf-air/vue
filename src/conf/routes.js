// front-end routes

import NotFound from "../root/NotFound.vue"
import Main from "../root/main/a.vue"
import About from "../root/about/a.vue"

export default [
  { path: "/", component: Main },

  { path: "/about", component: About },

  { path: "*", component: NotFound },
]
