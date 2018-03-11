// global components

function install(Vue) {
  components.map((component) => {
    Vue.component(component.name, component)
  })
}

export default {
  install,
}

export function use(Vue, componentList) {
  componentList.map((c) => {
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
