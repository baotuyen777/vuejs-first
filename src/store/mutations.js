export default {
  getTask(state, task) {
    console.log(state,task,8888)
    state.newTask = task
  },
  addTask(state) {
    console.log(state, 4)
    state.tasks.push({
      body: state.newTask,
      completed: false
    })
  },
  editTask(state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)
    state.tasks = tasks
    state.newTask = task.body
  },
  removeTask(state, task) {
    var tasks = state.tasks
    tasks.splice(tasks.indexOf(task), 1)

  },
  completeTask(state, task) {
    task.completed = !task.completed
  },
  clearTask(state) {
    state.title = ''
  }
}
