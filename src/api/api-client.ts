import axios, { AxiosInstance } from "axios";

export const apiClient: AxiosInstance = axios.create({
  baseURL: "/api",
  responseType: "json",
  timeout: 30_000,
  headers: {
    "x-sym-platform": "web",
  },
});
