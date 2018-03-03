<template>
<el-header class="page-header">
  <g-h justify-content="space-around" align-items="center">
    <div id="logo">SWISS</div>
    <nav class="nav">
      <el-button @mouseenter.native="showPopover('showBook')" @mouseleave.native="hidePopover('showBook')">预定</el-button>
      <el-button @mouseenter.native="showPopover('showPrepare')" @mouseleave.native="hidePopover('showPrepare')">准备</el-button>
      <el-button @mouseenter.native="showPopover('showFly')" @mouseleave.native="hidePopover('showFly')">飞行</el-button>
      <el-button @mouseenter.native="showPopover('showExplore')" @mouseleave.native="hidePopover('showExplore')">探索</el-button>
    </nav>
    <div id="login">
      <router-link to="/login">登录</router-link>
    </div>
  </g-h>

  <g-h id="showBook" class="popover" v-show="showBook" @mouseenter.native="showPopover('showBook')" @mouseleave.native="hidePopover('showBook')">
    <g-v>
      <h3>预定航班</h3>
      <p>这次去哪里</p>
      <el-button>选择目的地</el-button>
    </g-v>
    <g-v align-items="flex-start">
      <h3>最佳优惠</h3>
      <ul>
        <li>
          <router-link to="">特价从苏黎世</router-link>
        </li>
        <li>
          <router-link to="">飞行优惠券</router-link>
        </li>
        <li>
          <router-link to="">瑞航高尔夫会员(SWISS Golf Traveller)</router-link>
        </li>
        <li>
          <router-link to="">新的欧洲收费标准</router-link>
        </li>
        <li>
          <router-link to="">航线网络</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>SWISS Choice</h3>
      <ul>
        <li>
          <router-link to="">预定座位</router-link>
        </li>
        <li>
          <router-link to="">额外行李</router-link>
        </li>
        <li>
          <router-link to="">升级预定</router-link>
        </li>
        <li>
          <router-link to="">预定惊喜</router-link>
        </li>
        <li>
          <router-link to="">免税预定</router-link>
        </li>
        <li>
          <router-link to="">SWISS Mobile</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>合作伙伴服务项目</h3>
      <ul>
        <li>
          <router-link to="">预定租车</router-link>
        </li>
        <li>
          <router-link to="">预定机场接送</router-link>
        </li>
        <li>
          <router-link to="">预定酒店</router-link>
        </li>
        <li>
          <router-link to="">预定活动</router-link>
        </li>
      </ul>
    </g-v>
    <g-v align-items="flex-start">
      <h3>企业客户</h3>
      <ul>
        <li>
          <router-link to="">商业计划</router-link>
        </li>
        <li>
          <router-link to="">团队旅行</router-link>
        </li>
        <li>
          <router-link to="">瑞航为您宣传</router-link>
        </li>
        <li>
          <router-link to="">会议和活动</router-link>
        </li>
      </ul>
    </g-v>
  </g-h>

  <g-h class="popover" v-show="showPrepare">
    <div>prepare</div>
  </g-h>
  <g-h class="popover" v-show="showFly">
    <div>fly</div>
  </g-h>
  <g-h class="popover" v-show="showExplore">
    <div>explore</div>
  </g-h>

</el-header>
</template>

<script>
export default {
  data() {
    return {
      showBook: false,
      showPrepare: false,
      showFly: false,
      showExplore: false,
    }
  },
  methods: {
    showPopover(a) {
      this[a] = true
    },
    hidePopover(a) {
      this[a] = false
    },
  },
}
</script>

<style scoped>
.page-header {
  width: 100%;
  margin-top: 2rem;
  padding: 0;
}

.page-header ul {
  list-style: none;
  padding: 0;
}

.page-header li {
  border-top: 1px solid;
  padding: 0.1rem 1rem;
}

.page-header li:last-child {
  border-bottom: 1px solid;
}

#logo {
  font-size: 2rem;
  color: #be1902;
}

.nav {
  margin-left: -30rem;
}

.nav>.el-button {
  font-size: 1.3rem;
  border-style: none;
}

.nav>.el-button:hover {
  background-color: transparent;
  color: #be1902;
}

#login {
  font-size: 1.5rem;
}

#login a:hover {
  color: #be1902;
}

.popover {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #f5f4f1;
  position: absolute;
  padding-bottom: 2rem;
}

.popover>.g-v {
  border-right: 1px solid #aaa;
  padding: 1rem 0;
}

.popover>.g-v>h3 {
  padding: 1rem;
}

#showBook .el-button {
  background-color: red;
}
</style>
