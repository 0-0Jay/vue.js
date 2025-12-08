<template>
  <h1>컴포넌트 기초</h1>
  <p>{{ startName }}/별점 : {{ startPoint }}</p>
  <button v-on:click="createStartPoint('부모')">임의값 생성</button>
  <section>
    <h2>컴포넌트 1개</h2>
    <!-- <OneSection title="홍길동" content="반갑습니다." /> -->
    <OneSection v-on:callStarPoint="createStartPoint" />
  </section>
  <section>
    <h2>컴포넌트 여러개</h2>
    <OneSection
      v-for="post in postList"
      v-bind:title="post.name"
      v-bind:content="post.content"
      v-on:callStarPoint="createStartPoint"
    />
  </section>
</template>
<script setup>
import { ref, reactive } from "vue";
import OneSection from "@/components/OneSection.vue";

const postList = reactive([
  { name: "김민교", content: "Hello" },
  { name: "김상우", content: "Good" },
  { name: "이한나", content: "Morning" },
]);

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
