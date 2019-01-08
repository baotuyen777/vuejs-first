<template>
  <div id="get-tasks">
    <form @submit.prevent="addTask">
      <input class="form-control" name="title" :value="title" @change="getTask" placeholder="Title">
      <input class="form-control" name="content"  :value="content" @change="getTask" placeholder="Description">
      <br>
      <button type="submit" class="btn btn-primary">
        <i class="fa fa-plus"></i> New Task
      </button>
    </form>
  </div>
</template>

<script>
import Vuex from "vuex";

export default {
  methods: {
    getTask(e) {
    
      let newTask={};
      newTask[e.target.name]=e.target.value;
        console.log(newTask,777)
      this.$store.dispatch("getTask", newTask);
    },
    addTask(e) {
      console.log(9)
      e.preventDefault();
      this.$store.dispatch("addTask");
      // this.$store.dispatch("clearTask");
    }
  },
  // computed: {
  //   newTask() {
  //     console.log(this.$store.getters.title,this.$store.getters,5555)
  //     return this.$store.getters.title;
  //   }
  // }
};
</script>