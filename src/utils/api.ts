import api from 'axios'
import {useAuthStore} from "@/store/auth";

const authStore = useAuthStore()

export default api.create({
  baseURL: 'http://localhost:3000/api/v1',
  timeout: 5000,
  headers: {
    Authorization: authStore.getAuthToken,
    "Content-Type": "application/json"
  }
})