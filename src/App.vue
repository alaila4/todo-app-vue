<template>
    <div id="app" class="bg-gray-100 h-screen">
        <!-- <Nav/> -->
        <div class="container mx-auto flex items-center flex-col h-48 mx-2 px-2 my-2 py-2">
            <div class="mt-8" >
                <img class="max-w-xs object-contain" src="./assets/type_logo.png">
            </div>
            
            <div class="mt-4">
                <h1 class="text-xl text-center">Welcome to Your <strong>Todo App</strong></h1>
            </div> 
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