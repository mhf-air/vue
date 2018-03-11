<template>
<g-v>
  <g-h justify-content="center">
    <div class="section-main-product">
      <el-carousel height="28rem">
        <el-carousel-item v-for="(item, i) in mainProductList" :key="i">
          <router-link to="">
            <img :src="item.src" :alt="item.alt" />
          </router-link>
        </el-carousel-item>
      </el-carousel>

      <g-v justify-content="center" class="section-main-product-nav">
        <g-h justify-content="center" v-for="(item, i) in mainProductNavList" :key="i" class="section-main-product-nav-left">
          <g-h justify-content="space-between">
            <span>{{ item.name }}</span>
            <span>&gt;</span>
          </g-h>
        </g-h>
      </g-v>
    </div>
  </g-h>
</g-v>
</template>

<script>
export default {
  data() {
    return {
      mainProductList: [
        { src: "/image/mi/main-product/xmad_1.jpg" },
        { src: "/image/mi/main-product/xmad_2.jpg" },
        { src: "/image/mi/main-product/xmad_3.jpg" },
        { src: "/image/mi/main-product/xmad_4.jpg" },
        { src: "/image/mi/main-product/xmad_5.jpg" },
      ],
      mainProductNavList: [
        {
          name: "手机　电话卡",
          list: [
            { src: "", name: "笔记本" },
            { src: "", name: "笔记本" },
            { src: "", name: "笔记本" },
          ],
        },
        {
          name: "笔记本",
          list: [
            { src: "", name: "笔记本" },
            { src: "", name: "笔记本" },
            { src: "", name: "笔记本" },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
primary = #ff6700

.section-main-product
  position: relative
  >.el-carousel
    width: 76rem
    background: cyan

.section-main-product-nav
  position: absolute
  top: 0
  bottom: 0
  left: 0
  z-index: 2
  width: 19%
  background: rgba(0,0,0,0.6)
  font-size: 14px
  &-left
    padding: 0.7em 0
    &:hover
      background: primary
      color: #fff
    >.g-h
      width: 75%
      color: #fff
</style>
