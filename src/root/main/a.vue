<template lang="pug">
div
  SiteHeader

  Test.test
  div.component.g-hidden
    //- C.abc.g-hidden
      CItem(v-for="(item, i) in mainProductList" :key="i")
        img(:src="item.src" :alt="item.alt")
      //- CItem(v-for="(item, i) in mainProductList" :key="i")
        | {{ item.alt }}
    g-carousel.abc
      g-carousel-item(v-for="(item, i) in mainProductList" :key="i")
        img(:src="item.src" :alt="item.alt")
  Icon.icon

  Content
  SiteFooter
</template>

<script>
import Content from "./Content.vue"
import Test from "./Test.vue"
import C from "./Component.vue"
import CItem from "./ComponentItem.vue"
import Icon from "./Icon.vue"

export default {
  components: {
    Content,
    Test,
    C,
    CItem,
    Icon,
  },
  data(){
    return {
      // on: false,
      mainProductList: [
        { src: "image/mi/main-product/xmad_1.jpg", alt:"a"},
        { src: "image/mi/main-product/xmad_2.jpg", alt:"b"},
        { src: "image/mi/main-product/xmad_3.jpg", alt:"c"},
        { src: "image/mi/main-product/xmad_4.jpg", alt:"d"},
        { src: "image/mi/main-product/xmad_5.jpg", alt:"e"},
      ],
    }
  },
  methods: {
    click(){
      console.log(this.$el)
    },
  },
}
</script>

<style lang="stylus" scoped>

.component
  margin: 1rem auto
  // padding: 1rem 1rem
  // width: 300px
  // height: 100px
  // width: 76rem
  border: 1px solid

.abc
  margin: 1rem auto
  width: 76rem
  height: 29rem

.icon
  margin: 1rem auto
  padding: 1rem 1rem
  width: 300px
  height: 100px
  border: 1px solid

.a
  background: yellow

.b
  background: cyan

.c
  background: red

// .item
  // width: 5rem
  // height: 5rem
  // background: cyan

</style>
