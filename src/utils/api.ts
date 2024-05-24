import { CapacitorHttp, HttpParams, HttpResponse } from '@capacitor/core';

const baseUrl = "http://192.168.1.11:3000/api/v1"

export const httpGet = async (path: string, params = {}) => {
	const options = {
		url: `${baseUrl}${path}`,
		headers: { "Content-Type": "application/json" },
		params
	}

	const response: HttpResponse = await CapacitorHttp.get(options)
	return response;
};

export const httpPost = async (path: string, payload = {}) => {
	const options = {
		url: `${baseUrl}${path}`,
		headers: { "Content-Type": "application/json" },
		data: payload
	}

  const response: HttpResponse = await CapacitorHttp.post(options)
  return response;
};

export const httpRequest = async (path: string, payload = {}) => {
	console.log(payload)
	const options = {
		url: `${baseUrl}${path}`,
		headers: { "Content-Type": "application/json" },
		data: payload,
		params: payload.params,
		method: payload.method
	}
	const response: HttpResponse = await CapacitorHttp.request(options)
	return response
}
