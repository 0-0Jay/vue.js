<script setup>
import { ref, reactive } from "vue";

const hong = ref({
  name: "Hong",
  age: 25,
  city: "Seoul",
});
let msg = `${hong.value.name} : ${hong.value.age}`;
console.log(msg);
let kang = reactive({
  name: "Kang",
  age: 30,
  city: "Daegu",
});
msg = `${kang.name} : ${kang.age}`;
console.log(msg);

const newObj = {
  name: "Lee",
  age: 32,
  city: "Jeju",
};
// hong.value = newObj;
// kang = newObj;
</script>
<template></template>
