<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToBoard = () => {
  router.push("/board");
};
</script>

<template>
  <div class="container">
    <button @click="goToBoard" class="btn">게시판 바로가기</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 1rem 4rem;
  background-color: slateblue;
  color: white;
  border: none;
  font-size: 1.2rem;
  border-radius: 0.8rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: darkslateblue;
}
</style>
