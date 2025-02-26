<script setup>
import { defineProps } from "vue";

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <p>{{ comment.content }}</p>
    <p>{{ comment.writer }}</p>
  </div>
</template>

<style scoped></style>
