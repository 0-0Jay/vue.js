<script setup>
import { ref, computed } from "vue";
// Data
const randValue = ref("시작 전");

// 이벤트 핸들러
const onClickfnc = () => {
  const rand = Math.round(Math.random() * 100);
  randValue.value = rand;
};

// const selectTag = (event) => {
//   let selectedTag = event.currentTarget.tagName;
//   if (selectedTag == "A") event.preventDefault();
//   alert(`Tag : ${selectedTag}`);
// };

const selectTag = (selectedTag) => {
  alert(`Tag : ${selectedTag}`);
};
</script>
<template>
  <div>
    <button v-on:mouseover="onClickfnc" v-on:click="randValue = '멀티이벤트'">
      클릭
    </button>
    <p>결과 : {{ randValue }}</p>
  </div>
  <br />
  <div v-on:click="selectTag('div')">
    div
    <form v-on:click.stop.self="selectTag('form')">
      form
      <a href="https://www.naver.com" v-on:click.prevent="selectTag()">
        <p v-on:click.once="selectTag('p')">네이버</p>
      </a>
    </form>
  </div>
  <br />
  <input v-on:keyup.ctrl.enter="selectTag('input')" />
</template>
