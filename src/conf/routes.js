// front-end routes
import NotFound from "../root/NotFound.vue"

import Main from "../root/main/a.vue"
import Search from "../root/search/a.vue"
import Login from "../root/login/a.vue"
import Profile from "../root/profile/a.vue"
import ProfileInfo from "../root/profile/info/a.vue"

export default [
  { path: "/", component: Main },

  { path: "/search", component: Search },

  { path: "/login", component: Login },

  { path: "/profile", component: Profile },
  { path: "/profile/info", component: ProfileInfo },

  { path: "*", component: NotFound },
]
