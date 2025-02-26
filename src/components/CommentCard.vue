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
  <div class="comment-card">
    <p class="comment-writer">작성자 : {{ comment.writer }}</p>
    <p class="comment-content">{{ comment.content }}</p>
  </div>
</template>

<style scoped>
.comment-card {
  background-color: #f9f9f9; /* 배경색 */
  border-radius: 8px; /* 둥근 테두리 */
  padding: 1.2rem 1.5rem;
  margin-bottom: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1); /* 가벼운 그림자 */
}

.comment-writer {
  font-weight: bold;
  color: #333;
  margin-bottom: 3px;
  font-size: 0.8rem;
  margin: 0 0 0.5rem 0;
}

.comment-content {
  color: #555;
  font-size: 14px;
  margin: 0;
}
</style>
