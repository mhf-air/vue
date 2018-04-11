<template lang="pug">
div.app
  icon-menu.hello(width="50" height="50")
  svg.g-hidden(
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="50"
      height="50"
      )
    g(stroke="gray" stroke-width="5" fill="transparent")
      circle(cx="35" cy="35" r="30")
      line(x1="57" y1="57" x2="90" y2="90")
  
  svg.path.g-hidden(width="300" height="300")
    path(d="M 10 10 h 100 v 100 c 20 1, 10 30, -50 50 z" stroke="black" fill="transparent")
  
  svg.svg-triangle.g-hidden
    polygon(points="0 0, 100 0, 0 100" fill="cyan")

  //- 箭头
  div.pop-arrow.g-hidden

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

  //- hsl色环
  ul.hsl-color.g-hidden
    li
      span 0
      span 红
      span red
    li
      span 30
      span 橙
      span orange
    li
      span 60
      span 黄
      span yellow
    li
      span 90
      span 黄绿
      span yellow-green
    li
      span 120
      span 绿
      span green
    li
      span 150
      span 绿青
      span green-cyan
    li
      span 180
      span 青
      span cyan
    li
      span 210
      span 青蓝
      span cyan-blue
    li
      span 240
      span 蓝
      span blue
    li
      span 270
      span 紫
      span purple
    li
      span 300
      span 洋红
      span magenta
    li
      span 330
      span 洋红红
      span magenta-red

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
.hello
  // border: 1px solid
  margin: 1rem 10rem
  color: orange
  &:hover
    color: green
    background: cyan
svg
  // border: 1px solid
  margin: 1rem 10rem

.svg-triangle
  margin: 10px

.pop-arrow
  margin: 10px
  position: relative
  width: 100px
  height: 100px
  background: cyan
  box-shadow: 0 1px 5px
  &::before
    content: ""
    position: absolute
    bottom: 100%
    left: 40%
    right: 40%
    border-bottom: 10px solid cyan
    border-left: 10px solid transparent
    border-right: 10px solid transparent

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

.hsl-color
  margin-left: 500px
  border: 1px solid
  width: 300px
  &>li
    display: flex
    justify-content: space-between
    align-items: center
    >span:nth-child(1)
      width: 30%
    >span:nth-child(2)
      width: 30%
      text-align: center
    >span:nth-child(3)
      width: 40%
      text-align: right

  &>:nth-child(1)
    background: hsl(0, 100%, 50%)
  &>:nth-child(2)
    background: hsl(30, 100%, 50%)
  &>:nth-child(3)
    background: hsl(60, 100%, 50%)
  &>:nth-child(4)
    background: hsl(90, 100%, 50%)
  &>:nth-child(5)
    background: hsl(120, 100%, 50%)
  &>:nth-child(6)
    background: hsl(150, 100%, 50%)
  &>:nth-child(7)
    background: hsl(180, 100%, 50%)
  &>:nth-child(8)
    background: hsl(210, 100%, 50%)
  &>:nth-child(9)
    background: hsl(240, 100%, 50%)
  &>:nth-child(10)
    background: hsl(270, 100%, 50%)
  &>:nth-child(11)
    background: hsl(300, 100%, 50%)
  &>:nth-child(12)
    background: hsl(330, 100%, 50%)

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

</style>
