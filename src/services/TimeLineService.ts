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
          search: '*',
          age: 18,
          gender: 'female'
        }
      }
    )
  }
}

export default new TimeLineService();