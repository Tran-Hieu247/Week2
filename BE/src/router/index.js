import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '../page/LoginPage.vue'
import ProductsPage from '../page/ProductsPage.vue'
import UsersPage from '../page/UsersPage.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/products',
        component: ProductsPage,
      },
      {
        path: '/users',
        component: UsersPage,
      },
      {
          path: '/login',
          component: LoginPage,
      },
  ],
})

export default router;