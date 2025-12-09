<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();
// action을 제외하고 state, getters를 저장소에 반환
const { count, doubleCount } = storeToRefs(counterStore);
// action은 바로 구조 분해 할당
const { increment } = counterStore;
</script>
<template>
  <h1>TOP</h1>
  <p>TOP</p>
  <h3>총 회원수 : {{ count }}명</h3>
  <p><RouterLink to="/user/list">회원 관리는 여기서</RouterLink></p>
</template>
