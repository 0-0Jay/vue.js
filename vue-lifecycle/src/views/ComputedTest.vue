<script setup>
import { ref, computed } from "vue";

const cocktailList = [
  { id: 1, name: "화이트레이디", price: 1200 },
  { id: 2, name: "블루하와이", price: 1500 },
  { id: 3, name: "뉴욕", price: 1100 },
  { id: 4, name: "마티니", price: 1500 },
];

const cocktailNo = ref(0);
const priceMsg = computed(() => {
  if (cocktailNo.value >= cocktailList.length) {
    return "해당 칵테일은 없습니다.";
  } else {
    const cocktail = cocktailList[cocktailNo.value];
    return `해당 칵테일은 ${cocktail.name}이며 가격은 ${cocktail.price}입니다.`;
  }
});

setInterval(() => {
  cocktailNo.value = Math.round(Math.random() * 3);
}, 1000);
</script>
<template>
  <p>현재 칵테일 번호 : {{ cocktailNo }}</p>
  <p>{{ priceMsg }}</p>
</template>
