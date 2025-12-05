<script setup>
import { ref } from "vue";

const score = ref(80);
const getRandomValue = () => {
  score.value = Math.round(Math.random() * 60) + 40; // 40 ~ 100
};

const point = ref(100);
const checked = ref(false);
</script>
<template>
  <button v-on:click="getRandomValue">Random 점수</button>
  <p>{{ score }}</p>
  <p v-if="score >= 90">A학점</p>
  <p v-else-if="score >= 80">B학점</p>
  <p v-else-if="score >= 70">C학점</p>
  <p v-else>F학점</p>
  <hr />
  <input type="text" v-model="point" />
  <p name="VVIP" v-if="point >= 300">점수 {{ point }}은 우수 고객입니다.</p>
  <p name="SVIP" v-else-if="point >= 200">
    점수 {{ point }}은 일반 고객입니다.
  </p>
  <p name="VIP" v-else>점수 {{ point }}은 신규 고객입니다.</p>
  <hr />
  <input type="checkbox" v-model="checked">동의</input>
  <!-- show는 style을 건든다. display:none -->
  <p v-show="checked">다음 단계로 진행하시면 됩니다.</p>
</template>
