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
import Card from "./card.vue"
import V from "./v.vue"
import H from "./h.vue"

export {
  Card,
  V,
  H,
}

const components = [
  Card,
  V,
  H,
]
