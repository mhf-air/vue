<template>
  <div>
    <Hello></Hello>
    <p class="red">{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>


<script>
import Hello from "./feature/Hello.vue"
export default {
  components: {
    Hello,
  },
  data() {
    return {
      message: "Hello vue!",
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split("").reverse().join("")
    },
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("")
    },
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
