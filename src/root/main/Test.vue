<template lang="pug">
div.app
  div.main(class="g-clearfix")
    div.left
      span 小米商城
      span MIUI
      span IoT
    div.right
      span MIUI
      span IoT
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.app
  background: green

.main
  background: cyan
  width: 77rem
  margin: 0 auto

.left
  float: left
  >span
    margin-right: 1rem

.right
  float: right
  >span
    margin-left: 1rem

</style>
