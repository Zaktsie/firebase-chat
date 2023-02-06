import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Chat from './components/Chat-item.vue'
import Room from './components/Chat-Room.vue'
import AddRoom from './components/Add-Room.vue'
import Login from './components/Login-item.vue'
createApp(App).use(router).mount('#app')
