<template>
  <div>
    <div
      v-for="(task, index) in tasks"
      :key="task.id"
      class="container flex bg-gray-300 shadow p-4 my-1 rounded"
    >
      <div class="w-11/12 mr-20">
        <h1 class="text-gray-600">{{task.title}}</h1>
      </div>
      <div class="w-1/12 ml-20 cursor-pointer" @click="removeTask(index)">
        <i
          class="font-bold text-red-700 rounded-full h-6 w-6 bg-red-200 flex py-1 items-center justify-center"
        >&Chi;</i>
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