<script setup>
import { RouterLink, RouterView } from "vue-router";
import ModalInfo from "./components/ModalInfo.vue";
</script>

<template>
  <RouterLink to="/computed">Computed</RouterLink> |
  <RouterLink to="/watch">Watch</RouterLink> |
  <RouterLink to="/lifecyclehook">LifecycleHook</RouterLink> |
  <RouterLink to="/onecomp">OneComponentApp</RouterLink> |
  <RouterLink to="/parentcomp">ParentComponentApp</RouterLink> |
  <RouterLink to="/rootcomp">RootComp</RouterLink> |
  <RouterLink to="/todolist">TodoList</RouterLink>
  <br />
  <RouterView />
  <ModalInfo />
</template>

<style scoped></style>
