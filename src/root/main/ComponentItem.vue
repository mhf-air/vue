<template lang="pug">
div
  slot
</template>

<script>
export default {
  name: "g-radio-group",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    }
  },
  methods: {
    changeValue(e, data) {
      console.log("change value")
      this.$emit("change-value", data)
    },
  },
  model: {
    prop: "value",
    event: "change-value",
  },
}
</script>

<style lang="stylus" scoped>
</style>
