import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useBoardStore = defineStore("board", {
  actions: {
    // 게시글 전체 조회
    async getBoardList(page) {
      const response = await axios.get(
        backend + "/board/list?page=" + page + "&size=10"
      );

      if (response.status === 200) {
        return response.data.data;
      } else {
        return false;
      }
    },

    // 게시글 상세 조회
    async getBoardDetail(idx) {
      const response = await axios.get(backend + "/board/read/" + idx);

      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    },

    // 게시글 작성
    async createBoard(boardData) {
      const response = await axios.post(backend + "/board/create", boardData);
      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    },

    // 댓글 작성
    async addComment(boardIdx, commentData) {
      const response = await axios.post(
        backend + "/board/comment/" + boardIdx,
        commentData
      );
      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    },
  },
});
