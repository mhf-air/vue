<template>
<el-container id="app">
  <ToolBar/>
  <!-- <Content/> -->
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
#app {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}
</style>
