<template>
  <div>
    <div v-for="(task, index) in tasks"
    :key="task.id" class="container flex bg-gray-100 shadow p-4 my-1 rounded">
      <div class="w-11/12 mr-20 cursor-pointer" v-if="!editing || index != selectedTask">
        <h1 class="text-grey-400" @click="updateTaskSelection(index)">{{task.title}}</h1>   
      </div>
      <div v-if="editing && index == selectedTask" class="flex-1">
        <input class="bg-white 
        focus:outline-none 
        focus:shadow-outline 
        border border-gray-300 
        rounded px-2 block w-full 
        appearance-none leading-normal"
        type="text"
        v-model="task.title"
        v-on:keyup.enter="editTask">
      </div>
      <div class="px-8" @click="completeTask(index)">
        <i class="font-bold text-blue-700 rounded-full h-6 w-6 bg-blue-200 flex items-center justify-center cursor-pointer">&check;</i>
      </div>
      <div @click="removeTask(index)">
        <i class="font-bold text-red-700 rounded-full h-6 w-6 bg-red-200 flex items-center justify-center cursor-pointer">&Chi;</i>
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
          editing: false,
          selectedTask: -1
        };
    },

    mounted() {},
    methods: {
        removeTask(index) {
          this.tasks.splice(index, 1);
        },
        completeTask(index) {
          this.$emit("add-to-done-list", this.tasks[index]);
          this.tasks.splice(index, 1);
        },
        editTask(){
          this.editing = false
          this.selectedTask = -1
        },
        enableEditing(){
          this.editing = true
        },
        updateTaskSelection(index){
          this.enableEditing()
          this.selectedTask = index
        }
    },    
};
</script>