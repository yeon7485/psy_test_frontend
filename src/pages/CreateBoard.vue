<script setup>
import { ref } from "vue";
import { useBoardStore } from "../stores/useBoardStore";
import { useRouter } from "vue-router";

const router = useRouter();

const boardData = ref({
  title: "",
  contents: "",
  writer: "",
});

const boardStore = useBoardStore();

const create = async () => {
  const conf = confirm("등록하시겠습니까?");
  if (conf) {
    const result = await boardStore.createBoard(boardData.value);
    console.log(result);
    if (result.success) {
      alert(result.message);
      router.push("/");
    }
  }
};
</script>
<template>
  <div class="container">
    <h2 class="title">게시글 작성</h2>
    <div class="form">
      <!-- 제목 입력 -->
      <div class="form-group">
        <label for="title">제목</label>
        <input
          id="title"
          type="text"
          placeholder="제목을 입력해주세요."
          v-model="boardData.title"
        />
      </div>

      <!-- 작성자 입력 -->
      <div class="form-group">
        <label for="writer">작성자</label>
        <input
          id="writer"
          type="text"
          placeholder="작성자를 입력해주세요."
          v-model="boardData.writer"
        />
      </div>

      <!-- 내용 입력 -->
      <div class="form-group">
        <label for="contents">내용</label>
        <textarea
          id="contents"
          placeholder="내용을 입력해주세요."
          v-model="boardData.contents"
        ></textarea>
      </div>

      <!-- 등록 버튼 -->
      <button class="submit-btn" @click="create">등록</button>
    </div>
  </div>
</template>

<style scoped>
/* 전체 컨테이너 */
.container {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

/* 제목 */
.title {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* 폼 전체 스타일 */
.form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 입력 필드 그룹 */
.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* 입력 필드 스타일 */
.form-group input,
.form-group textarea {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border 0.3s;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: slateblue;
  outline: none;
}

/* 텍스트 영역 크기 조절 */
textarea {
  resize: vertical;
  min-height: 120px;
}

/* 버튼 스타일 */
.submit-btn {
  background-color: slateblue;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: darkslateblue;
}
</style>
