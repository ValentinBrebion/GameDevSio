import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import Contact from './views/Contact.vue'
import AllGames from './views/AllGames.vue';
import FilAnime from './views/FilAnime.vue';
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
    path: '/FilAnime',
    name: 'FilAnime',
    component: FilAnime
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