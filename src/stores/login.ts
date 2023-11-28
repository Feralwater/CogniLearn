import { defineStore } from 'pinia';
import router from "@/router";
export const useLoginStore = defineStore('login', {
  state: () => ({
    user: "",
    isAuthenticated: false,
  }),

  actions: {
    login(userName: string) {
      this.isAuthenticated = true;
      this.user = userName;
    },

    logout() {
      this.isAuthenticated = false;
      this.user = "";
      router.push({ name: "login" });
    },
  },
});
