import { createRouter, createWebHistory } from "vue-router";
import BoardPage from "../pages/BoardPage.vue";

const routes = [{ path: "/", component: BoardPage }];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
