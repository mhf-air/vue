<template lang="pug">
div
  SiteHeader

  Test.test
  div.component.g-hidden
    //- CustomComponent(v-model="on" @toggle="click")
    g-switch(v-model="on" @toggle="click")
  Icon.icon

  Content
  SiteFooter
</template>

<script>
import Content from "./Content.vue"
import Test from "./Test.vue"
import CustomComponent from "./Component.vue"
import Icon from "./Icon.vue"

export default {
  components: {
    Content,
    Test,
    CustomComponent,
    Icon,
  },
  data(){
    return {
      // on: false,
    }
  },
  methods: {
    click(){
      console.log(this.on)
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

</style>
