<script setup>
import { ref, reactive } from "vue";

const friends = reactive([
  { id: "01", name: "홍길동", age: 22 },
  { id: "02", name: "김민식", age: 25 },
]);

const newFriend = ref({
  id: "03",
  name: "유재석",
  age: 30,
});

const addNewFriend = () => {
  friends.push(newFriend.value);
  let newId = Number(newFriend.value.id) + 1;
  newFriend.value = { id: newId };
};
</script>
<template>
  <p>이름 : <input type="text" v-model="newFriend.name" /></p>
  <p>나이 : <input type="number" v-model="newFriend.age" /></p>
  <p><button v-on:click="addNewFriend">친구추가</button></p>
  <h2>친구 목록</h2>
  <table border="1">
    <thead>
      <tr>
        <th>Id</th>
        <th>이름</th>
        <th>나이</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="info in friends" v-bind:key="info.id">
        <td>{{ info.id }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.age }}</td>
      </tr>
    </tbody>
  </table>
</template>
