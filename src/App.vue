<template>
    <div id="app" class="bg-gray-100 h-screen">
        <!-- <Nav/> -->
        
        <div class="container mx-auto flex justify-center h-48 mx-2 px-2 my-2 py-2">
            <img class="max-w-xs object-contain object-center flex-1" src="./assets/img/type_logo.png">
        </div>        
        <TodoList/>
    </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
// import Nav from './components/Nav.vue'

export default {
    name: 'app',
    components: {
        TodoList,
        // Nav
    }
}
</script>