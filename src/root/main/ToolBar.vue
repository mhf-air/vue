<template>
<header id="page-header">
  <div>header</div>
</header>
</template>

<script>
export default {
  data() {
    return {
      headerMenu: false,
      username: "Tom",
    }
  },
  methods: {
    hidePopover(a) {
      this[a] = false
    },
  },
  mounted() {
    let content = window.getComputedStyle(document.body, "::after").getPropertyValue("content").replace(/\"/g, "")
    switch (content) {
      case "xs":
        this.headerMenu = false
        break
      default:
        this.headerMenu = true
        break
    }
  },
}
</script>

<style scoped>
@media (min-width: 1281px) {
  /* xl */
}

@media (min-width: 1025px) and (max-width: 1280px) {
  /* lg */
}

@media (min-width: 768px) and (max-width: 1024px) {
  /* md */
}

@media (min-width: 481px) and (max-width: 767px) {
  /* sm */
}

@media (max-width: 480px) {
  /* xs */
  #header-menu {
    display: inline;
  }
}
</style>
