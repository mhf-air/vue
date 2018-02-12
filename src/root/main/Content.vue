<template>
  <div>
    <p class="red">{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <p>
      <router-link to="/about">Go to About</router-link>
    </p>

    <label>enter todo</label>
    <input @keyup.enter=""/>
    <ol>
      <li v-for="todo in todoList">
        {{ todo.value }}
      </li>
    </ol>
  </div>
</template>


<script>
import { mapState } from "vuex"

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
    ...mapState({
      "todoList",
    }),
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split("").reverse().join("")
    },
    addTodo:function(){
    },
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
