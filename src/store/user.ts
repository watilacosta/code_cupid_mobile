import { User } from "@/models/User";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      currentUser: null as User | null,
    }
  },

  getters: {
    getCurrentUser: (state) => state.currentUser,
  },

  actions: {
    setCurrentUser(user: User) {
      this.currentUser = user;
    }
  },

  persist: true
})