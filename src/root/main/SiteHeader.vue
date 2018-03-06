<template>
<header id="site-header">
  <div id="site-header-top">
    上
  </div>
  <div id="site-header-bottom">
    下
  </div>
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
/* top */

#site-header-top {
  background-color: #363636;
  color: #b0b0b0;
  padding: 0 19.3rem;
  font-size: 12px;
}

/* bottom */

#site-header-bottom {
  padding: 0 19.3rem;
  font-size: 16px;
}
</style>
