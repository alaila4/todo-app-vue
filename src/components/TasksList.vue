<template>
    <div>
        <div class="container flex">
            <input 
                class="bg-white 
                    focus:outline-none 
                    focus:shadow-outline 
                    border border-gray-300 
                    rounded-lg py-3 px-4 my-4 block w-full 
                    appearance-none leading-normal" 
                type="text" 
                v-model="newTask" 
                placeholder="Add your task"
                v-on:keyup.enter="addTask"
            >
        </div>
        
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
            newTask:'',
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

        },
        addTask (){
            this.tasks.push(this.newTask)
            // this.newTask = ''; hace que el input quede en blanco después de crear una tarea
            this.newTask = ''; 
        }

    }
}
</script>