<template>
<div>
  <p class="red">{{ message }}</p>
  <p>{{ reversedMessage }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>

  <label>enter todo</label>
  <input @keyup.enter="addTodo" />
  <ol>
    <li v-for="todo in todoList">
      {{ todo.value }}
    </li>
  </ol>
</div>
</template>

<script lang="ts">
import { mapState } from "vuex"
import api from "app/api"

export default Vue.extend({
  data() {
    return {
      message: "Hello vue!",
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("")
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
      api.GetUser()
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })

      let todo = e.target.value
      if (todo != "") {
        this.$store.dispatch("main/addTodo", { todo })
        e.target.value = ""
      }
    },
  },
})
</script>

<style scoped>
.red {
  color: #f00;
}
</style>
