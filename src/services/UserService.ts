import api from "@/utils/api";

class UserService {
  userProfile(): Promise<any> {
    return api.get('')
  }
}