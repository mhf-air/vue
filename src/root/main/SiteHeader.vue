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
            <span v-if="cartGoodCount === 0">购物车中还没有商品，赶紧选购吧！</span>
          </g-v>
        </div>
      </g-h>
    </g-h>
  </g-h>
  <g-h justify-content="center" class="site-header-bottom">
    <g-h justify-content="space-between" align-items="center" class="site-header-content">
      <g-h justify-content="space-between" align-items="center" class="site-header-bottom-left">
        <router-link to="" class="site-header-bottom-logo">
          <img src="/image/mi-logo.png" alt="logo" title="小米官网" />
        </router-link>
        <g-h v-for="category in categoryList">
          <router-link to="" class="site-header-bottom-left-category">{{ category.name }}</router-link>
          <g-h justify-content="center" class="site-header-bottom-left-popover-outer">
            <g-h>
              <g-v v-for="item in category.list" class="site-header-bottom-left-popover" align-items="center">
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
      </g-h>
      <g-h class="site-header-bottom-right">
        <input type="text" class="site-header-bottom-right-input" :class="{searchInputSelected}" @click="selectSearchInput" ref="searchInputSelected" />
        <div class="site-header-bottom-right-inner" v-show="!searchInputSelected">
          <router-link to="">红米5 Plus</router-link>
          <router-link to="">小米Note 3</router-link>
        </div>
        <span class="site-header-bottom-right-search el-icon-search" :class="{searchInputSelected}" @click="selectSearchInput" />
        <g-v class="search-suggestion-list" :class="{searchInputSelected}">
          <g-h v-for="item in searchSuggestionList" justify-content="space-between">
            <span>{{ item.name }}</span>
            <span class="search-suggestion-item-num">{{ "约有" + item.num + "件" }}</span>
          </g-h>
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
      searchSuggestionList: [
        { name: "小米手机6", num: "29" },
        { name: "小米手机5X", num: "8" },
        { name: "红米note 4X", num: "14" },
        { name: "红米手机4X", num: "9" },
        { name: "小米Max2", num: "5" },
        { name: "小米电视4C", num: "2" },
        { name: "电视32英寸", num: "1" },
        { name: "笔记本pro", num: "3" },
        { name: "空气净化器", num: "17" },
        { name: "净水器", num: "9" },
      ],
      categoryList: [
        {
          name: "小米手机",
          list: [
            { name: "小米MIX 2", price: "3299元起", image: "/image/mi/xiaomi/mix2320-220.png", tag: "热卖" },
            { name: "小米Note 3", price: "1999元起", image: "/image/mi/xiaomi/note2320x220.png", tag: "热卖" },
            { name: "小米6", price: "2299元起", image: "/image/mi/xiaomi/xm6-320.png", tag: "" },
            { name: "小米MAX 2", price: "1399元起", image: "/image/mi/xiaomi/max2_toubu.png", tag: "" },
            { name: "小米5X", price: "1299元起", image: "/image/mi/xiaomi/5x-2.jpg", tag: "" },
          ],
        },
        {
          name: "红米",
          list: [
            { name: "红米5", price: "799元起", image: "/image/mi/hongmi/5-320-220.png", tag: "新品" },
            { name: "红米5 Plus", price: "999元起", image: "/image/mi/hongmi/5P-320-220.png", tag: "新品" },
            { name: "红米5A", price: "599元起", image: "/image/mi/hongmi/5-320-220.png", tag: "热卖" },
            { name: "红米Note 5A标准版", price: "649元", image: "/image/mi/hongmi/3205a.png", tag: "" },
            { name: "红米Note 5A高配版", price: "799元", image: "/image/mi/hongmi/320-220.jpg", tag: "" },
            { name: "红米Note 4X", price: "999元起", image: "/image/mi/hongmi/320220note4x.jpg", tag: "" },
          ],
        },
        {
          name: "电视",
          list: [
            { name: "小米电视4A 40英寸", price: "1699元", image: "/image/mi/tv/4a40320_220png.png", tag: "新品" },
            { name: "小米电视4A 32英寸", price: "999元", image: "/image/mi/tv/xmds_55.png", tag: "热卖" },
            { name: "小米电视4A 43英寸", price: "1899元", image: "/image/mi/tv/320_43.png", tag: "热卖" },
            { name: "小米电视4A 55英寸", price: "2799元", image: "/image/mi/tv/4a55mi320_220png.png", tag: "热卖" },
            { name: "小米电视4 55英寸", price: "3999元", image: "/image/mi/tv/465.png", tag: "超薄旗舰" },
          ],
        },
        {
          name: "笔记本",
          list: [
            { name: "小米笔记本Air 12.5\"", price: "3599元", image: "/image/mi/laptop/bijiben320.jpg", tag: "热卖" },
            { name: "小米笔记本Air 13.3\"四核增强", price: "5399元", image: "/image/mi/laptop/bijiben32012.5.jpg", tag: "热卖" },
            { name: "小米笔记本Air 13.3\"独显", price: "5199元", image: "/image/mi/laptop/320x220-44.png", tag: "" },
            { name: "小米笔记本Air 13.3\"集显", price: "4599元", image: "/image/mi/laptop/320x220-44.png", tag: "" },
            { name: "小米笔记本Pro 15.6\"", price: "5599元", image: "/image/mi/laptop/320x220-44.png", tag: "" },
          ],
        },
        {
          name: "盒子",
          list: [
            { name: "小米盒子4", price: "349元", image: "/image/mi/box/mihezi.png", tag: "" },
            { name: "小米盒子4c", price: "249元", image: "/image/mi/box/mihezi.png", tag: "" },
            { name: "小米盒子3s", price: "349元", image: "/image/mi/box/mihezi.png", tag: "" },
            { name: "小米盒子3c", price: "199元", image: "/image/mi/box/mihezi.png", tag: "" },
            { name: "小米盒子3 增强版", price: "399元", image: "/image/mi/box/hezi3s.jpg", tag: "" },
            { name: "小米家庭影院", price: "2099元", image: "/image/mi/box/hezi3s.jpg", tag: "" },
          ],
        },
        {
          name: "新品",
          list: [
            { name: "米家 iHealth 体温计", price: "129元", image: "/image/mi/new-product/tiwenjixin.png", tag: "" },
            { name: "70 迈智能记录仪", price: "199元", image: "/image/mi/new-product/jiluyixin.png", tag: "" },
            { name: "TS太阳镜 旅行者款 米家定制", price: "249元", image: "/image/mi/new-product/yanjingxin.png", tag: "" },
            { name: "铜师傅好运铜葫芦", price: "29元", image: "/image/mi/new-product/huluxin.png", tag: "" },
            { name: "米家压力IH电饭煲", price: "299元", image: "/image/mi/new-product/dianciluxin.png", tag: "" },
          ],
        },
        {
          name: "路由器",
          list: [
            { name: "小米路由器 3A", price: "139元", image: "/image/mi/router/xmlyq3.png", tag: "" },
            { name: "小米路由器 HD/Pro", price: "499元", image: "/image/mi/router/xmlyq3.png", tag: "大容量" },
            { name: "小米路由器 3G", price: "249元", image: "/image/mi/router/3G.png", tag: "双千兆" },
            { name: "小米路由器 3", price: "119元", image: "/image/mi/router/320X220.jpg", tag: "双频" },
            { name: "小米路由器 3C", price: "89元", image: "/image/mi/router/3C.jpg", tag: "包邮" },
            { name: "小米WiFi放大器 Pro ", price: "79元", image: "/image/mi/router/fangdaqi320.jpg", tag: "" },
          ],
        },
        {
          name: "智能硬件",
          list: [
            { name: "小米无人机", price: "2999元", image: "/image/mi/smart-hardware/air2.jpg", tag: "航拍利器" },
            { name: "小米手环2", price: "149元", image: "/image/mi/smart-hardware/dfb.jpg", tag: "包邮" },
            { name: "小米净水器", price: "1499元", image: "/image/mi/smart-hardware/dfb.jpg", tag: "" },
            { name: "米家扫地机器人", price: "1699元", image: "/image/mi/smart-hardware/dfb.jpg", tag: "" },
            { name: "米家压力IH电饭煲", price: "999元", image: "/image/mi/smart-hardware/dfb.jpg", tag: "" },
          ],
        },
        {
          name: "服务",
          list: [
          ],
        },
        {
          name: "社区",
          list: [
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
      this.searchInputSelected = true
    },
    documentClick(e) {
      let el = this.$refs.searchInputSelected
      let target = e.target
      if (el !== target && !el.contains(target)) {
        this.searchInputSelected = false
      }
    },
  },
  created() {
    document.addEventListener("click", this.documentClick)
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick)
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
    &>.popover
      height: 8.5rem

  &>.popover
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
    &>.popover
      height: 6.4rem
  &>.popover
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

.site-header-bottom-left-category
  display: flex
  align-items: center
  padding: 0 1rem
  color: #333
  height: 4.5rem
  &:hover
    color: primary

.site-header-bottom-left>.g-h:hover
  &>.site-header-bottom-left-popover-outer
    height: 14.95rem

.site-header-bottom-logo
  background-color: primary
  /* margin-right: 1rem */

/* .site-header-bottom-right>.g-h>*
  border-color: #e0e0e0
  border-width: 1px */

.site-header-bottom-right:hover
  .site-header-bottom-right-input,
  .site-header-bottom-right-search
    &:not(.searchInputSelected)
      border-color: #999

.site-header-bottom-right
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

.search-suggestion-list
  display: none
  position: absolute
  top: 2.9rem
  left: 0
  right: 3.05rem
  border: 1px solid primary
  border-top-style: none
  >.g-h
    padding: 0.2rem 1rem
    font-size: 12px
    &:hover
      background: #eee

.search-suggestion-item-num
  color: #aaa

.searchInputSelected
  border-color: primary
  display: flex

.site-header-bottom-left-popover-outer
  height: 0
  overflow: hidden
  top: 8.5rem
  right: 0
  left: 0
  position: absolute
  box-shadow: 0 1px 4px #ccc
  background-color: #fff
  /* transition: height 0.1s */
  >.g-h
    width: 75rem

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
