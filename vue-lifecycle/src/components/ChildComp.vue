<script setup>
import { inject } from "vue";

const message = inject("message");
</script>
<template>
  <p>{{ message }}</p>
</template>
