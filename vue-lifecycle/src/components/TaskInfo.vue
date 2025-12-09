<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  item: Object,
});

const emit = defineEmits(["taskChecked", "delTask"]);
const checked = () => {
  emit("taskChecked", props.item.no);
};

const delElement = () => {
  emit("delTask", props.item.no);
};
</script>
<template>
  <li v-bind:class="{ checked: item.complete }" v-on:click="checked()">
    {{ item.task }}
    <span v-on:click="delElement()" class="close">×</span>
  </li>
</template>
