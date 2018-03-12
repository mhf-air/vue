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
          <div class="section-main-product-nav-popover">
            <g-h wrap>
              <div v-for="(popItem, j) in item.list" :key="j" class="section-main-product-nav-popover-popitem">
                <router-link to="popItem.link">
                  <img :src="popItem.src" />
                  <span>{{ popItem.name }}</span>
                </router-link>
              </div>
            </g-h>
          </div>
        </g-h>
      </g-v>
    </div>
  </g-h>
</g-v>
</template>

<script>
let mainProductNavList_less = [
  { src: "", to: "", name: "小米Note 3" },
  { src: "", to: "", name: "小米Mix 2" },
  { src: "", to: "", name: "小米6" },
  { src: "", to: "", name: "小米5X" },
  { src: "", to: "", name: "小米Max 2" },
  { src: "", to: "", name: "红米5 Plus" },
  { src: "", to: "", name: "红米5" },
  { src: "", to: "", name: "红米5A" },
  { src: "", to: "", name: "红米Note 5A" },
  { src: "", to: "", name: "红米Note 4X" },
  { src: "", to: "", name: "红米4A" },
  { src: "", to: "", name: "移动4G+专区" },
  { src: "", to: "", name: "对比手机" },
  { src: "", to: "", name: "米粉卡 日租卡" },
  { src: "", to: "", name: "小米移动 电话卡" },
  { src: "", to: "", name: "手机上门维修" },
]

let mainProductNavList_more = [
  { src: "", to: "", name: "红米4A" },
  { src: "", to: "", name: "移动4G+专区" },
  { src: "", to: "", name: "对比手机" },
  { src: "", to: "", name: "米粉卡 日租卡" },
  { src: "", to: "", name: "小米移动 电话卡" },
  { src: "", to: "", name: "手机上门维修" },
  { src: "", to: "", name: "小米Note 3" },
  { src: "", to: "", name: "小米Mix 2" },
  { src: "", to: "", name: "小米6" },
  { src: "", to: "", name: "小米5X" },
  { src: "", to: "", name: "小米Max 2" },
  { src: "", to: "", name: "红米5 Plus" },
  { src: "", to: "", name: "红米5" },
  { src: "", to: "", name: "红米5A" },
  { src: "", to: "", name: "红米Note 5A" },
  { src: "", to: "", name: "红米Note 4X" },
  { src: "", to: "", name: "红米4A" },
  { src: "", to: "", name: "移动4G+专区" },
  { src: "", to: "", name: "对比手机" },
  { src: "", to: "", name: "米粉卡 日租卡" },
  { src: "", to: "", name: "小米移动 电话卡" },
  { src: "", to: "", name: "手机上门维修" },
]

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
          list: mainProductNavList_less,
        },
        {
          name: "电视 盒子",
          list: mainProductNavList_more,
        },
        {
          name: "笔记本",
          list: mainProductNavList_less,
        },
        {
          name: "智能　家电",
          list: mainProductNavList_more,
        },
        {
          name: "健康　家居",
          list: mainProductNavList_less,
        },
        {
          name: "出行　儿童",
          list: mainProductNavList_more,
        },
        {
          name: "路由器　手机配件",
          list: mainProductNavList_less,
        },
        {
          name: "移动电源　插线板",
          list: mainProductNavList_more,
        },
        {
          name: "耳机　音箱",
          list: mainProductNavList_less,
        },
        {
          name: "生活　米兔",
          list: mainProductNavList_more,
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
      >.section-main-product-nav-popover
        display: flex
    >.g-h
      width: 75%
      color: #fff
  &-popover
    display: none
    position: absolute
    top: 0
    right: -62rem
    bottom: 0
    left: 100%
    z-index: 3
    &>.g-h
      writing-mode: vertical-lr
      background: #fff
      box-shadow: 0 3px 10px #ccc
    &-popitem
      padding: 1.988em 3em
      color: #000
      writing-mode: horizontal-tb
      span:hover
        color: primary
</style>
