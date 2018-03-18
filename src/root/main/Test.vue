<template lang="pug">
div(class="app")
  div(class="popover-container")
    div(@mouseenter="showPopover" @mouseleave="hidePopover") Toggle
    transition(name="fade")
      div(v-if="show" class="popover")
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
    showPopover() {
      this.show = true
    },
    hidePopover() {
      this.show = false
    },
  },
}
</script>

<style lang="stylus" scoped>
// .fade-enter-active
// .fade-leave-active
  // animation: drop-down 0.5s

// .fade-enter
// .fade-leave-to
  // transform: translateY(0)

.app
  background: red

.popover-container
  position: relative
  &:hover .popover
    animation: drop-down 0.1s

.popover
  position: absolute
  top: 100%
  left: 0
  background: cyan
  transform-origin: center top

@keyframes drop-down
  0%
    transform: scaleY(0)
  25%
    transform: scaleY(0.25)
  50%
    transform: scaleY(0.5)
  75%
    transform: scaleY(0.75)
  100%
    transform: scaleY(1)

</style>
