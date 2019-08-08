<template>
    <div>
        <div v-for="(task, index) in tasks" :key="task.id" class="container flex bg-gray-100 shadow p-4 my-1 rounded">
            <div class="w-11/12 mr-20">
                <h1 class="text-grey-400">{{task.title}}</h1>
            </div>
            <div class="w-1/12 ml-20 cursor-pointer" @click="removeTask(index)">
                <i class="font-bold text-red-700 rounded-full h-5 w-5 bg-red-200 flex py-1 items-center justify-center">&times;</i>
            </div>
        </div>
    </div>
    <button
      class="flex-content bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded px-2 mx-2 my-4"
      v-on:click="addTask"
    >Add</button>

    <div
      v-for="(task, index) in tasks"
      :key="task.id"
      class="container flex bg-gray-100 shadow p-4 my-1 rounded"
    >
      <div class="w-11/12 mr-20">
        <h1 class="text-grey-400">{{task.title}}</h1>
      </div>
      <div class="cursor-pointer" @click="completeTask(index)">
        <i
          class="font-bold text-blue-700 rounded-full h-6 w-6 bg-blue-200 flex py-1 items-center justify-center"
        >&check;</i>
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
  name: "todo-task-list",
  props: {
    tasks: {
      type: Array,
      required: false
    }
  },

  data() {
    return {
      newTask: ""
    };
  },

    data () {
        return {
            tasks: []
  mounted() {},

  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      this.tasks.push({
        title: this.newTask,
        done: false
      });
      // this.newTask = ''; hace que el input quede en blanco después de crear una tarea
      this.newTask = "";
    },
    completeTask(index) {
      this.$emit("add-to-done-list", this.tasks[index]);
      this.tasks.splice(index, 1);
    }
  }
};
</script>