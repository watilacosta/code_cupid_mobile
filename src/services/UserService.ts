import api from "@/utils/api";
import { User } from "@/models/User";
import { useAuthStore } from "@/store/auth";

const authStore = useAuthStore();

class UserService {
  update(user: User): Promise<any> {
    const { id, username, phone_number, birthdate, email } = user;

    return api({
      method: "put",
      url: `/user_profiles/${id}`,
      headers: { Authorization: authStore.getAuthToken },
      data: { user: { username, phone_number, birthdate, email } }
    });
  }
}

export default new UserService();