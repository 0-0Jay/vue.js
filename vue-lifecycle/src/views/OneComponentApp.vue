<template>
  <h1>컴포넌트 기초</h1>
  <p>{{ startName }}/별점 : {{ startPoint }}</p>
  <button v-on:click="createStartPoint('부모')">임의값 생성</button>
  <section>
    <h2>컴포넌트 1개</h2>
    <section class="box">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <p><button v-on:click="createStartPoint('자식')">임의값 생성</button></p>
    </section>
  </section>
  <section>
    <h2>컴포넌트 1개</h2>
    <section class="box">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
      <p><button v-on:click="createStartPoint('자식')">임의값 생성</button></p>
    </section>
  </section>
</template>
<script setup>
import { ref } from "vue";

const title = ref("Hello, World");
const content = ref("No Content");
const startName = ref("초기값");
const point = Math.ceil(Math.random() * 5);
const startPoint = ref(point);
const createStartPoint = (name) => {
  startPoint.value = Math.ceil(Math.random() * 5);
  startName.value = name;
};
</script>
<style>
section {
  border: green 3px dashed;
  margin: 10px;
}
</style>
