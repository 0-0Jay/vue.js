<script setup>
import { ref } from "vue";

const array = ["마우스", "키보드", "USB", "마우스패드"];
const itemList = ref(array);
const friends = ref(["홍길동", "김명선"]);
let newFriend = ref("박우석");

const addNewFriend = () => {
  friends.value.push(newFriend.value.trim());
  newFriend.value = "";
};
</script>
<template>
  <h2>전자기기 목록</h2>
  <ul>
    <li v-for="item in itemList">{{ item }}</li>
  </ul>
  <h2>친구 목록</h2>
  새로운 친구 :
  <input type="text" v-model="newFriend" v-on:change="addNewFriend" />
  <ul>
    <li v-for="(name, idx) in friends" v-bind:key="name">
      {{ `${idx} : ${name}` }}
    </li>
  </ul>
</template>
