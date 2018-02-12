//

const state = {
  todoList: [],
}

const mutations = {
  addTodo(state, todo) {
    state.todoList.push({ value: todo })
  },
}

export default {
  state,
  // getters,
  // actions,
  mutations,
}
