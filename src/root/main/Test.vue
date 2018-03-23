<template lang="pug">
div.app

  //- 缺角效果
  g-h.cutout-corner.g-hidden(j-c="center")
    g-h.test(j-c="center" a-i="center") nice
  
  //- 用border-radius可以实现多种圆角效果
  g-h.radius.g-hidden(j-c="center")
    g-h.test(j-c="center" a-i="center") nice

  //- 纯css实现平行四边形
  g-h.parallelogram.g-hidden(j-c="center")
    div.test hello
    div.test hello
    div.test hello

  //- 用float布局
  div.float.g-hidden
    div.float-main.g-clearfix
      div.float-left
        span 小米商城
        span MIUI
        span IoT
      div.float-right
        span MIUI
        span IoT
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.cutout-corner
  >.test
    background: cyan
    width: 100px
    height: 100px

    // 8个缺角
    clip-path: polygon(
      20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px),
      calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px
    )

    // 箭头
    // clip-path: polygon(
      // 0 0, 80% 0, 100% 50%, 80% 100%, 0 100%
    // )

.radius
  >.test
    background: cyan
    width: 100px
    height: 100px
    border-radius: 50% 50%

.parallelogram
  >.test
    position: relative
    display: flex
    justify-content: center
    align-items: center
    width: 5rem
    height: 5rem
    &::after
      content: ""
      position: absolute
      top: 0
      bottom: 0
      left: 0
      right: 0
      z-index: -1
      background: cyan
      transform: skew(-45deg)
      // transform: rotate(45deg)

.float
  background: green
  &-main
    background: cyan
    width: 77rem
    margin: 0 auto

  &-left
    float: left
    >span
      margin-right: 1rem

  &-right
    float: right
    >span
      margin-left: 1rem

</style>
