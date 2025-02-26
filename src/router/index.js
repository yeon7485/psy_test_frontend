import { createRouter, createWebHistory } from "vue-router";
import BoardPage from "../pages/BoardPage.vue";
import BoardDetail from "../pages/BoardDetail.vue";

const routes = [
  { path: "/", component: BoardPage },
  { path: "/board/:idx", component: BoardDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
