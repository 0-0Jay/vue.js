<template>
  <form action="" @submit.prevent="submitForm">
    <div>
      <label for="title">제목</label>
      <input id="title" type="text" v-model="form.title" />
    </div>
    <div>
      <label for="author">작성자</label>
      <input id="author" type="text" v-model="form.author" />
    </div>
    <div>
      <label for="content">내용</label>
      <textarea id="content" v-model="form.content"></textarea>
    </div>
    <div>
      <button type="submit">{{ isNew ? "등록" : "수정" }}</button>
    </div>
  </form>
</template>
<script setup>
import { defineProps, defineEmits, reactive, watch } from "vue";

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ title: "", content: "", author: "" }),
  },
  isNew: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["submitted", "canceled"]);

const form = reactive({
  title: "",
  content: "",
  author: "",
});

watch(
  () => props.initialData,
  (newVal) => {
    form.title = newVal.title || "";
    form.content = newVal.title || "";
    form.author = newVal.title || "";
  },
  { immediate: true },
);

const submitForm = () => {
  if (!form.title || !form.content || !form.author) {
    alert("값을 입력해주세요.");
    return;
  }
  emit("submitted", { title: form.title, content: form.content, author: form.author });
};
</script>
