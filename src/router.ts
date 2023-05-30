import { createRouter, createWebHistory } from 'vue-router';
import router from './router';

import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import Contact from './views/Contact.vue';
import AllGames from './views/AllGames.vue';
import CreatorDev from './views/CreatorGame.vue';
import GameDetail from './views/GameDetail.vue';
import AuthUser from './views/Authentification.vue';
import InscriUser from './views/Inscription.vue';
import PageConn from './views/ViewConn.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
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
    component: AllGames,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/Creator',
    name: 'Creator',
    component: CreatorDev,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/GameDetail/:id',
    name: 'GameDetail',
    component: GameDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/auth',
    name: 'auth',
    component:AuthUser 
  },
  {
    path: '/register',
    name: 'register',
    component: InscriUser
  },
  {
    path: '/PageConnecter',
    name: 'pageCo',
    component: PageConn,
    meta:{
      requiresAuth: true
    }
  }
]



export default createRouter({
  history: createWebHistory(),
  routes
});