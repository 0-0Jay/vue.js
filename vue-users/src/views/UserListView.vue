<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
const router = useRouter();
const goToDetail = (id) => {
  router.push({ name: "userInfo", params: { id: id } }); // params는 값이 필수
  // router.push({ name: "userList", query: { work: id } }); // query는 값이 없어도 동작
};

import { onBeforeMount, ref } from "vue";
import axios from "axios";
import { useCounterStore } from "@/stores/counter";
const fakeServer = "https://jsonplaceholder.typicode.com";
const counterStore = useCounterStore();
const users = ref([]);

const getUserList = async () => {
  const res = await axios
    .get(`${fakeServer}/users`)
    .catch((err) => console.log(err));
  users.value = res.data;
  counterStore.count = users.value.length;
};

onBeforeMount(() => {
  getUserList();
});
</script>
<template>
  <h1>회원관리</h1>
  <p><RouterLink :to="{ name: 'top' }">TOP</RouterLink> > 회원 리스트</p>
  <h3>회원 리스트</h3>
  <p>
    신규등록은
    <RouterLink :to="{ path: '/user/add' }">여기를</RouterLink> 클릭
  </p>
  <ul>
    <li v-for="user in users" :key="user.id" @click="goToDetail(user.id)">
      ID가 {{ user.id }}인 {{ user.name }} 님
    </li>
  </ul>
  <RouterView v-bind:key="$route.fullPath" />
</template>
