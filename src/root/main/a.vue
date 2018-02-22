<template>
  <div>
    <ToolBar/>
    <!-- <Content/> -->
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue"
import Content from "./Content.vue"

export default {
  components: {
    ToolBar, Content,
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
