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
import SiteHeader from "./SiteHeader.vue"
import SiteFooter from "./SiteFooter.vue"

export {
  SiteHeader,
  SiteFooter,
}

const components = [
  SiteHeader,
  SiteFooter,
]
