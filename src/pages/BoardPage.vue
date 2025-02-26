<script setup>
import { useRoute, useRouter } from "vue-router";
import BoardCard from "../components/BoardCard.vue";
import { computed, onMounted, reactive, ref } from "vue";
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

const fetchBoardList = async (pageNumber) => {
  const result = await boardStore.getBoardList(pageNumber);
  console.log(result);
  boardList.value = result.boards;
  pageInfo.page = result.page;
  pageInfo.size = result.size;
  pageInfo.totalElements = result.totalElements;
  pageInfo.totalPages = result.totalPages;
  pageInfo.hasNext = result.hasNext;
  pageInfo.hasPrevious = result.hasPrevious;
};

onMounted(async () => {
  await fetchBoardList(page.value);
});

const goToPage = (pageNumber) => {
  if (pageNumber < 0 || pageNumber >= pageInfo.totalPages) return;
  fetchBoardList(pageNumber);
};

const goToCreate = () => {
  router.push("/board/create");
};

const pageNumbers = computed(() => {
  const totalPages = pageInfo.totalPages;
  const currentPage = pageInfo.page;
  const pagesToShow = 5; // 한 번에 표시할 페이지 수

  const start = Math.floor(currentPage / pagesToShow) * pagesToShow;
  const end = Math.min(start + pagesToShow, totalPages);

  return Array.from({ length: end - start }, (_, i) => start + i);
});

console.log(page);
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

    <!-- 페이지네이션 -->
    <div class="pagination">
      <button
        @click="goToPage(pageInfo.page - 1)"
        :disabled="!pageInfo.hasPrevious"
      >
        ◀ 이전
      </button>

      <button
        v-for="num in pageNumbers"
        :key="num"
        @click="goToPage(num)"
        :class="{ active: num === pageInfo.page }"
      >
        {{ num + 1 }}
      </button>

      <button
        @click="goToPage(pageInfo.page + 1)"
        :disabled="!pageInfo.hasNext"
      >
        다음 ▶
      </button>
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

/* 페이지네이션 스타일 */
.pagination {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
}
.pagination button {
  padding: 10px 15px;
  font-size: 14px;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 5px;
}

.pagination button:hover {
  background: #ddd;
}

.pagination .active {
  background: slateblue;
  color: white;
  font-weight: bold;
}

.pagination button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
