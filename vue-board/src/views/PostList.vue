<template>
  <h3>게시글 목록</h3>
  <div></div>
  <table>
    <thead>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일자</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post in store.posts" v-bind:key="post.board_id">
        <td>{{ post.board_id }}</td>
        <td>
          <RouterLink :to="{ name: 'Detail', params: { id: post.board_id } }">{{
            post.title
          }}</RouterLink>
        </td>
        <td>{{ post.author }}</td>
        <td>{{ new Date(post.create_date).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="router.push({ name: 'New' })">글등록</button>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useBoardStore } from "@/stores/board";

const store = useBoardStore();
const router = useRouter();

onMounted(() => {
  store.fetchPost();
});
</script>
