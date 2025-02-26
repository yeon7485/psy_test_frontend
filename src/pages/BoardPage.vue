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

const goToCreate = () => {
  router.push("/board/create");
};
</script>

<template>
  <div class="container">
    <h1 class="title">게시판</h1>
    <div class="write_box">
      <button @click="goToCreate" class="write_btn">글 작성</button>
    </div>

    <div class="board-header">
      <div class="board-id">번호</div>
      <div class="board-title">제목</div>
      <div class="board-writer">작성자</div>
      <div class="board-comments">댓글 수</div>
    </div>
    <div class="board-list">
      <BoardCard v-for="board in boardList" :key="board.id" :board="board" />
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

.title {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
}

.write_box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.write_btn {
  border-radius: 0.5rem;
  padding: 0.8rem 1.5rem;
  background-color: slateblue;
  color: white;
  font-size: 1rem;
  border: none;
  transition: background-color 0.3s;
}

.write_btn:hover {
  background-color: darkslateblue;
}

.board-header {
  display: flex;
  align-items: center;
  padding: 20px 12px;
  transition: 0.2s;
  background: #fff;
  white-space: nowrap;
  text-decoration: none;
  font-weight: bold;
}

.board-id {
  width: 10%;
  text-align: center;
  font-weight: bold;
}

.board-title {
  flex: 1;
  cursor: pointer;
  text-align: left;
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

.board-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
