import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Contact from './views/Contact.vue'
import AllGames from './views/AllGames.vue';
import CreatorDev from './views/CreatorGame.vue';
import GameDetail from './views/GameDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/AllGames',
    name: 'AllGames',
    component: AllGames
  },
  {
    path: '/Creator',
    name: 'Creator',
    component: CreatorDev
  },
  {
    path: '/GameDetail/:id',
    name: 'GameDetail',
    component: GameDetail
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});