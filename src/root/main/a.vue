<template>
<div>
  <SiteHeader/>
  <!-- <Test/> -->
  <Content/>
  <SiteFooter/>
</div>
</template>

<script>
import Content from "./Content.vue"
import Test from "./Test.vue"

export default {
  components: {
    Content,
    Test,
  },
}
</script>

<style scoped>

</style>
