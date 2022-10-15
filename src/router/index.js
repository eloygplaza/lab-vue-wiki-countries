// src/router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/lab-vue-wiki-countries/",
    name: "countries",
    component: () => import("../views/CountriesList.vue"),
    children: [
      {
        path: ":code",
        name: "details",
        component: () => import("../views/CountriesDetails.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
