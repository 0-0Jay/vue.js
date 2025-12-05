<script setup>
// Directive : HTML TAG 제어 명령어
// v-bind : HTML TAG의 속성에 데이터를 바인드하는 디렉티브
//          단방향 바인딩만 가능(변수 => HTML)
import { ref, reactive, computed } from "vue";

const url = ref("https://vuejs.org");
const isDisabled = ref(true);
const imgAttributes = reactive({
  src: "./src/assets/logo.svg",
  alt: "vue 기본 로고",
  width: "150px",
});

// style 속성 : css 기반 항목도 값도 이미 정해져 있음.
const txtColor = ref("pink");
const backColor = ref("green");
const styleAttributes = reactive({
  color: "pink",
  backgroundColor: "green", // background-color
});

// class 속성
const msg = ref("Hello, world!");
const isTxtColorRed = ref(true);
const isBgColorBlue = ref(true);
const classStyles = reactive({
  txtColorRed: true,
  bgColorBlue: false,
  txtSize24: true,
});

const classInfo = ref("txtColorRed txtSize24");
</script>
<template>
  <h2>특정 속성의 경우</h2>
  <p v-html="url"></p>
  <p v-text="url"></p>
  <p>vuejs 공식사이트 : {{ url }}</p>
  <hr />
  <h2>일반속성</h2>
  <p><a href="https://vuejs.org">Vue.js 사이트</a></p>
  <p>
    <a
      v-bind:href="url"
      v-bind:style="{ color: txtColor, backgroundColor: backColor }"
      >Vue.js 사이트</a
    >
  </p>
  <p>
    <a
      v-bind:href="url + '/guide/introduction.html'"
      v-bind:style="styleAttributes"
      >Vue.js 가이드 페이지</a
    >
  </p>
  <p><button v-bind:disabled="isDisabled">동의합니다.</button></p>
  <p><img alt="vue 로고" v-bind="imgAttributes" /></p>
  <h2>Class 속성</h2>
  <p id="cp" v-bind:class="classInfo">{{ msg }}</p>
  <p v-bind:class="{ txtColorRed: isTxtColorRed, bgColorBlue: isBgColorBlue }">
    {{ msg }}
  </p>
  <p v-bind:class="classStyles">{{ msg }}</p>
</template>
<style scoped>
.txtColorRed {
  color: red;
}
.txt-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.txtSize24 {
  font-size: 24px;
}
</style>
