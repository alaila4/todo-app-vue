<template>
    <div id="app" class="bg-gray-100 h-screen">
        <Nav/>
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import Nav from './components/Nav.vue'

export default {
    name: 'app',
    components: {
        TodoList,
        Nav
    }
}
</script>