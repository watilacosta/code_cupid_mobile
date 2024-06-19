import { defineStore } from "pinia";
import { Profile } from "@/models/Profile";

export const useTimelineProfiles = defineStore('timeline_profiles', {
	state: () => {
		return {
			profiles: [] as Array<Profile>,
		}
	},

	getters: {
		listProfiles: (state) => state.profiles,
	},

	actions: {
		setProfiles(payload: Array<Profile>) {
			this.profiles = payload;
		},
	},

	persist: true
})