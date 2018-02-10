
<template>
  <div>
    <Hello></Hello>
    <p class="red">{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>


<script>
import Hello from "./component/Hello.vue"
export default {
  data() {
    return {
      message: "Hello vue!",
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
