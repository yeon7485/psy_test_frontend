import { defineStore } from "pinia";
import axios from "axios";

const backend = "/api";

export const useBoardStore = defineStore("board", {
  actions: {
    async getBoardList(page) {
      const response = await axios.get(
        backend + "/board/list?page=" + page + "&size=10"
      );

      return response.data.data;
    },
    async getBoardDetail(idx) {
      const response = await axios.get(backend + "/board/read/" + idx);

      return response.data.data;
    },
    async createBoard(boardData) {
      const response = await axios.post(backend + "/board/create", boardData);
      if (response.status === 200) {
        return response.data;
      } else {
        return false;
      }
    },
  },
});
