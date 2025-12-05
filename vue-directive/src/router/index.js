import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/bind",
      name: "DirectiveBind",
      component: () => import("../views/DirectiveBind.vue"),
    },
    {
      path: "/model",
      name: "DirectiveModel",
      component: () => import("../views/DirectiveModel.vue"),
    },
    {
      path: "/on",
      name: "DirectiveOn",
      component: () => import("../views/DirectiveOn.vue"),
    },
    {
      path: "/if",
      name: "DirectiveIf",
      component: () => import("../views/DirectiveIf.vue"),
    },
    {
      path: "/for",
      name: "DirectiveFor",
      component: () => import("../views/DirectiveFor.vue"),
    },
    {
      path: "/forObj",
      name: "DirectiveForObj",
      component: () => import("../views/DirectiveForObj.vue"),
    },
    {
      path: "/todo",
      name: "ToDoDirective",
      component: () => import("../views/ToDoDirective.vue"),
    },
  ],
});

export default router;
