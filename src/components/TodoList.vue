<template>
  <div class="container mx-auto px-4 py-4 flex flex-col flex-wrap">
    <h1 class="text-xl text-center">Welcome to Your <strong>Todo App</strong></h1>

    <todo-card class="mx-auto mt-4 w-full max-w-lg">
        <h1 class="font-semibold tracking-widest text-gray-400 text-center my-2">TO DO</h1>
            <todo-input @new-task="addTask"></todo-input>
        <todo-tasks-list :tasks="tasks" @add-to-done-list="addDoneTask"></todo-tasks-list>
    </todo-card>

    <todo-card class="mx-auto mt-4 w-full max-w-lg">
        <h1 class="font-semibold tracking-widest text-gray-400 text-center my-2">DONE</h1>
        <todo-done-task-list :tasks="doneTask" @return-to-task-list="addTask"></todo-done-task-list>
    </todo-card>
  </div>
</template>

<script>
export default {
    name:'todo-list',
    data() {
        return {
            tasks: [
                {
                    id: 1,
                    title: "Create a task",
                    done: false
                },
                {
                    id: 2,
                    title: "Create a project",
                    done: false
                }
            ],
            doneTask: []
        };
    },

    methods: {
        addDoneTask(task) {
            this.doneTask.push(task);
        },

        addTask(task){
            this.tasks.push(task)                    
        }
    }
}
</script>