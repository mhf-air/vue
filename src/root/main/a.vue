<template lang="pug">
div
  SiteHeader

  Test.test
  div.component
    C
      CItem.item a, hello
      CItem.item b,nice
    //- g-switch(v-model="on" @toggle="click")
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
  padding: 1rem 1rem
  width: 300px
  height: 100px
  border: 1px solid

.icon
  margin: 1rem auto
  padding: 1rem 1rem
  width: 300px
  height: 100px
  border: 1px solid

// .item
  // width: 5rem
  // height: 5rem
  // background: cyan

</style>
