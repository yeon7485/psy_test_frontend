import { createRouter, createWebHistory } from "vue-router";
import BoardPage from "../pages/BoardPage.vue";
import BoardDetail from "../pages/BoardDetail.vue";
import CreateBoard from "../pages/CreateBoard.vue";

const routes = [
  { path: "/", component: BoardPage },
  { path: "/board/:idx", component: BoardDetail },
  { path: "/board/create", component: CreateBoard },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
