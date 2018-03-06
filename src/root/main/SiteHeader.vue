<template>
<header id="site-header">
  <g-h justify-content="space-between" id="site-header-top">
    <g-h align-items="center" id="site-header-top-left">
      <router-link to="">小米商城</router-link>
      <router-link to="">MIUI</router-link>
      <router-link to="">IoT</router-link>
      <router-link to="">云服务</router-link>
      <router-link to="">水滴</router-link>
      <router-link to="">金融</router-link>
      <router-link to="">有品</router-link>
      <router-link to="">Select Region</router-link>
    </g-h>
    <g-h justify-content="flex-end" id="site-header-top-right">
      <g-h align-items="center" id="site-header-top-right-user">
        <el-dropdown placement="bottom">
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
        </el-dropdown>
      </g-h>
      <g-h align-items="center">
        <router-link to="">消息通知</router-link>
      </g-h>
      <g-h align-items="center">
        <router-link to="">我的订单</router-link>
      </g-h>
    </g-h>
  </g-h>
  <div id="site-header-bottom">
    下
  </div>
</header>
</template>

<script>
export default {
  data() {
    return {
      username: "Tom",
    }
  },
  methods: {
    hidePopover(a) {
      this[a] = false
    },
  },
}
</script>

<style scoped>
/* top */

#site-header-top {
  background-color: #363636;
  color: #b0b0b0;
  padding: 0 19.3rem;
  font-size: 12px;
}

/* top left */

#site-header-top-left {
  padding: 0.4rem 0;
}

#site-header-top-left>* {
  color: #b0b0b0;
  padding-right: 0.6rem;
}

#site-header-top-left>*:hover {
  color: white;
}

#site-header-top-left>*:not(:last-child)::after {
  content: " |";
  /* color: #424242; */
}

/* top right */

#site-header-top-right {
  /* background: cyan; */
}

#site-header-top-right>.g-h>* {
  padding: 0 1rem;
  color: #b0b0b0;
}

#site-header-top-right>.g-h>*:hover {
  color: white;
}

#site-header-top-right-user {
  padding: 0 0.66rem;
}

#site-header-top-right-user:hover {
  background-color: white;
}

#site-header-top-right-user:hover span {
  color: orange;
}

/* bottom */

#site-header-bottom {
  padding: 0 19.3rem;
  font-size: 16px;
}
</style>
