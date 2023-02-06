import { createRouter, createWebHashHistory } from 'vue-router'
import Chat from '../components/Chat-item.vue'
import Room from '../components/Chat-Room.vue'
import AddRoom from '../components/Add-Room.vue'
import Login from '../components/Login-item.vue'

const routes = [
  {
    path: '/chat/:nickname/:roomid/:roomname',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/room/:nickname',
    name: 'RoomList',
    component: Room
  },
  {
    path: '/add-room',
    name: 'AddRoom',
    component: AddRoom
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
], router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router