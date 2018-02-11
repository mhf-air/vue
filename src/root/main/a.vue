<template>
  <div>
    <Hello></Hello>
    <Nice></Nice>
  </div>
</template>


<script>
import Hello from "./Hello.vue"
import Nice from "./Nice.vue"
export default {
  components: {
    Hello, Nice
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
