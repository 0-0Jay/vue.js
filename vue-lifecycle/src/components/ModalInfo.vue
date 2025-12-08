<script setup>
import ModalLayout from "@/layouts/ModalLayout.vue";
</script>

<template>
  <ModalLayout>
    <template v-slot:default>
      <p>관리자에게 문의하세요!</p>
    </template>
    <template v-slot:footer>
      <button v-on:click="">예</button>
      <button v-on:click="">문의하기로</button>
    </template>
  </ModalLayout>
</template>
