import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:3000/",
  withCredentials: true,
});

export default api;
