
<template>
  <div>
    <Hello></Hello>
    <p class="red">{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>


<script>
const Hello = require("./component/Hello.vue")
module.exports = {
  data() {
    return {
      message: "Hello world!",
    }
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split("").reverse().join("")
    },
  },
  components: {
    Hello,
  },
}
</script>

<style>
  .red {
    color: #f00;
  }
</style>
