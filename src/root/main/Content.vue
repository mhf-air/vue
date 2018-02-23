<template>
  <main>
    <div class="main-top">Lion's Blog</div>
    <div>nice</div>
    <router-link to="/about">about</router-link>
    <ul style="font-size: 10rem;">
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
      <li>abc</li>
    </ul>
  </main>
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
  main {
    display: flex;
    flex-direction: column;
  }

  .main-top {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    color: orange;

    width: 100%;
    height: 22rem;
    background-image: url("image/sunset.jpg" );
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
