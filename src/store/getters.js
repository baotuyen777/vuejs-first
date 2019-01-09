export default {
  newTask: state => state.newTask,
  title: state => state.title,
  tasks: state => state.tasks.filter((task) => {
    console.log(task, 'getters')
    return !task.completed
  }),
  completedTask: state => state.tasks.filter((task) => { return task.completed })
}