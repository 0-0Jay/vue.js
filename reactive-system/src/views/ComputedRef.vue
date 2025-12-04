<script setup>
import { ref, computed } from "vue";
// computed => 결과값 (readonly만 가능)
// => 어떤 값이 결정되면 자동으로 계산되어 결정되는 다른 값들
const price = ref(0);
const supply = computed(() => {
  return price.value * 0.9;
});
const tax = computed(() => {
  return price.value - supply.value;
});

const radiusInit = Math.round(Math.random() * 10);
const radius = ref(radiusInit);
const PI = ref(3.14);

const area = computed(() => {
  return radius.value * radius.value * PI.value;
});
</script>
<template>
  <h2>영수증</h2>
  <span>제품가격</span><input type="number" v-model="price" />
  <p>공급가액 : {{ supply }}</p>
  <p>부가세 : {{ tax }}</p>
  <p>소비자가 : {{ price }}</p>
  <hr />
  <h2>원의 면적</h2>
  <p>반지름이 {{ radius }} 이고</p>
  <p>원주율 {{ PI }}인 원의 면적은 {{ area }}</p>
</template>
