<script setup>
import { RouterLink, useRouter } from "vue-router";
import { reactive } from "vue";
import axios from "axios";
import { useCounterStore } from "@/stores/counter";

const router = useRouter(); // vue-router 자체 호출
const fakeServer = "https://jsonplaceholder.typicode.com";
const info = reactive({
  id: "",
  name: "",
  email: "",
  phone: "",
});

const counterStore = useCounterStore();
const { increment } = counterStore;

const addUser = async () => {
  // router.push({ name: "userList" });
  let res = await axios
    .post(`${fakeServer}/users`, info)
    .catch((err) => console.log(err));
  info.id = res.data.id;
  increment();
};
</script>
<template>
  <h1>회원 관리</h1>
  <p>
    <RouterLink to="/">TOP</RouterLink> >
    <RouterLink to="/user/list">회원 리스트</RouterLink> > 회원 정보 추가
  </p>
  <h3>회원 정보 추가</h3>
  <div>
    <h4>정보를 입력하고 등록 버튼을 클릭해주세요</h4>
    <div><span>ID</span><input type="text" v-model="info.id" readonly /></div>
    <div><span>이름</span><input type="text" v-model="info.name" /></div>
    <div><span>메일 주소</span><input type="email" v-model="info.email" /></div>
    <div><span>연락처</span><input type="text" v-model="info.phone" /></div>
    <button type="button" @click="addUser">등록</button>
  </div>
</template>
