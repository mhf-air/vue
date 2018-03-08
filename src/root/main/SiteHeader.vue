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
        <!-- <el-dropdown placement="bottom" class="site-header-top-right-user">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-arrow-down el-icon-right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>评价晒单</el-dropdown-item>
          <el-dropdown-item>我的喜欢</el-dropdown-item>
          <el-dropdown-item>小米账户</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown> -->
        <div class="site-header-top-right-user">
          <span>
          {{ username }}
          <i class="el-icon-arrow-down el-icon-right"></i>
        </span>
          <div class="popover">
            <div>个人中心</div>
            <div>评价晒单</div>
            <div>我的喜欢</div>
            <div>小米账户</div>
            <div>退出登录</div>
          </div>
        </div>
        <router-link to="">消息通知</router-link>
        <router-link to="">我的订单</router-link>
      </g-h>
    </g-h>
  </g-h>
  <g-h justify-content="center" class="site-header-bottom">
    <g-h justify-content="space-between" align-items="center" class="site-header-content">
      <g-h justify-content="space-between" class="site-header-bottom-left">
        <router-link to="" class="site-header-bottom-logo"></router-link>
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
          <input type="text" class="site-header-bottom-right-input" />
          <span class="site-header-bottom-right-search">search</span>
        </g-h>
        <!-- <el-input class="site-header-bottom-right-input">
          <el-button slot="append" icon="el-icon-search" />
        </el-input> -->
      </div>
    </g-h>
  </g-h>
</header>
</template>

<script>
export default {
  data() {
    return {
      username: "Tom",
      popUserInfo: false,
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
  },
}
</script>

<style lang="stylus" scoped>
/* top */
.site-header-top
  background-color: #363636
  color: #b0b0b0
  font-size: 12px

.site-header-content
  width: 77rem

/* top left */
.site-header-top-left
  padding: 0.4rem 0

.site-header-top-left>*
  color: #b0b0b0
  padding-right: 0.6rem
  &:hover
    color: white

.site-header-top-left>*:not(:last-child)::after
  content: " |"
  /* color: #424242 */

/* top right */
.site-header-top-right
  /* background: cyan */

.site-header-top-right>*
  display: flex
  align-items: center
  padding: 0 1rem
  color: #b0b0b0
  &:hover
    color: white

.site-header-top-right-user
  padding: 0 1.7rem
  box-shadow: 0 0 1px black
  &:hover
    background-color: white
    color: orange

/* popover */
.popover
  position: absolute
  top: 2rem
  color: black
  display: none
  /* background: cyan */
  transition: height 1s
  width: 5.7rem
  margin-left: -1.7rem
  text-align: center

.popover>*
  margin: 0.7rem 0

.site-header-top-right-user:hover .popover
  display: block

/* bottom */
.site-header-bottom
  font-size: 16px
  padding: 2.3rem 0
  /* background: cyan */

.site-header-bottom-left>*
  margin-right: 1rem
  color: #333
  &:hover
    color: #ff6700

.site-header-bottom-logo
  background: url("/image/search.png")

.site-header-bottom-right
  &:hover
    /* border: 1px solid */

.site-header-bottom-right-input
  /* background-color: white */
  padding: 0.9rem 0;
  border: 1px solid

.site-header-bottom-right-search
  background: no-repeat url("/image/search.png")
  /* border: 1px solid */
</style>
