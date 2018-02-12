<template>
  <div>
    <p class="red">{{ message }}</p>
    <p>{{ reversedMessage }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
    <p>
      <router-link to="/about">Go to About</router-link>
    </p>

    <label>enter todo</label>
    <input @keyup.enter="addTodo"/>
    <ol>
      <li v-for="todo in todoList">
        {{ todo.value }}
      </li>
    </ol>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex"

export default {
  data() {
    return {
      message: "Hello vue!",
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("")
    },
    todoList() {
      return this.$store.state.main.todoList
    },
    ...mapState({
      todoList: state => state.main.todoList
    }),
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("")
    },
    addTodo(e) {
      let todo = e.target.value
      this.$store.dispatch("addTodo", { todo })
      e.target.value = ""
    },
  },
}
</script>

<style scoped>
  .red {
    color: #f00;
  }
</style>
