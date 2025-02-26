<script setup>
import { useRoute, useRouter } from "vue-router";
import BoardCard from "../components/BoardCard.vue";
import { onMounted, reactive, ref } from "vue";
import { useBoardStore } from "../stores/useBoardStore";

const route = useRoute();
const router = useRouter();
const page = ref(Number(route.query.page) || 0);

const boardList = ref([]);
const pageInfo = reactive({
  page: 0,
  size: 10,
  totalElements: 0,
  totalPages: 0,
  hasNext: false,
  hasPrevious: false,
});

const boardStore = useBoardStore();

onMounted(async () => {
  const result = await boardStore.getBoardList(page.value);
  console.log(result);
  boardList.value = result.boards;
  pageInfo.page = result.page;
  pageInfo.size = result.size;
  pageInfo.totalElements = result.totalElements;
  pageInfo.totalPages = result.totalPages;
  pageInfo.hasNext = result.hasNext;
  pageInfo.hasPrevious = result.hasPrevious;
});

const goToPage = (page) => {
  window.location.href = "/?page=" + page;
};
</script>

<template>
  <h1>Board</h1>
  <BoardCard v-for="board in boardList" :board="board" />
</template>

<style scoped></style>
