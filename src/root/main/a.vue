<template>
<el-container id="app">
  <el-header class="page-header">
    <router-link to="/login">登录</router-link>
  </el-header>

  <el-main>
  </el-main>

  <Foot/>
</el-container>
</template>

<script>
import ToolBar from "./ToolBar.vue"
import Content from "./Content.vue"
import Foot from "./Foot.vue"
import test from "./test.vue"

export default {
  components: {
    ToolBar,
    Content,
    Foot,
    test
  },
}
</script>

<style scoped>
.page-header {
  width: 100%;
  background-color: cyan;
}

#app {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}
</style>
