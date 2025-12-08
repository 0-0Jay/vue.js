<template>
  <section class="box">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <p><button v-on:click="randomVal">임의값 생성</button></p>
  </section>
</template>
<script setup>
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";
// defineProps(["title", "content"]);
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: [String, Object],
    default: "No content",
  },
});

const emit = defineEmits(["callStarPoint"]);
const randomVal = () => {
  emit("callStarPoint", "자식");
};
// const title = ref("Hello, World");
// const content = ref("No Content");
</script>
<style scoped>
section {
  border: blue 3px solid;
  margin: 10px;
}
</style>
