import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';

import Card from './components/Card.vue';
import Task from './components/Task.vue';
import TasksList from './components/TasksList.vue';
import DoneList from './components/DoneTasksList.vue';


Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-task', Task);
Vue.component('todo-tasks-list', TasksList);
Vue.component('todo-done-task-list', DoneList);


new Vue({
  render: h => h(App),
}).$mount('#app');
