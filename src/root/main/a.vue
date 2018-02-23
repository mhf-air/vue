<template>
  <div>
    <ToolBar/>
    <!-- <Content/> -->
    <!-- <Foot/> -->
    <test/>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue"
import Content from "./Content.vue"
import Foot from "./Foot.vue"
import test from "./test.vue"

export default {
  components: {
    ToolBar, Content, Foot, test
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
