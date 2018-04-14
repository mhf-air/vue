<template lang="pug">
g-v(a-i="center")
  div.main-product.g-relative
    el-carousel(height="28rem")
      el-carousel-item(v-for="(item, i) in mainProductList" :key="i")
        router-link(to="")
          img(:src="item.src" :alt="item.alt")
    g-v.main-product-nav.g-absolute(j-c="center")
      g-h.main-product-nav-left(
          j-c="center"
          v-for="(item, i) in mainProductNavList" :key="i"
          )
        g-h(j-c="space-between")
          span {{ item.name }}
          span &gt;
        div.main-product-nav-popover.g-absolute
          g-h(wrap)
            div.main-product-nav-popover-popitem(
                v-for="(popItem, j) in item.list" :key="j"
                )
              router-link(to="popItem.link")
                img(:src="popItem.link")
                span {{ popItem.name }}

  //- home appliances
  div.home-appliances.g-page-center
    g-h.home-appliances-top(j-c="space-between" a-i="center")
      div 家电
      g-h.home-appliances-title
        span(
            :class="{'selected-home-appliances': selectedHomeAppliances === 0}"
            @mouseenter="switctSelectedHomeAppliances(0)"
            ) 热门
        span(
            :class="{'selected-home-appliances': selectedHomeAppliances === 1}"
            @mouseenter="switctSelectedHomeAppliances(1)"
            ) 电视影音
        span(
            :class="{'selected-home-appliances': selectedHomeAppliances === 2}"
            @mouseenter="switctSelectedHomeAppliances(2)"
            ) 电脑
        span(
            :class="{'selected-home-appliances': selectedHomeAppliances === 3}"
            @mouseenter="switctSelectedHomeAppliances(3)"
            ) 家居
    g-h
      g-v.home-appliances-left
        img(src="image/mi/home-appliances/robot.jpg")
        img(src="image/mi/home-appliances/dianfanbao.jpg")
      g-v.home-appliances-right(j-c="space-between")
        g-h(j-c="space-between")
          g-v.g-relative(
              j-c="center"
              a-i="center"
              v-for="(item, i) in homeAppliancesList[selectedHomeAppliances].slice(0, 4)"
              :key="i"
              class="home-appliances-right-card home-appliances-right-card-big"
             )
            img(:src="item.image")
            div {{ item.name }}
            g-v.popover.g-absolute
              div 很喜欢，外形就是我喜欢的风格, 做工很精细
              div 来自于 后来的情感　的评价
        g-h(j-c="space-between")
          g-v(
              j-c="center"
              a-i="center"
              v-for="(item, i) in homeAppliancesList[selectedHomeAppliances].slice(4, 7)"
              :key="i"
              class="home-appliances-right-card home-appliances-right-card-big"
              )
            img(:src="item.image")
            div {{ item.name }}
            g-v.popover.g-absolute
              div 很喜欢，外形就是我喜欢的风格, 做工很精细
              div 来自于 后来的情感　的评价
          g-v.home-appliances-right-bottom
            g-h(j-c="center" a-i="center") 小白摄像机
            g-h(j-c="center" a-i="center") 浏览更多

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
        { src: "image/mi/main-product/xmad_1.jpg" },
        { src: "image/mi/main-product/xmad_2.jpg" },
        { src: "image/mi/main-product/xmad_3.jpg" },
        { src: "image/mi/main-product/xmad_4.jpg" },
        { src: "image/mi/main-product/xmad_5.jpg" },
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
      selectedHomeAppliances: 0,
      homeAppliancesList: [
        [
          { name: "小米MIX 2", price: "3299元起", image: "image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
          { name: "小米Note 3", price: "1999元起", image: "image/mi/xiaomi/note2320x220.png", tag: "热卖" },
          { name: "小米6", price: "2299元起", image: "image/mi/xiaomi/xm6-320.png", tag: "" },
          { name: "小米MAX 2", price: "1399元起", image: "image/mi/xiaomi/max2_toubu.png", tag: "" },
          { name: "小米5X", price: "1299元起", image: "image/mi/xiaomi/5x-2.jpg", tag: "" },
          { name: "红米5", price: "799元起", image: "image/mi/hongmi/5-320-220.png", tag: "新品" },
          { name: "红米5 Plus", price: "999元起", image: "image/mi/hongmi/5P-320-220.png", tag: "新品" },
          { name: "红米5A", price: "599元起", image: "image/mi/hongmi/5-320-220.png", tag: "热卖" },
        ],
        [
          { name: "小米MAX 2", price: "1399元起", image: "image/mi/xiaomi/max2_toubu.png", tag: "" },
          { name: "小米5X", price: "1299元起", image: "image/mi/xiaomi/5x-2.jpg", tag: "" },
          { name: "红米5", price: "799元起", image: "image/mi/hongmi/5-320-220.png", tag: "新品" },
          { name: "红米5 Plus", price: "999元起", image: "image/mi/hongmi/5P-320-220.png", tag: "新品" },
          { name: "红米5A", price: "599元起", image: "image/mi/hongmi/5-320-220.png", tag: "热卖" },
          { name: "小米MIX 2", price: "3299元起", image: "image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
          { name: "小米Note 3", price: "1999元起", image: "image/mi/xiaomi/note2320x220.png", tag: "热卖" },
          { name: "小米6", price: "2299元起", image: "image/mi/xiaomi/xm6-320.png", tag: "" },
        ],
        [
          { name: "小米6", price: "2299元起", image: "image/mi/xiaomi/xm6-320.png", tag: "" },
          { name: "小米MAX 2", price: "1399元起", image: "image/mi/xiaomi/max2_toubu.png", tag: "" },
          { name: "小米5X", price: "1299元起", image: "image/mi/xiaomi/5x-2.jpg", tag: "" },
          { name: "红米5", price: "799元起", image: "image/mi/hongmi/5-320-220.png", tag: "新品" },
          { name: "红米5 Plus", price: "999元起", image: "image/mi/hongmi/5P-320-220.png", tag: "新品" },
          { name: "红米5A", price: "599元起", image: "image/mi/hongmi/5-320-220.png", tag: "热卖" },
          { name: "小米MIX 2", price: "3299元起", image: "image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
          { name: "小米Note 3", price: "1999元起", image: "image/mi/xiaomi/note2320x220.png", tag: "热卖" },
        ],
        [
          { name: "小米MAX 2", price: "1399元起", image: "image/mi/xiaomi/max2_toubu.png", tag: "" },
          { name: "小米5X", price: "1299元起", image: "image/mi/xiaomi/5x-2.jpg", tag: "" },
          { name: "小米Note 3", price: "1999元起", image: "image/mi/xiaomi/note2320x220.png", tag: "热卖" },
          { name: "小米6", price: "2299元起", image: "image/mi/xiaomi/xm6-320.png", tag: "" },
          { name: "红米5", price: "799元起", image: "image/mi/hongmi/5-320-220.png", tag: "新品" },
          { name: "红米5 Plus", price: "999元起", image: "image/mi/hongmi/5P-320-220.png", tag: "新品" },
          { name: "红米5A", price: "599元起", image: "image/mi/hongmi/5-320-220.png", tag: "热卖" },
          { name: "小米MIX 2", price: "3299元起", image: "image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
        ],
      ],
    }
  },
  methods: {
    switctSelectedHomeAppliances(i) {
      this.selectedHomeAppliances = i
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../common.styl"

.main-product>.el-carousel
  width: 76rem

.main-product-nav
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
      >.main-product-nav-popover
        display: flex
    >.g-h
      width: 75%
      color: #fff
  &-popover
    display: none
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

.home-appliances
  background: #f5f5f5
  margin-top: 2rem
  padding-bottom: 2rem
  &-top>div
    font-size: 22px
    font-weight: 200
    padding: 1em 0 0
    color: #333
  &-title>span
    font-size: 16px
    margin-left: 1.6rem
  &-left>img
    width: 14rem
    margin: 1rem 1rem 0 0
    &:hover
      margin: 14px 0 2px
      box-shadow: 0 7px 30px #999
  &-right
    flex: 1
    margin-top: 1rem
    &-card
      position: relative
      background: #fff
      width: 14.7rem
      &:hover
        margin: -4px 0
        box-shadow: 0 5px 10px #ccc
        >.popover
          transform: scale(1, 1)
      &-big
        height: 18rem
      >img
        width: 14rem
      >.popover
        right: 0
        bottom: 0
        left: 0
        padding: 1em 2em
        background: primary
        font-size: 12px
        color: #fff
        transform: scale(1, 0)
        transform-origin: center bottom
        transition: transform 100ms ease-in-out


.home-appliances-right-bottom
  width: 14.7rem
  height: 18rem
  background: #f5f5f5
  >.g-h
    flex: 1
    background: #fff
  >:first-child
    margin-bottom: 0.3em
    &:hover
      margin: -5px 0 3px
      box-shadow: 0 5px 10px #ccc
  >:last-child
    margin-top: 0.3em
    &:hover
      margin: 5px 0 0px
      box-shadow: 0 5px 10px #ccc

.selected-home-appliances
  color: primary
  border-bottom: 1px solid primary

+sm()
  .main-product
    display: none

  .home-appliances
    display: flex

</style>
