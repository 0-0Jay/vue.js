import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // path : 경로(필수)   /   name : 라우트 이름   /   component : 라우트의 컴포넌트(필수)
    // () => import("...") : 동적 컴포넌트 호출
    {
      path: "/",
      name: "top",
      component: HomeView,
    },
    {
      path: "/user/list",
      name: "userList",
      component: () => import("../views/UserListView.vue"),
    },
    {
      path: "/user/detail/:id", // 해당 값(id)이 필수
      name: "userInfo",
      component: () => import("../views/UserInfoView.vue"),
    },
    {
      path: "/user/add",
      name: "userForm",
      component: () => import("../views/UserFormView.vue"),
    },
  ],
});

// export default router;
