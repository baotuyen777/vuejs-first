export default {

  addTask(state, task) {
    state.tasks.push(task)
  },
  editTask(state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)
    state.tasks = tasks
    state.newTask=task
  },
  removeTask(state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)
  },
  completeTask(state, task) {
    task.completed = !task.completed
  },
  clearTask(state) {
    state.newTask = {}
  }
}
