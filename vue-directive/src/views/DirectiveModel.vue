<template>
  <div>
    <input type="text" v-model.lazy="inputNameModel" />
    <p>{{ inputNameModel }}</p>
  </div>
  <hr />
  <div>
    <textarea v-bind:rows="rCount" v-model="textAreaInput"></textarea>
    <p v-html="textAreaInput.replace(/\n/g, '<br>')"></p>
    <br />
    <select v-model="memberType">
      <option value="일반">일반회원</option>
      <option value="우수">우수회원</option>
      <option value="특별">특별회원</option>
    </select>
    <p>{{ memberType }}</p>
    <br />
    <h2>checkbox 1개</h2>
    <label><input type="checkbox" v-model="isSelected" />동의</label>
    <p>{{ isSelected }}</p>
    <label
      ><input
        type="checkbox"
        v-model="gender"
        true-value="여"
        false-value="남"
      />성별</label
    >
    <p>{{ gender }}</p>
    <h2>checkbox n 개</h2>
    <label><input type="checkbox" value="1" v-model="selectOS" />macOS</label>
    <label><input type="checkbox" value="2" v-model="selectOS" />Windows</label>
    <label><input type="checkbox" value="3" v-model="selectOS" />Linux</label>
    <p>{{ selectOS }}</p>
    <h2>radio n 개</h2>
    <label><input type="radio" value="1" v-model="choiceOS" />macOS</label>
    <label><input type="radio" value="2" v-model="choiceOS" />Windows</label>
    <label><input type="radio" value="3" v-model="choiceOS" />Linux</label>
    <p>{{ choiceOS }}</p>
  </div>
</template>
<script setup>
import { ref } from "vue";
// model 디렉티브 -> computed 사용불가. readonly기 때문.
// v-model : 양방향 바인딩 ( HTML <=> Data )
//           <input>, <textarea>, <select>
//           기본적으로 value 속성에 자동 바인딩
const inputNameModel = ref("양방향");
const rCount = ref(5);
const textAreaInput = ref("입력하세요");
const memberType = ref("우수");
const isSelected = ref(null);
const gender = ref(null);
const selectOS = ref(["1", "3"]);
const choiceOS = ref(1);
</script>
<style scoped></style>
