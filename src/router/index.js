import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FunctionView from "../views/FunctionView.vue";
import sourceData from "@/data.json";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/funcion",
    name: "funcion",
    component: FunctionView,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DepartmentsShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    beforeEnter: (to) => {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists) return { name: "NotFound" };
    },
    /*
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/DepaTemplate.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
      },
    ],*/
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/DepaTemplate.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }), 300);
      })
    );
  },
  linkActiveClass: "active-link",
});

export default router;
