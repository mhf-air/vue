<template>
<g-v wrap justify-content="center" align-items="center" class="page-footer">
  <g-h wrap justify-content="center">
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
  </g-h>

  <g-h justify-content="center" align-items="center" id="footer-bottom">
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
  </g-h>
</g-v>
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
  width: 100%;
}

.page-footer ul {
  list-style: none;
}

.footer-col {
  margin: 0 1rem;
}

.footer-col>* {
  width: 17rem;
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
  border: 1px solid #999999;
}

#footer-bottom {
  width: 100%;
  background-color: rgb(237, 236, 232);
}

#footer-bottom li {
  display: inline-block;
  margin: 0 1rem;
}
</style>
