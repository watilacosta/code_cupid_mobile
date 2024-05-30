import api from 'axios'

export default api.create({
  baseURL: 'http://192.168.1.11:3000/api/v1',
  timeout: 5000,
  headers: { "Content-Type": "application/json" }
})