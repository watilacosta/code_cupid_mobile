import api from "@/utils/api";
import { useAuthStore } from "@/store/auth";
import {Plan} from "@/models/Plan";

const authStore = useAuthStore();

class PlanService {
	list(): Promise<{ data: Plan[] }> {
		return api({
			method: 'get',
			url: '/plans',
			headers: { Authorization: authStore.getAuthToken }
		})
	}
}

export default new PlanService()