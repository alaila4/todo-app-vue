<template>
  <div>
    <div v-for="(task, index) in tasks" :key="task.id" class="container flex bg-gray-100 shadow p-4 my-1 rounded">
      
      <div class="w-11/12 mr-20 cursor-pointer" v-if="!editing || index != selectedTask">
        <h1 class="text-gray-700" @click="updateTaskSelection(index)">{{task.title}}</h1>   
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
        v-on:keyup.enter="editTask"
        autofocus>
      </div>

      <div v-if="!editing" @click="completeTask(index)">
        <img class="cursor-pointer  w-8 h-6" src="./assets/check_circle_solid.png">
        <!-- <i class="font-bold text-blue-700 rounded-full h-6 w-6 bg-blue-200 flex items-center justify-center cursor-pointer text-sm">&check;</i> --> 
      </div>

      <div class="mx-3" v-if="!editing" @click="removeTask(index)">
        <img class="cursor-pointer  w-8 h-6" src="./assets/times_circle_regular.png">
        <!-- <i class="font-bold text-red-700 rounded-full h-6 w-6 bg-red-200 flex items-center justify-center cursor-pointer">&Chi;</i> -->
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
          selectedTask: -1,
          // delet: 'assets/time_circle_regular.png'
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