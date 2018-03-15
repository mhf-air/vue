// global components

function install(Vue: any) {
  components.map((component: any) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}

export function use(Vue: any, componentList: any) {
  componentList.map((c: any) => {
    Vue.component(c.name, c)
  })
}

// component list
import V from "./v.vue"
import H from "./h.vue"
import SiteHeader from "./SiteHeader.vue"
import SiteFooter from "./SiteFooter.vue"

export {
  V,
  H,
  SiteHeader,
  SiteFooter,
}

const components = [
  V,
  H,
  SiteHeader,
  SiteFooter,
]
