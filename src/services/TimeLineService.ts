import { useAuthStore } from "@/store/auth";
import api from "@/utils/api";

const authStore = useAuthStore();

class TimeLineService {
  list(): Promise<{ data: any[] }> {
    return api(
      {
        method: 'get',
        url: '/timeline',
        headers: { Authorization: authStore.getAuthToken },
        params: {
          timeline: {
            search: '*',
            min_age: 18,
            max_age: 120,
            gender: 'female'
          }
        }
      }
    )
  }
}

export default new TimeLineService();