import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
	state: () => ({
		userIsAuthenticated: false,
		authToken: ""
	}),

	getters: {
		getAuthToken: (state) => state.authToken,
		isAuthenticated: (state) => state.userIsAuthenticated,
	},

	actions: {
		authenticate() {
			this.userIsAuthenticated = true
		},

		setAuthToken(token: string) {
			this.authToken = token
		},

		logout() {
			this.authToken = ""
			this.userIsAuthenticated = false
		},
	},
	persist: true
})
