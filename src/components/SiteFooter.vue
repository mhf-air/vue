<template lang="pug">
footer
  g-h(j-c="center")
    g-v(j-c="center" class="app")
      g-h(j-c="space-around" class="service")
        g-h(j-c="center")
          router-link(to="") 预约维修服务
        div(class="vbar")
        g-h(j-c="center")
          router-link(to="") 7天无理由退货
        div(class="vbar")
        g-h(j-c="center")
          router-link(to="") 15天免费换货
        div(class="vbar")
        g-h(j-c="center")
          router-link(to="") 满150元包邮
        div(class="vbar")
        g-h(j-c="center")
          router-link(to="") 520余家售后网点

      g-h(j-c="space-around" class="bottom-nav")
        g-h(j-c="space-between")
          g-v(class="bottom-nav-main")
            div 帮助中心
            router-link(to="") 账户管理
            router-link(to="") 购物指南
            router-link(to="") 订单操作
          
          g-v(class="bottom-nav-main")
            div 服务支持
            router-link(to="") 售后政策
            router-link(to="") 自助服务
            router-link(to="") 相关下载
          
          g-v(class="bottom-nav-main")
            div 线下门店
            router-link(to="") 小米之家
            router-link(to="") 服务网点
            router-link(to="") 零售网点
          
          g-v(class="bottom-nav-main")
            div 关于小米
            router-link(to="") 了解小米
            router-link(to="") 加入小米
            router-link(to="") 联系我们
          
          g-v(class="bottom-nav-main")
            div 关注我们
            router-link(to="") 新浪微博
            router-link(to="") 小米部落
            router-link(to="") 官方微信
          
          g-v(class="bottom-nav-main")
            div 特色服务
            router-link(to="") Ｆ码通道
            router-link(to="") 礼物码
            router-link(to="") 防伪查询
        
        div(class="vbar")
        g-v(a-i="center")
          div(class="nav-phone") 400-100-5678
          div 周一至周日 8:00-18:00
          div (仅收市话费)
          router-link(to="") 在线客服

      g-h(j-c="space-between")
        g-h
          router-link(to="" class="bottom-logo")
            img(src="/image/mi-logo.png" alt="logo")
          
          g-v(class="bottom-logo-nav")
            g-h(class="bottom-logo-nav-first")
              router-link(to="") 小米商城
              div(class="vbar")
              router-link(to="") MIUI
              div(class="vbar")
              router-link(to="") 米家
              div(class="vbar")
              router-link(to="") 米聊
              div(class="vbar")
              router-link(to="") 多看
              div(class="vbar")
              router-link(to="") 路由器
              div(class="vbar")
              router-link(to="") 米粉卡
              div(class="vbar")
              router-link(to="") 小米天猫店
              div(class="vbar")
              router-link(to="") 隐私政策
              div(class="vbar")
              router-link(to="") 问题反馈
              div(class="vbar")
              router-link(to="") Select Region
            
            g-h(class="bottom-logo-nav-second")
              | ©
              router-link(to="") mi.com
              span 京ICP证110507号
              router-link(to="") 京ICP备10046444号
              router-link(to="") 京公网安备11010802020134号
              router-link(to="") 京网文[2014]0059-0009号
            
            div 违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
        
        g-h(a-i="center")
          router-link(to="")
            img(src="/image/mi/site/truste.png" width="100px")
          
          router-link(to="")
            img(src="/image/mi/site/v-logo-1.png")
          
          router-link(to="")
            img(src="/image/mi/site/v-logo-2.png")
          
          router-link(to="")
            img(src="/image/mi/site/v-logo-3.png")
          
          router-link(to="")
            img(src="/image/mi/site/v-logo-4.png")
      
      g-h(j-c="center" class="slogan") 探索黑科技，小米为发烧而生！

</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      age: 20,
    }
  },
}
</script>

<style lang="stylus" scoped>
primary = #ff6700

.app
  width: 77rem

.service
  border-bottom: 1px solid #ccc
  color: #616161
  >.g-h
    padding: 2em
    >.router-link-active:hover
      color: primary
  >.vbar
    width: 1px
    background: #ccc
    margin: 1.7rem 0

.bottom-nav
  padding: 2rem 0
  margin-bottom: 2rem
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
      font-size: 12px
      color: primary
      border: 1px solid primary
      padding: 0.3em 3em
      margin-top: 1em
      &:hover
        color: white
        background-color: primary

.bottom-nav-main
  margin: 0 2.77rem
  >div
    font-size: 14px
    padding: 0 0 1em 0
    color: #424242
  >.router-link-active
    font-size: 12px
    padding: 0.3em 0
    color: #757575
    &:hover
      color: primary

.bottom-logo
  background-color: primary
  margin-right: 0.6rem

.bottom-logo-nav
  font-size: 12px
  color: #aaa
  &-first
    >.router-link-active:hover
      color: primary
    >.vbar
      width: 1px
      margin: 0 4px
      background: #ccc
  &-second>*
    margin-right: 7px
    color: #aaa
    .router-link-active:hover
      color: primary

.slogan
  font-size: 20px
  color: #aaa
  padding: 1.5em 0
</style>
