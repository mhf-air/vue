<template>
<footer>
  <g-h justify-content="center">
    <g-v justify-content="center" class="site-footer">
      <g-h justify-content="space-around" class="site-footer-service">
        <g-h justify-content="center">
          <router-link to="">预约维修服务</router-link>
        </g-h>
        <div class="vbar" />
        <g-h justify-content="center">
          <router-link to="">7天无理由退货</router-link>
        </g-h>
        <div class="vbar" />
        <g-h justify-content="center">
          <router-link to="">15天免费换货</router-link>
        </g-h>
        <div class="vbar" />
        <g-h justify-content="center">
          <router-link to="">满150元包邮</router-link>
        </g-h>
        <div class="vbar" />
        <g-h justify-content="center">
          <router-link to="">520余家售后网点</router-link>
        </g-h>
      </g-h>

      <g-h justify-content="space-between" class="site-footer-bottom-nav">
        <g-h>
          a
        </g-h>
        <div class="vbar" />
        <g-v align-items="center">
          <div class="nav-phone">400-100-5678</div>
          <div>周一至周日 8:00-18:00</div>
          <div>(仅收市话费)</div>
          <router-link to="">在线客服</router-link>
        </g-v>
      </g-h>

      <g-h justify-content="space-between">
        <g-h>
          <router-link to="" class="site-footer-bottom-logo">
            <img src="/image/mi-logo.png" alt="logo" />
          </router-link>
          <g-v class="site-footer-bottom-logo-nav">
            <g-h class="site-footer-bottom-logo-nav-first">
              <router-link to="">小米商城</router-link>
              <div class="vbar" />
              <router-link to="">MIUI</router-link>
              <div class="vbar" />
              <router-link to="">米家</router-link>
              <div class="vbar" />
              <router-link to="">米聊</router-link>
              <div class="vbar" />
              <router-link to="">多看</router-link>
              <div class="vbar" />
              <router-link to="">路由器</router-link>
              <div class="vbar" />
              <router-link to="">米粉卡</router-link>
              <div class="vbar" />
              <router-link to="">小米天猫店</router-link>
              <div class="vbar" />
              <router-link to="">隐私政策</router-link>
              <div class="vbar" />
              <router-link to="">问题反馈</router-link>
              <div class="vbar" />
              <router-link to="">Select Region</router-link>
            </g-h>
            <g-h class="site-footer-bottom-logo-nav-second">
              ©
              <router-link to="">mi.com</router-link>
              <span>京ICP证110507号</span>
              <router-link to="">京ICP备10046444号</router-link>
              <router-link to="">京公网安备11010802020134号</router-link>
              <router-link to="">京网文[2014]0059-0009号</router-link>
            </g-h>
            <div>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</div>
          </g-v>
        </g-h>
        <g-h align-items="center">
          <router-link to="">
            <img src="/image/mi/site/truste.png" width="100px">
          </router-link>
          <router-link to="">
            <img src="/image/mi/site/v-logo-1.png">
          </router-link>
          <router-link to="">
            <img src="/image/mi/site/v-logo-2.png">
          </router-link>
          <router-link to="">
            <img src="/image/mi/site/v-logo-3.png">
          </router-link>
          <router-link to="">
            <img src="/image/mi/site/v-logo-4.png">
          </router-link>
        </g-h>
      </g-h>
      <g-h justify-content="center" class="site-footer-slogan">
        探索黑科技，小米为发烧而生！
      </g-h>
    </g-v>
  </g-h>
</footer>
</template>

<script>
export default {
  data() {
    return {
      age: 20,
    }
  },
}
</script>

<style lang="stylus" scoped>
/* variables */
primary = #ff6700

.site-footer
  /* background: cyan */
  width: 77rem

.site-footer-service
  border-bottom: 1px solid #ccc
  color: #666
  >.g-h
    padding: 2em
    >.router-link-active:hover
      color: primary
  >.vbar
    width: 1px
    background: #ccc
    margin: 1.7rem 0

.site-footer-bottom-nav
  padding: 2rem 0
  >.vbar
    width: 1px
    background: #ccc
  >.g-v
    font-size: 12px
    color: #666
    >.nav-phone
      font-size: 24px
      color: primary
    >.router-link-active
      font-size: 16px
      color: primary
      border: 1px solid primary
      padding: 0.3em 2em
      margin-top: 1em

.site-footer-bottom-logo
  background-color: primary
  margin-right: 0.6rem

.site-footer-bottom-logo-nav
  font-size: 12px
  color: #aaa
  &-first>
    margin-right: 7px
    .router-link-active:hover
      color: primary
    >.vbar
      width: 1px
      background: #ccc
  &-second>
    margin-right: 7px
    color: #aaa
    .router-link-active:hover
      color: primary

.site-footer-slogan
  font-size: 20px
  color: #aaa
  padding: 1.5em 0
</style>
