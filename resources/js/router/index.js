import { createRouter, createWebHistory } from 'vue-router';

// Define your routes
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue') // Replace with the actual path to your component
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Dashboard.vue') // Replace with the actual path to your component
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
