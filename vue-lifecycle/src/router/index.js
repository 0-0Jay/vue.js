import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/computed",
      name: "ComputedTest",
      component: () => import("../views/ComputedTest.vue"),
    },
    {
      path: "/watch",
      name: "WatchTest",
      component: () => import("../views/WatchTest.vue"),
    },
    {
      path: "/lifecyclehook",
      name: "LifecycleHook",
      component: () => import("../views/LifecycleHook.vue"),
    },
    {
      path: "/onecomp",
      name: "OneComponentApp",
      component: () => import("../views/OneComponentApp.vue"),
    },
    {
      path: "/parentcomp",
      name: "ParentComponentApp",
      component: () => import("../views/ParentComponentApp.vue"),
    },
    {
      path: "/rootcomp",
      name: "RootComp",
      component: () => import("../views/RootComp.vue"),
    },
    {
      path: "/todolist",
      name: "TodoList",
      component: () => import("../views/TodoList.vue"),
    },
  ],
});

export default router;
