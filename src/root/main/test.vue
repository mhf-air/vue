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

<script>
import { mapState } from "vuex"
import api from "app/api"

export default {
  render(h){
    let indicatorList = []
    for (let i = 0; i < 3; i++) {
      indicatorList.push(h("div", {
        class: {
          "indicator": true,
        }
      }))
    }
    return h("div",{
        class: {
          "g-relative": true,
        },
      },
      [
        this.$slots.default,
        h("g-h", {
            class: {
              "indicator-group": true,
              "g-relative": true,
            },
          }, 
          indicatorList
        ),
      ]
    )
  },
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
}
</script>

<style scoped>
.red {
  color: #f00;
}
</style>
