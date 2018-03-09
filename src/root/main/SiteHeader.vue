<template>
<header class="site-header">
  <g-h justify-content="center" class="site-header-top">
    <g-h justify-content="space-between" class="site-header-content">
      <g-h align-items="center" class="site-header-top-left">
        <router-link to="">小米商城</router-link>
        <router-link to="">MIUI</router-link>
        <router-link to="">IoT</router-link>
        <router-link to="">云服务</router-link>
        <router-link to="">水滴</router-link>
        <router-link to="">金融</router-link>
        <router-link to="">有品</router-link>
        <router-link to="">Select Region</router-link>
      </g-h>
      <g-h justify-content="flex-end" class="site-header-top-right">
        <div class="site-header-top-right-user">
          <span>
            {{ username }}
            <i class="el-icon-arrow-down el-icon-right"></i>
          </span>
          <div class="popover">
            <g-v>
              <router-link to="">个人中心</router-link>
              <router-link to="">评价晒单</router-link>
              <router-link to="">我的喜欢</router-link>
              <router-link to="">小米账户</router-link>
              <router-link to="">退出登录</router-link>
            </g-v>
          </div>
        </div>
        <router-link to="">消息通知</router-link>
        <router-link to="">我的订单</router-link>
        <div class="site-header-top-right-cart">
          <span>购物车({{ cartGoodCount }})</span>
          <g-v justify-content="center" align-items="center" class="popover">
            <span v-if="cartGoodCount===0">购物车中还没有商品，赶紧选购吧！</span>
          </g-v>
        </div>
      </g-h>
    </g-h>
  </g-h>
  <g-h justify-content="center" class="site-header-bottom">
    <g-h justify-content="space-between" align-items="center" class="site-header-content">
      <g-h justify-content="space-between" class="site-header-bottom-left">
        <router-link to="" class="site-header-bottom-logo">
          <img src="/image/mi-logo.png" alt="logo" title="小米官网" />
        </router-link>
        <router-link to="">小米手机</router-link>
        <router-link to="">红米</router-link>
        <router-link to="">电视</router-link>
        <router-link to="">笔记本</router-link>
        <router-link to="">盒子</router-link>
        <router-link to="">新品</router-link>
        <router-link to="">路由器</router-link>
        <router-link to="">智能硬件</router-link>
        <router-link to="">服务</router-link>
        <router-link to="">社区</router-link>
      </g-h>
      <div class="site-header-bottom-right">
        <g-h>
          <input type="text" class="site-header-bottom-right-input" :class="{searchInputSelected}" @click="selectSearchInput" />
          <div class="site-header-bottom-right-inner">
            <router-link to="">红米5 Plus</router-link>
            <router-link to="">小米Note 3</router-link>
          </div>
          <span class="site-header-bottom-right-search el-icon-search" :class="{searchInputSelected}" @click="selectSearchInput" />
        </g-h>
      </div>
    </g-h>
  </g-h>

  <g-h justify-content="center" class="site-header-bottom-left-popover-outer">
    <g-h justify-content="center">
      <g-h v-for="(category, i) in categoryList">
        <g-v v-for="(item, i) in category.list" class="site-header-bottom-left-popover" align-items="center">
          <div class="product-tag" :class="{invisible: item.tag === ''}">{{ item.tag ? item.tag : "a" }}</div>
          <router-link to="" class="product-image">
            <img v-if="item.image !== ''" :src="item.image" width="160px" />
          </router-link>
          <router-link to="" class="product-name">
            <div :class="{invisible: item.name === ''}">{{ item.name ? item.name : "a"}}</div>
          </router-link>
          <div class="product-price" :class="{invisible: item.price === ''}">{{ item.price ? item.price : "a"}}</div>
        </g-v>
      </g-h>
    </g-h>
  </g-h>
</header>
</template>

<script>
export default {
  data() {
    return {
      username: "Tom",
      searchInputSelected: false,
      cartGoodCount: 0,
      categoryList: [
        {
          name: "xiaomi",
          list: [
            { name: "小米MIX 2", price: "3299元起", image: "/image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
            { name: "小米Note 3", price: "1999元起", image: "/image/mi/xiaomi/note2320x220.png", tag: "热卖" },
            { name: "小米6", price: "2299元起", image: "/image/mi/xiaomi/xm6-320.png", tag: "" },
            { name: "小米MAX 2", price: "1399元起", image: "/image/mi/xiaomi/max2_toubu.png", tag: "" },
            { name: "小米5X", price: "1299元起", image: "/image/mi/xiaomi/5x-2.jpg", tag: "" },
          ],
        },
      ],
    }
  },
  methods: {
    showPopover(a) {
      this[a] = true
      console.log("enter")
    },
    hidePopover(a) {
      this[a] = false
    },
    selectSearchInput() {
      // this.searchInputSelected = true
      this.searchInputSelected = !this.searchInputSelected
    },
  },
}
</script>

<style lang="stylus" scoped>
/* variables */
primary = #ff6700

.site-header
  position: relative

/* top */
.site-header-top
  background-color: #363636
  color: #b0b0b0
  font-size: 12px

.site-header-content
  width: 77rem

/* top left */
.site-header-top-left
  padding: 0.7rem 0

.site-header-top-left>*
  color: #b0b0b0
  padding-right: 0.6rem
  &:hover
    color: white

.site-header-top-left>*:not(:last-child)::after
  content: " |"
  /* color: #424242 */

/* top right */
.site-header-top-right>
  display: flex
  align-items: center
  padding: 0 1rem
  color: #b0b0b0
  &:hover
    color: white

.site-header-top-right-user
  position: relative
  padding: 0 1.7rem
  &:hover
    background-color: white
    color: orange
    .popover
      height: 8.5rem

  .popover
    height: 0
    overflow: hidden
    position: absolute
    top: 2.4rem
    left: 0
    right: 0
    transition: height 0.1s
    text-align: center
    background: #fff
    z-index: 999
    box-shadow: 0 5px 10px #ccc
    &>.g-v>
      padding: 0.3rem 0
      &:hover
        background: #f5f5f5
        color: primary

.site-header-top-right-cart
  position: relative
  background: #424242
  &:hover
    color: primary
    background: #fff
    .popover
      height: 6.4rem
  .popover
    height: 0
    overflow: hidden
    position: absolute
    top: 2.4rem
    left: -12rem
    right: 0
    background: #fff
    color: #333
    box-shadow: 0 3px 5px #ccc
    z-index: 999
    transition: height 0.1s

/* bottom */
.site-header-bottom
  font-size: 16px
  padding: 1.7rem 0
  /* background: cyan */

.site-header-bottom-left>*
  display: flex
  align-items: center
  margin-right: 1rem
  color: #333
  &:hover
    color: primary

.site-header-bottom-logo
  background-color: primary

/* .site-header-bottom-right>.g-h>*
  border-color: #e0e0e0
  border-width: 1px */

.site-header-bottom-right:hover &>.g-h>
  border-color: #999

.site-header-bottom-right>.g-h
  position: relative

.site-header-bottom-right-input
  border-color: #e0e0e0
  border-width: 1px
  border-style: solid none solid solid
  padding: 0.8rem 0.5rem
  width: 13rem

.site-header-bottom-right-inner
  font-size: 12px
  position: absolute
  top: 1rem
  right: 3.3rem
  >
    margin-right: 0.2rem
    padding: 0 0.3rem
    background: #eee
    &:hover
      background: primary
      color: #fff

.site-header-bottom-right-search
  display:flex
  align-items: center
  border: 1px solid #e0e0e0
  padding: 0 1rem
  &:hover
    background-color: primary
    color: #fff

.searchInputSelected
  border-color: primary

.site-header-bottom-left-popover-outer
  width: 100%
  position: absolute
  box-shadow: 0 1px 4px #ccc
  >.g-h>.g-h
    width: 75rem
    /* background: cyan */

.site-header-bottom-left-popover
  margin: 0 1rem 2rem
  font-size: 12px
  >.product-tag
    border: 1px solid primary
    margin-bottom: 1em
    padding: 0.3em 2em
    color: primary
  >.product-image
    margin: 0 0 1rem
  >.product-name
    margin: 0.5em 0
    &:hover
      color: #6f6660
  >.product-price
    color: primary

</style>
