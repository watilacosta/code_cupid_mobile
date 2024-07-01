import { useAuthStore } from "@/store/auth";
import api from "@/utils/api";

const authStore = useAuthStore();

class LikeService {
  like(reaction: Object): Promise<{ data: Object }> {
    return api({
      method: 'post',
      url: '/likes',
      headers: { Authorization: authStore.getAuthToken },
      data: { like: reaction }
    })
  }
}

export default new LikeService()