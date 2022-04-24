import { createWebHistory, createRouter } from "vue-router";

import CharactersView from "../views/list/characters-view.vue";
import ComicsView from "../views/list/comics-view.vue";
// import HomeView from "../views/home-view.vue";
import CharacterDetailsView from "../views/details/character-details-view.vue";
import ComicDetailsView from "../views/details/comic-details-view.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: CharactersView,
  },
  {
    name: "characters",
    path: "/characters",
    component: CharactersView,
  },
  {
    name: "character",
    path: "/characters/:id",
    component: CharacterDetailsView,
    props: true,
  },
  {
    name: "comics",
    path: "/comics",
    component: ComicsView,
  },
  {
    name: "comic",
    path: "/comics/:id",
    component: ComicDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
