import api from "axios"

export default api.create({
	baseURL: "http://0.0.0.0:3000/api/v1",
	headers: {
		Authorization: sessionStorage.getItem("token"),
		"Content-Type": "application/json"
	}
})
