<script setup>
import { reactive, computed } from "vue";
const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10),
});

const area = computed(() => {
  return data.radius * data.radius * data.PI;
});
</script>
<template>
  <h2>원의 면적</h2>
  <p>반지름이 {{ data.radius }} 이고</p>
  <p>원주율 {{ data.PI }}인 원의 면적은 {{ area }}</p>
</template>
