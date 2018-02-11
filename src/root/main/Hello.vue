<template>
  <div>
    <p>{{ age }}</p>
    <input v-model.number="age" type="number"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age:20,
    }
  },
}
</script>

<style scoped>
  .green {
    color: #0f0;
  }
</style>
