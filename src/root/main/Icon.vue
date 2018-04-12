<template lang="pug">
div.app.g-hidden
  //- icon-square-bracket.hello(width="50" height="50" direction="bottom")
  svg(
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="50"
      height="50"
      )
    g(stroke="gray" stroke-width="5" fill="transparent")
      polyline(
          v-if="direction === 'left'"
          points="70 10, 30 50, 70 90"
          )
      polyline(
          v-else-if="direction === 'right'"
          points="30 10, 70 50, 30 90"
          )
      polyline(
          v-else-if="direction === 'top'"
          points="10 70, 50 30, 90 70"
          )
      polyline(
          v-else-if="direction === 'bottom'"
          points="10 30, 50 70, 90 30"
          )

</template>

<script>
export default {
  data() {
    return {
      show: false,
      direction: "bottom",
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.hello
  // border: 1px solid
  margin: 1rem 10rem
  color: orange
  &:hover
    color: green
    background: cyan
svg
  // border: 1px solid
  margin: 1rem 10rem

.svg-triangle
  margin: 10px

</style>
