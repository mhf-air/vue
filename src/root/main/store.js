import { addDefaultMutations } from "app"

const state = {
  todoList: [],
}

const mutations = {
  addTodo(state, s) {
    state.todoList.push({ value: s.todo })
  },
}

const actions = {}

addDefaultMutations(actions, mutations)
export default {
  state,
  // getters,
  actions,
  mutations,
}
