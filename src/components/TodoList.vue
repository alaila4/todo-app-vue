<template>
    <div class="container mx-auto px-4 py-4 flex flex-col flex-wrap">
        <h1 class="text-xl text-center">Welcome to Your <strong>Todo App</strong></h1>
        
        <todo-card class="mx-auto mt-4 h-64 w-full max-w-lg">
            Todo List
        </todo-card>

        <todo-card class="mx-auto mt-10 w-full max-w-lg">
            Create/Edit Task
        </todo-card>
    </div>
</template>

<script>
export default {
    name: 'todo-list',
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>