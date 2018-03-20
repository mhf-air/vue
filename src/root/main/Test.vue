<template lang="pug">
div(class="app")
  div(class="popover-container")
    div Toggle
    div(class="popover")
      g-v
        div alice
        div bob
        div cat
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
  },
}
</script>

<style lang="stylus" scoped>
.app
  background: red

.popover-container
  position: relative
  &:hover .popover
    transform: scale(1, 1)

.popover
  position: absolute
  top: 100%
  left: 0
  background: cyan
  transform-origin: center top
  transform: scale(1, 0)
  transition: transform 100ms ease-in

</style>
