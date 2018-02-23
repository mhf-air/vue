const state = {
  todoList: [],
}

const mutations = {
  addTodo(state, s) {
    state.todoList.push({ value: s.todo })
  },
}

const actions = {}

function addDefaultMutations(actions, mutations) {
  for (let k in mutations) {
    if (!actions.hasOwnProperty(k)) {
      actions[k] = ({ commit }, s) => {
        commit(k, s)
      }
    }
  }
}

addDefaultMutations(actions, mutations)
export default {
  state,
  // getters,
  actions,
  mutations,
}
