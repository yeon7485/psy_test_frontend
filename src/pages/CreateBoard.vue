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
  <div>
    <div class="write_item">
      <p>제목</p>
      <div class="input">
        <input
          type="text"
          placeholder="제목을 입력해주세요."
          v-model="boardData.title"
        />
      </div>
    </div>
    <div class="write_item">
      <p>작성자</p>
      <div class="input">
        <input
          type="text"
          placeholder="작성자를 입력해주세요."
          v-model="boardData.writer"
        />
      </div>
    </div>
    <div class="write_item">
      <p>내용</p>
      <div class="input_contents">
        <textarea
          name="contents"
          placeholder="내용을 입력해주세요."
          v-model="boardData.contents"
        >
        </textarea>
      </div>
    </div>

    <button @click="create">등록</button>
  </div>
</template>

<style scoped></style>
