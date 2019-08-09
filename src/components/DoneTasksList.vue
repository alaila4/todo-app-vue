<template>
  <div>
    <div
      v-for="(task, index) in tasks"
      :key="task.id"
      class="container flex bg-gray-100 shadow p-4 my-1 rounded"
    >
      <div class="w-11/12 mr-20">
        <h1 class="text-gray-400">{{task.title}}</h1>
      </div>
      <div class="w-1/12 ml-20 cursor-pointer" @click="removeTask(index)">
         <img class="cursor-pointer  w-8 h-6" src="./assets/times_circle_regular.png">
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "todo-done-task-list",
  props: {
    tasks: {
      type: Array,
      required: false
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    removeTask(index) {
      this.$emit("return-to-task-list", this.tasks[index]);
      this.tasks.splice(index, 1);
    }
  }
};
</script>