import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import PostDetail from "../views/PostDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "List",
      component: PostList,
    },
    {
      path: "/post/:id",
      name: "Detail",
      component: PostDetail,
      props: true,
    },
    {
      path: "/post/new",
      name: "New",
      component: PostDetail,
    },
  ],
});

export default router;
