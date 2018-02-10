
<template>
  <div>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      todos: [
        { text: "Learn Es" },
        { text: "Learn Vue" },
        { text: "Learn React" },
      ],
    }
  },
}
</script>

<style>
  .green {
    color: #0f0;
  }
</style>
