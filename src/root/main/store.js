const state = {
  todoList: [],
}

const mutations = {
  addTodo(state, { todo }) {
    state.todoList.push({ value: todo })
  },
}

const actions = {
  addTodo({ commit }, todo) {
    commit("addTodo", todo)
  },
}

export default {
  state,
  // getters,
  actions,
  mutations,
}
