<script setup>
import { defineProps } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <p>{{ item.idx }}</p>
    <p>{{ item.title }}</p>
    <p>{{ item.writer }}</p>
  </div>
</template>

<style scoped></style>
