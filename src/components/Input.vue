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
                v-model="task.title" 
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
                @click="addTask">
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
            let newTask = this.task;
            this.task = {
                title: '',
                done: false
            }

            this.$emit('new-task', newTask)
        },
        updateContent(content) {
            this.testContent = content;
            this.$emit('input', content);
        },        
    },
    
 
}
</script>


