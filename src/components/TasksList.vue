<template>
    <div>
        <div v-for="task in tasks" :key="task.id" class="bg-gray-100 shadow p-4 my-1 rounded">
            <h1 class="text-grey-400">{{task.title}}</h1>  
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
                {
                    id: 3,
                    title: 'Create an activity',
                    done: false
                },
            ]

        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>