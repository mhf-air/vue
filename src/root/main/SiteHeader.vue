<template>
<header id="site-header">
  <div>header</div>
</header>
</template>

<script>
export default {
  data() {
    return {
      username: "Tom",
    }
  },
  methods: {
    hidePopover(a) {
      this[a] = false
    },
  },
}
</script>

<style scoped>

</style>
