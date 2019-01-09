export default {
  getTask({ commit }, task) {
    commit('getTask', task)
  },
  addTask({ commit },task) {
    commit('addTask',task)
  },
  editTask({ commit }, task) {
    commit('editTask', task)
  },
  removeTask({ commit }, task) {
    commit('removeTask', task)
  },
  completeTask({ commit }, task) {
    commit('completeTask', task)
  },
  clearTask({ commit }) {
    commit('clearTask')
  }
}
