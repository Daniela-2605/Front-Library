// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import Books from '../components/Books.vue';
import Writers from '../components/Writers.vue';

const routes = [
  { path: '/books', component: Books },
  { path: '/writers', component: Writers }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
