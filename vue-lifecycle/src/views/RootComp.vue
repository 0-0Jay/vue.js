<script setup>
import { ref, provide } from "vue";
import MiddleComp from "@/components/MiddleComp.vue";

const content = ref("여기에 입력하세요");
provide("message", content);
</script>
<template>
  <label>자식에게 전달할 값 : <input v-model="content" /></label>
  <MiddleComp />
</template>
