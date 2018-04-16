<template lang="pug">
div.root.g-relative
  slot
  icon-angle-bracket.angle.angle-left.g-absolute(direction="left" width="20")
  icon-angle-bracket.angle.angle-right.g-absolute(direction="right" width="20")
  g-h.indicator-group.g-absolute(j-c="center")
    div.indicator(
        v-for="n in pageCount"
        :key="n"
        :class="{'is-current-item': curIndicatorIndex === n}"
        @click="click"
        )
</template>

<script>
export default {
  name: "g-carousel",
  props: {
    theme: {
      type: String,
      default: "light", // light, dark
    }
  },
  data() {
    return {
      curIndicatorIndex: 1,
    }
  },
  computed: {
    pageCount() {
      return this.$slots.default.length
    },
  },
  methods: {
    click(e){
      console.log(e)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../common.styl"

.root
  width: 17rem
  height: 5rem

.angle
  top: 50%
  transform: translateY(-50%) 
  color: silver
  &:hover
    color: black

  &-left
    left: 0
  &-right
    right: 0

.indicator-group
  bottom: 3px
  left: 0
  right: 0

.indicator
  width: 1rem
  height: 1rem
  background: silver
  margin: 3px
  border-radius: 50%

.is-current-item
  background: white
</style>
