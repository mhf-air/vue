// front-end routes
import NotFound from "../root/NotFound.vue"

import Main from "../root/main/a.vue"
import Search from "../root/search/a.vue"
import Login from "../root/login/a.vue"
import Register from "../root/login/register/a.vue"
import Profile from "../root/profile/a.vue"

export default [
  { path: "/", component: Main },

  { path: "/search", component: Search },

  { path: "/login", component: Login },
  { path: "/login/register", component: Register },

  { path: "/profile", component: Profile },

  { path: "*", component: NotFound },
]
