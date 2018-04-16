<template lang="pug">
div.root.g-relative
  slot
  icon-angle-bracket.angle.angle-left.g-absolute(
      direction="left" width="20"
      @click.native="prev"
      )
  icon-angle-bracket.angle.angle-right.g-absolute(
      direction="right" width="20"
      @click.native="next"
      )
  g-h.indicator-group.g-absolute(j-c="center")
    div.indicator(
        v-for="n in pageCount"
        :key="n"
        :class="{'is-current-item': curIndicatorIndex === n}"
        v-on="{click: n => selectIndicator(null,n)}"
        )
</template>

<script>
export default {
  name: "g-carousel",
  props: {
    triggerMethod: {
      type: String,
      default: "hover", // hover, click
    }
  },
  data() {
    return {
      curIndicatorIndex: 0,
    }
  },
  computed: {
    pageCount() {
      return this.$slots.default.length
    },
  },
  watch: {
    curIndicatorIndex() {
      this.$slots.default.map((item, i) => {
        if (this.curIndicatorIndex === i + 1) {
          item.elm.style.zIndex = 2
        } else {
          item.elm.style.zIndex = 1
        }
      })
    },
  },
  methods: {
    selectIndicator(e, n) {
      console.log(e, n)
      this.curIndicatorIndex = n
    },
    prev() {
      if (this.curIndicatorIndex == 1) {
        this.curIndicatorIndex = this.pageCount
      } else {
        this.curIndicatorIndex--
      }
    },
    next() {
      if (this.curIndicatorIndex == this.pageCount) {
        this.curIndicatorIndex = 1
      } else {
        this.curIndicatorIndex++
      }
    },
  },
  created() {
    this.curIndicatorIndex = 1
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
  z-index: 3
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
  z-index: 3

.indicator
  width: 10px
  height: 10px
  background: silver
  margin: 3px
  border-radius: 50%

.is-current-item
  background: white
</style>
