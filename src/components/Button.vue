<template>
    <div>
        <button class="text-center font-semibold" type="button" @click="sendTask"> ADD </button>
    </div>
</template>

<script>
export default {
    name:'todo-button',
    props: {

    },
    data () {
        return {
           
        };
    },
    methods: {
        sendTask(){
            this.$emit('send-task')
        }

    }
}
</script>


