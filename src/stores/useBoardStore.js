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
    // async getCourseDetail(idx) {
    //   const response = await axios.get(backend + "/course/" + idx);

    //   return response.data;
    // },

    // async registerCourseDetail(course) {
    //   const response = await axios.post(
    //     backend + "/course/register",
    //     toRaw(course),
    //     { withCredentials: true }
    //   );

    //   if (response.status === 200) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
  },
});
