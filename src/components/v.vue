<template lang="pug">
section(class="g-v" :class="styleClass")
  slot
</template>

<script>
export default {
  name: "g-v",
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
      validator: v => ["", "center", "flex-start", "flex-end", "baseline", "stretch"].indexOf(v) > -1
    },
    alignContent: {
      type: String,
      default: "",
      validator: v => ["", "center", "flex-start", "flex-end", "space-around", "space-between", "stretch"].indexOf(v) > -1
    },
    justifyContent: {
      type: String,
      default: "",
      validator: v => ["", "center", "flex-start", "flex-end", "space-around", "space-between", "space-evenly"].indexOf(v) > -1
    },
  },
  computed: {
    styleClass() {
      let a = {
        "g-v-reverse": this.reverse,
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

<style lang="stylus" scoped>
.g-v
  display: flex
  flex-direction: column

.g-v-reverse
  flex-direction: column-reverse
</style>
