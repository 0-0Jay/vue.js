<template>
  <div>
    <h3 v-if="isNew">게시글 등록</h3>
    <h3 v-else-if="isEditMode">게시글 수정</h3>
    <h3 v-else>글상세</h3>
    <PostForm
      v-if="isNew || isEditMode"
      v-bind:initial-data="isNew ? {} : store.currentPost"
      v-bind:is-new="isNew"
      @submitted="handleSave"
    ></PostForm>
    <div v-else>
      <!-- 조회 -->
      <h3>제목 : {{ store.currentPost.title }}</h3>
      <p>작성자 : {{ store.currentPost.author }} | 작성일 : {{ store.currentPost.create_date }}</p>
      <p>{{ store.currentPost.content }}</p>

      <div class="actions">
        <button @click="isEditMode = true">수정</button>
        <button @click="handleDelete">삭제</button>
      </div>
    </div>
    <button @click="router.push({ name: 'List' })">목록으로</button>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import PostForm from "../components/PostForm.vue";
import { useBoardStore } from "@/stores/board";

const route = useRoute();
const router = useRouter();
const store = useBoardStore();

// 글 등록
const isEditMode = ref(false);
const isNew = computed(() => route.name == "New");

onMounted(() => {
  store.fetchPostDetail(route.params.id);
});

const handleSave = async (postData) => {
  const board_id = route.params.id;
  await store.savePost(postData, board_id);
  if (isNew.value) {
    alert("등록되었습니다!");
    router.push({ name: "List" });
  } else {
    alert("수정되었습니다!");
    isEditMode.value = false;
    store.fetchPostDetail(route.params.id);
  }
};

const handleDelete = async () => {
  await store.deletePost(route.params.id);
  alert("삭제되었습니다!");
  router.push({ name: "List" });
};
</script>
