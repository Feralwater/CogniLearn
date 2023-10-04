import { defineStore } from 'pinia';

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
    },
  },
});
