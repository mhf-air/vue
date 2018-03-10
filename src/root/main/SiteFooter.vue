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

      <g-h>
      </g-h>

      <g-h justify-content="space-between">
        <g-h>
          <router-link to="" class="site-footer-bottom-logo">
            <img src="/image/mi-logo.png" alt="logo" title="小米官网" />
          </router-link>
          <g-v class="site-footer-bottom-logo-nav">
            <g-h>
              top
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
        <g-h>
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

.site-footer-bottom-logo
  background-color: primary
  margin-right: 0.6rem

.site-footer-bottom-logo-nav
  font-size: 12px
  color: #aaa
  &-second>
    margin-right: 7px
    color: #aaa
  &-second>.router-link-active:hover
    color: primary

.site-footer-slogan
  font-size: 20px
  color: #aaa
  padding: 1.5em 0
</style>
