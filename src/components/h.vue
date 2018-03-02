<template>
<section class="g-h" :class="styleClass">
  <slot></slot>
</section>
</template>

<script>
export default {
  name: "g-h",
  props: {
    wrap: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    alignItems: {
      type: String,
      default: "",
      validator: v => ["", "center", "flex-start", "flex-end"].indexOf(v) > -1
    },
    justifyContent: {
      type: String,
      default: "",
      validator: v => ["", "center", "flex-start", "flex-end", "space-around", "space-between"].indexOf(v) > -1
    },
  },
  computed: {
    styleClass() {
      let a = {
        "g-h-reverse": this.reverse,
        "g-flex-wrap": this.wrap,
        "g-flex-justify-content": this.justifyContent,
      }
      if (this.alignItems !== "") {
        a["g-flex-align-items-" + this.alignItems] = true
      }
      if (this.justifyContent !== "") {
        a["g-flex-justify-content-" + this.justifyContent] = true
      }
      return a
    },
  }
}
</script>
