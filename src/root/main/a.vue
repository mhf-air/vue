<template>
<div id="app">
  <ToolBar/>
  <!-- <Content/> -->
  <!-- <Foot/> -->
</div>
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
