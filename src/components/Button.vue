<template>
    <div>
        <button class="text-center font-semibold" type="button" @click="$emit('click')"> ADD </button>
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
    }
}
</script>


