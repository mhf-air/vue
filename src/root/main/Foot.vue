<template>
<el-footer class="page-footer">
  <nav id="footer-top">
    <div class="footer-col">
      <h3>关于</h3>
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
      <h3>服务</h3>
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
      <h3>客户支持</h3>
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

    <div class="footer-col">
      <h3>电子通讯</h3>
      <div id="register">
        <router-link to="">注册</router-link>
      </div>
    </div>
  </nav>

  <div id="footer-bottom">
    <span>© Swiss International Air Lines</span>
    <ul>
      <li>
        <router-link to="">汉莎航空集团</router-link>
      </li>
      <li>
        <router-link to="">网站地图</router-link>
      </li>
      <li>
        <router-link to="">法规</router-link>
      </li>
    </ul>
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
  flex-flow: wrap;
  flex: 1 20rem;
  justify-content: center;
  width: 100%;
  padding: 0;
  /* background-color: cyan; */
}

.page-footer ul {
  list-style: none;
}

#footer-top {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.footer-col {
  margin-right: 1rem;
}

.footer-col>ul {
  width: 20rem;
  padding: 0;
}

.footer-col>ul>li {
  width: 100%;
  padding: 0.3rem 0;
  border-top: 1px solid #d6d3cc;
}

.footer-col>ul:last-child {
  border-bottom: 1px solid #d6d3cc;
}

#register {
  padding: 0.5rem;
  width: 15rem;
  border: 1px solid #999999;
}

#footer-bottom {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(237, 236, 232);
}

#footer-bottom>ul>li {
  display: inline-block;
  margin-right: 1rem;
}
</style>
