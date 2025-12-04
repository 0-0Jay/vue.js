<script setup>
import { ref, reactive, computed, watch } from "vue";
// ref : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//     1) 데이터 타입과 무관
//     2) 재할당 가능
// reactive : CRUD가 가능한 반응형 객체를 만드는 함수 중 하나
//     1) 데이터 중 객체, 배열만 가능
//     2) 재할당 불가능
// computed : ReadOnly만 가능한 반응형 객체를 만드는 함수
let msg = "hello world";

const now = new Date();
const nowStr = now.toLocaleTimeString();

let timeStr = nowStr; // 일반 변수
const timeStrRef = ref(nowStr); // 반응형 객체 : 값을 감싸는 형태

function changeTime() {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStr = newTimeStr;
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000);
</script>

<template>
  <ComputedReactive />
</template>

<style scoped></style>
