import { createWebHistory, createRouter } from "vue-router";

import CharactersView from "../views/list/characters-view.vue";
import ComicsView from "../views/list/comics-view.vue";
import HomeView from "../views/home/home-view.vue";
import CharacterDetailsView from "../views/details/character-details-view.vue";
import ComicDetailsView from "../views/details/comic-details-view.vue";
import AboutView from "../views/about/about-view.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: HomeView,
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
  {
    name: "about",
    path: "/about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
