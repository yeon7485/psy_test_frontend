<script setup>
import { onMounted, ref } from "vue";
import { useBoardStore } from "../stores/useBoardStore";
import { useRoute, useRouter } from "vue-router";
import CommentCard from "../components/CommentCard.vue";

const route = useRoute();
const router = useRouter();
const boardIdx = route.params.idx;
const boardStore = useBoardStore();

const boardData = ref({});

const commentData = ref({
  content: "",
  writer: "",
});

const createComment = async () => {
  const result = await boardStore.addComment(boardIdx, commentData.value);
  if (result.success) {
    alert(result.message);
    fetchBoard();
  }
};

const fetchBoard = async () => {
  const result = await boardStore.getBoardDetail(boardIdx);
  if (result.success) {
    boardData.value = result.data;
  }
};

onMounted(async () => {
  fetchBoard();
});
</script>

<template>
  <div class="board-detail">
    <!-- 게시글 정보 -->
    <div class="board-info">
      <h3 class="board-title">{{ boardData.title }}</h3>
      <p class="board-writer">작성자: {{ boardData.writer }}</p>
      <p class="board-contents">{{ boardData.contents }}</p>
    </div>

    <div class="line"></div>

    <div class="comment_box">
      <p>댓글</p>
      <!-- 댓글 목록 -->
      <div class="comments-list">
        <CommentCard
          v-for="comment in boardData.comments"
          :key="comment.id"
          :comment="comment"
        />
      </div>
      <!-- 댓글 작성 폼 -->
      <div class="comment-form">
        <div class="write-item">
          <div class="input-group">
            <label for="writer">작성자</label>
            <input
              type="text"
              id="writer"
              placeholder="작성자를 입력해주세요."
              v-model="commentData.writer"
              class="input-field"
            />
          </div>
          <div class="input-group">
            <label for="comment">내용</label>
            <textarea
              id="comment"
              placeholder="내용을 입력해주세요."
              v-model="commentData.content"
              class="textarea-field"
            ></textarea>
          </div>
          <button @click="createComment" class="submit-btn">등록</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.board-info {
  margin-bottom: 30px;
}

.board-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.board-writer {
  font-size: 16px;
  color: #888;
  margin-bottom: 10px;
}

.board-contents {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
}

.comment_box {
  padding: 0 1rem;
}

.comment_box > p {
  margin-top: 30px;
}

.comment-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin: 30px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.1);
}

.write-item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-group {
  display: flex;
  font-size: 0.8rem;
  flex-direction: column;
}

.input-group label {
  font-size: 0.8rem;
  margin-bottom: 5px;
}

.input-field,
.textarea-field {
  padding: 10px;
  font-size: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.input-field:focus,
.textarea-field:focus {
  outline: none;
  border-color: slateblue;
}

.textarea-field {
  min-height: 60px;
  resize: none;
}

.submit-btn {
  padding: 10px 15px;
  background-color: slateblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.8rem;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: darkslateblue;
}

.comments-list {
  margin-top: 20px;
}
</style>
