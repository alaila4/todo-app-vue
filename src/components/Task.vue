<template>
    <div>
        <div v-for="task in tasks" :key="task.id">
            <h1 class="text-grey-400">{{task.title}}</h1>           
        </div>
    </div>
</template>

<script>
export default {
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
            ]

        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>