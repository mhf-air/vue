<template lang="pug">
div
  SiteHeader
  Test
  Content
  SiteFooter
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

<style lang="stylus" scoped>

</style>
