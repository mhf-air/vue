<template>
<div>
  <SiteHeader/>
  <!-- <Content/> -->
  <SiteFooter/>
</div>
</template>

<script>
import SiteHeader from "./SiteHeader.vue"
import SiteFooter from "./SiteFooter.vue"
import Content from "./Content.vue"

export default {
  components: {
    SiteHeader,
    SiteFooter,
    Content,
  },
}
</script>

<style scoped>

</style>
