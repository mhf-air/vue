<template>
  <div>
    <p class="red">{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <p>
      <router-link to="/about">Go to About</router-link>
    </p>
  </div>
</template>


<script>
export default {
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
