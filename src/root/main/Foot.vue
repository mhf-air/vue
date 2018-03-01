<template>
<el-footer class="page-footer">
  <div id="footer-top">
    <div class="footer-col">
      <div>关于</div>
      <ul>
        <li>
          <router-link to="">招聘信息</router-link>
        </li>
        <li>
          <router-link to="">公司信息</router-link>
        </li>
        <li>
          <router-link to="">媒体</router-link>
        </li>
      </ul>
    </div>

    <div class="footer-col">
      <div>服务</div>
      <ul>
        <li>
          <router-link to="">到达和出发</router-link>
        </li>
        <li>
          <router-link to="">值机手续办理信息</router-link>
        </li>
        <li>
          <router-link to="">行李</router-link>
        </li>
      </ul>
    </div>

    <div class="footer-col">
      <div>客户支持</div>
      <ul>
        <li>
          <router-link to="">联系方式</router-link>
        </li>
        <li>
          <router-link to="">常见问题/帮助</router-link>
        </li>
        <li>
          <router-link to="">退款</router-link>
        </li>
      </ul>
    </div>

    <div>
      <div>电子通讯</div>
      <div>注册</div>
    </div>
  </div>

  <div id="footer-bottom">
    <span>© Swiss International Air Lines</span>
    <router-link to="">汉莎航空集团</router-link>
    <router-link to="">网站地图</router-link>
    <router-link to="">法规</router-link>
  </div>
</el-footer>
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

<style scoped>
.page-footer {
  display: flex;
  flex-flow: column;
  flex: 1 10rem;
  width: 100%;
  background-color: cyan;
}

#footer-top {
  background-color: red;
  display: flex;
  flex-flow: wrap;
}

#footer-bottom {
  background-color: yellow;
  display: flex;
  flex-flow: wrap;
}
</style>
