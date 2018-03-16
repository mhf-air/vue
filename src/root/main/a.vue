<template>
<div>
  <SiteHeader/>
  <Test/>
  <Content/>
  <SiteFooter/>
</div>
</template>

<script lang="ts">
import Vue from "vue"
import Content from "./Content.vue"
import Test from "./Test.vue"

export default Vue.extend({
  components: {
    Content,
    Test,
  },
})
</script>

<style scoped>

</style>
