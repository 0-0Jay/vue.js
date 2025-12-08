<script setup>
import { ref, watch } from "vue";
const cocktailNo = ref(0);
const priceMsg = ref("");
const getCocktailInfo = async (selectedNo) => {
  const cocktail = await fetch(
    `https://25d9dca9-9097-4324-8802-849cf3638260.mock.pstmn.io/cocktails/${selectedNo}`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return `해당 칵테일은 ${cocktail.name}이며 가격은 ${cocktail.price}입니다.`;
};
// watch : 특정 데이터가 변경될 경우 자동으로 이루어지는 작업
watch(cocktailNo, async (newVal, oldVal) => {
  console.log(`변경 전 : ${oldVal}, 변경 후 : ${newVal}`);
  priceMsg.value = await getCocktailInfo(cocktailNo.value);
});

setInterval(() => {
  cocktailNo.value = Math.round(Math.random() * 3);
}, 1000);
</script>
<template>
  <p>현재 칵테일 번호 : {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>
