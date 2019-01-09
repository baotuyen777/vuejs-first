<template>
  <div id="get-tasks">
    <form @submit.prevent="addTask" class="form-inline">
      <div class="form-group">
        <label for="pwd">Title:</label>
        <input class="form-control" name="title" ref="title" :value="title" placeholder="Title">
      </div>
      <div class="form-group">
        <label for="pwd">Content:</label>
        <input
          class="form-control"
          name="content"
          ref="content"
          :value="content"
          placeholder="Description"
        >
      </div>
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
    addTask(e) {
      e.preventDefault();
      let newTask1 = { completed: false };
      for (var k in this.$refs) {
        newTask1[k] = this.$refs[k].value;
      }

      this.$store.dispatch("addTask", newTask1);
      this.$store.dispatch("clearTask");
    }
  },
  computed: {
    title() {
      return this.$store.getters.newTask.title;
    },
    content() {
      return this.$store.getters.newTask.content;
    }
  }
};
</script>