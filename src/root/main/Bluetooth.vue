<template lang="pug">
  g-h(j-c="center")
    g-v.root(a-i="center")
      div.lamp(:style="lampStyle")
      g-h.control(j-c="space-around")
        g-h(j-c="center" a-i="center")
          el-switch(v-model="lampIsOn")
        g-v.slider
          g-h(j-c="space-between" a-i="center")
            span R
            el-slider(v-model="colorR" max="255")
          g-h(j-c="space-between" a-i="center")
            span G
            el-slider(v-model="colorG" max="255")
          g-h(j-c="space-between" a-i="center")
            span B
            el-slider(v-model="colorB" max="255")

</template>

<script>
export default {
  data() {
    return {
      lampIsOn: false,
      colorR: 0,
      colorG: 100,
      colorB: 100,
    }
  },
  computed:{
    lampStyle(){
      return `
        background: rgb(${this.colorR}, ${this.colorG}, ${this.colorB})
      `
    },
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>

.root
  width: 20rem
  border: 1px solid
  margin: 1rem
  padding: 1rem

.lamp
  width: 10rem
  height: 2rem

.control
  width: 100%

.slider
  width: 12rem
  .el-slider
    width: 10rem

</style>
