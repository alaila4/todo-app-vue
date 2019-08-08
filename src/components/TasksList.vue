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
    
</template>

<script>
export default {
    name:'todo-task-list',
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
        removeTask(index) {
            this.tasks.splice(index, 1)

        }
    }
}
</script>