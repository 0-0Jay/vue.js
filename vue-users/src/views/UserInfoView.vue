<script setup>
import { RouterLink, useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import axios from "axios";

const route = useRoute();
const userId = route.params.id;
const info = ref({});
const fakeServer = "https://jsonplaceholder.typicode.com";
const getUserInfo = async (id) => {
  const res = await axios
    .get(`${fakeServer}/users/${id}`)
    .catch((err) => console.log(err));
  info.value = res.data;
};

onBeforeMount(() => {
  getUserInfo(userId);
});
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink to="/">TOP</RouterLink> >
    <RouterLink to="/user/list">회원 리스트</RouterLink> > 회원 상세 정보
  </p>
  <h3>회원 상세 정보</h3>
  <div>
    <div><span>ID </span>{{ info.id }}</div>
    <div><span>이름 </span>{{ info.name }}</div>
    <div><span>이메일 </span>{{ info.email }}</div>
    <div><span>연락처 </span>{{ info.phone }}</div>
  </div>
</template>
<style>
span {
  font-weight: bold;
}
</style>
