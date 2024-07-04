import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: `/happy-candidat/:id`,
    name: "happy-candidat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "HappyCandidat" */ "@/views/HappyCandidat.vue"
      ),
    props: true,
  },
  {
    path: "/nos-offres",
    name: "nos-offres",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "NosOffres" */ "@/views/NosOffres.vue"),
  },
  {
    path: "/espace-employeur/:id",
    name: "espace-employeur",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "EspaceEmployeur" */ "../views/EspaceEmployeur.vue"
      ),
    props: true,
  },
  {
    path: "/espace-contact",
    name: "espace-contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "EspaceContact" */ "../views/EspaceContact.vue"
      ),
    props: true,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogIn.vue"),
  },
  {
    path: "/espace-enregistrement",
    name: "espace-enregistrement",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/EspaceEnregistrement.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
