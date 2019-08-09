<template>
    <div class="w-1/4">
        <button class="text-center font-semibold" type="button" @click="$emit('click')"> Add </button>
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


