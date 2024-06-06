import api from "@/utils/api";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();

class PlanService {
	list(): Promise<{ data: any[] }> {
		return api({
			method: 'get',
			url: '/plans',
			headers: { Authorization: authStore.getAuthToken }
		})
	}
}

export default new PlanService()