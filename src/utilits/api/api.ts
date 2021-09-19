import axios from "axios"
import { ACCESS_TOKEN } from "../constants"

export const api = axios.create({
  baseURL: "http://188.68.220.61/api/",
  headers: {
    // "Content-Type": "application/JSON"
    "Accept": "application/json"
  }
})

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem(ACCESS_TOKEN)
  config.headers.Authorization = token ? `Bearer ${token}` : ""
  return config
})