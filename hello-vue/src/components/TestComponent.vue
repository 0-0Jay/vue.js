<script setup>
import { ref } from "vue";
// ref : vue 관련 객체를 생성하는 함수
const message = ref("메세지를 입력해주세요!");
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="message" />
    <!-- directive : 태그를 컨트롤하는 vue의 속성. v- 접두어 -->
  </div>
</template>
<style></style>
