import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../views/home-view.vue";
import CharacterView from "../views/character-view.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
  },
  {
    name: "character",
    path: "/characters/:id",
    component: CharacterView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
