<template lang="pug">
g-v(align-items="center" class="nice")
  //- main product
  div(class="main-product")
    el-carousel(height="28rem")
      el-carousel-item(v-for="(item, i) in mainProductList" :key="i")
        router-link(to="")
          img(:src="item.src" :alt="item.alt")
    g-v(justify-content="center" class="main-product-nav")
      g-h(justify-content="center" class="main-product-nav")
        g-h(justify-content="space-between")
          span {{ item.name }}
          span &gt;
        div(class="main-product-nav-popover")
          g-h(wrap)
            div(v-for="(popItem, j) in item.list" :key="j" class="main-product-nav-popover-popitem")
              router-link(to="popItem.link")
                img(:src="popItem.link")
                span {{ popItem.name }}

</template>

<script>
export default {
  data() {
    return {
      msg: "",
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>
