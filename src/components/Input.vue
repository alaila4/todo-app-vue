<template>
    <div>
        <div>
            <input
                class="bg-white 
                    focus:outline-none 
                    focus:shadow-outline 
                    border border-gray-300 
                    rounded-lg py-3 px-4 my-4 block w-full 
                    appearance-none leading-normal" 
                v-model="newTask" 
                v-on:keyup.enter="addTask"
                v-bind:type="type" 
                v-bind:placeholder="placeholder"
                v-bind:value="value"
                @input="updateContent($event.target.value)"
            >
        </div>
        <div>
            <todo-button 
                class="flex-content 
                bg-green-500 
                hover:bg-green-700 
                text-center 
                text-white 
                font-bold 
                py-2 px-4 
                rounded 
                px-2 mx-2 my-4"
                @send-task="createTask">
            </todo-button>
        </div>
        
    </div>
     
</template>


<script>
export default {
    name:'todo-input',
    props: {
        value: {}, 
        type: {
            type: String,
            default: 'text' 
        }, 
        placeholder: {
            type: String,
            default: 'Add you task here'
        }, 
    }, 
    data () {
        return {
            newTask: '',
            task: {
                title: '',
                done: false
            },
        };
    },

    methods:{
        addTask (){
            this.tasks.push({
                title: this.newTask,
                done: false
            })
            // this.newTask = ''; hace que el input quede en blanco después de crear una tarea
            this.newTask = ''; 
            this.$emit('new-task', this.Tasks)
        },
        createTask (){
            this.$emit('receive-task', this.task)
        },
        updateContent(content) {
            this.testContent = content;
            this.$emit('input', content);
        },        
    },
    
 
}
</script>


