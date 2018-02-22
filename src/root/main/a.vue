<template>
  <div>
    <ToolBar/>
    <Content/>
    <!-- <Foot/> -->
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue"
import Content from "./Content.vue"
import Foot from "./Foot.vue"

export default {
  components: {
    ToolBar, Content, Foot
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
