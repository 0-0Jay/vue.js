import { defineStore } from "pinia";
import axios from "axios";

export const useBoardStore = defineStore("board", {
  state: () => ({
    posts: [],
    currentPost: {},
    error: "",
  }),

  actions: {
    // 목록
    async fetchPost() {
      try {
        const response = await axios.get("/api/boards");
        this.posts = response.data;
        this.error = "";
      } catch (err) {
        this.error = "게시글 목록을 가져오는데 실패했습니다.";
        console.error(err);
      }
    },
    // 상세
    async fetchPostDetail(id) {
      try {
        const response = await axios.get(`/api/boards/${id}`);
        this.currentPost = response.data;
      } catch (err) {
        this.error = "게시글 상세정보를 가져오는데 실패했습니다.";
        console.error(err);
      }
    },
    // 저장
    async savePost(postData, board_id = null) {
      if (board_id) {
        // 수정
        await axios.put(`/api/boards/${board_id}`, postData);
        return true;
      } else {
        // 등록
        await axios.post("/api/boards", postData);
        return true;
      }
    },
    // 삭제
    async deletePost(board_id) {
      await axios.delete(`/api/boards/${board_id}`);
      this.fetchPost();
    },
  },
});
