import { defineStore } from 'pinia';

interface User {
  name: string;
}

export const useLoginStore = defineStore('login', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),

  actions: {
    login(userInfo: User) {
      this.isAuthenticated = true;
      this.user = userInfo;
    },

    logout() {
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
