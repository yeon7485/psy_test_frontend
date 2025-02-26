<script setup>
import { defineProps } from "vue";

const props = defineProps({
  board: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <router-link :to="`/board/${board.idx}`" id="board_item" class="board-card">
    <div class="board-id">{{ board.idx }}</div>
    <div class="board-title">{{ board.title }}</div>
    <div class="board-writer">{{ board.writer }}</div>
    <div class="board-comments">💬 {{ board.commentCount }}</div>
  </router-link>
</template>

<style scoped>
.board-card {
  display: flex;
  align-items: center;
  padding: 20px 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: 0.2s;
  background: #fff;
  white-space: nowrap;
  text-decoration: none;
  color: black;
}

.board-card:hover {
  background: #f9f9f9;
}

.board-id {
  width: 10%;
  text-align: center;
  font-weight: bold;
  color: slateblue;
}

.board-title {
  flex: 1;
  cursor: pointer;
  text-align: left;
}

.board-title:hover {
  text-decoration: underline;
}

.board-writer {
  width: 20%;
  text-align: center;
}

.board-comments {
  width: 15%;
  text-align: center;
  font-size: 14px;
}
</style>
