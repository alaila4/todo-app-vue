<template>
    <div class="container mx-auto px-4 py-4 flex flex-col flex-wrap">
        <h1 class="text-xl text-center">Welcome to Your <strong>Todo App</strong></h1>

        <todo-card class="mx-auto mt-4 w-full max-w-lg">
            <h1 class="font-semibold tracking-widest text-gray-400 text-center my-2 ">TO DO</h1>
            <todo-input @receive-task="addTask"></todo-input>
            <todo-tasks-list></todo-tasks-list>
        </todo-card>

        <todo-card class="mx-auto mt-4 w-full max-w-lg">
            <h1 class="font-semibold tracking-widest text-gray-400 text-center my-2">DONE</h1>
            <todo-tasks-list></todo-tasks-list>
        </todo-card> 

    </div>
</template>

<script>
export default {
    name:'todo-list',
    props: {

    },

    data () {
        return {
            tasks: []
           
        };
    },

    mounted () {

    },

    methods: {
        addTask(task){
            this.tasks.push(task)
        }
        
    
    }
}
</script>