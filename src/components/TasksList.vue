<template>
    <div>
        <div v-for="(task, index) in tasks" :key="task.id" class="container flex bg-gray-100 shadow p-4 my-1 rounded">
            <div class="justify-start mr-20">
                <h1 class="text-grey-400 " >{{task.title}}</h1>
            </div>
            <div class="justify-end ml-20 cursor-pointer" @click="removeTask(index)">
                <i>&times;</i>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name:'todo-task-list',
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Create a task',
                    done: false
                },
                {
                    id: 2,
                    title: 'Create a project',
                    done: false
                },
                
            ]

        };
    },

    mounted () {

    },

    methods: {
        removeTask(index) {
            this.tasks.splice(index, 1)

        }

    }
}
</script>