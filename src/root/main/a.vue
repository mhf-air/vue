<template lang="pug">
div
  SiteHeader

  Test.test
  div.component
    CItem.group(name="hello" v-model="choice")
      C.abc(label="email")
      C.abc(label="phone")
    //- g-radio-group(name="hello" fontSize="30")
      g-radio.abc(label="email")
      g-radio.abc(label="phone")
  Icon.icon
  p {{ choice }}

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
      choice: "",
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
      console.log("nice")
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
  margin: 0 5rem

.icon
  margin: 1rem auto
  padding: 1rem 1rem
  width: 300px
  height: 100px
  border: 1px solid

.group
  display: flex
  flex-direction: column

.abc
  margin: 0 0.5rem
  font-size: 30px

</style>
