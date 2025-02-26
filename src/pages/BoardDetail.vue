<script setup>
import { onMounted, ref } from "vue";
import { useBoardStore } from "../stores/useBoardStore";
import { useRoute } from "vue-router";
import CommentCard from "../components/CommentCard.vue";

const route = useRoute();
const boardIdx = route.params.idx;
const boardStore = useBoardStore();

const boardData = ref({});

onMounted(async () => {
  const result = await boardStore.getBoardDetail(boardIdx);
  console.log(result);
  boardData.value = result;
});
</script>

<template>
  <div>
    <div>
      <h3>{{ boardData.title }}</h3>

      <p>{{ boardData.writer }}</p>
      <p>{{ boardData.contents }}</p>
    </div>
    <div>
      <CommentCard v-for="comment in boardData.comments" :comment="comment" />
    </div>
  </div>
</template>

<style scoped></style>
