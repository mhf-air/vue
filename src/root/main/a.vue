<template lang="pug">
div
  SiteHeader
  Bluetooth
  Test
  Content
  SiteFooter
</template>

<script>
import Content from "./Content.vue"
import Bluetooth from "./Bluetooth.vue"
import Test from "./Test.vue"

export default {
  components: {
    Content,
    Bluetooth,
    Test,
  },
}
</script>

<style lang="stylus" scoped>

</style>
