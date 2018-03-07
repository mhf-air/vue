<template>
<header class="site-header">
  <g-h justify-content="space-between" class="site-header-top">
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
          <i class=" el-icon-arrow-down el-icon-right "></i>
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
  <div class="site-header-bottom ">
    下
  </div>
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

<style scoped>
/* top */

.site-header-top {
  background-color: #363636;
  color: #b0b0b0;
  padding: 0 19.3rem;
  font-size: 12px;
}

/* top left */

.site-header-top-left {
  padding: 0.4rem 0;
}

.site-header-top-left>* {
  color: #b0b0b0;
  padding-right: 0.6rem;
}

.site-header-top-left>*:hover {
  color: white;
}

.site-header-top-left>*:not(:last-child)::after {
  content: " |";
  /* color: #424242; */
}

/* top right */

.site-header-top-right {
  /* background: cyan; */
}

.site-header-top-right>* {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  color: #b0b0b0;
}

.site-header-top-right>*:hover {
  color: white;
}

.site-header-top-right-user {
  padding: 0 1.7rem;
  box-shadow: 0 0 1px black;
}

.site-header-top-right-user:hover {
  background-color: white;
  color: orange;
}

/* popover */

.popover {
  position: absolute;
  top: 2rem;
  color: black;
  display: none;
  /* background: cyan; */
  transition: height 1s;
  width: 5.7rem;
  margin-left: -1.7rem;
  text-align: center;
}

.popover>* {
  margin: 0.7rem 0;
}

.site-header-top-right-user:hover .popover {
  display: block;
}

/* bottom */

.site-header-bottom {
  padding: 0 19.3rem;
  font-size: 16px;
}
</style>
