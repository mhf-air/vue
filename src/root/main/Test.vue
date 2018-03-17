<template lang="pug">
div(class="app")
  div(class="popover-container")
    div(@mouseenter="showPopover" @mouseleave="hidePopover") Toggle
    transition(name="fade")
      div(v-if="show" class="popover")
        ul
          li alice
          li bob
          li cat
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
.fade-enter-active
.fade-leave-active
  transition: all 0.5s

.fade-enter
.fade-leave-to
  transform: translateY(0)

.app
  background: red

.popover-container
  position: relative

.popover
  position: absolute
  top: 100%
  left: 0
  background: cyan
  overflow: hidden

</style>
