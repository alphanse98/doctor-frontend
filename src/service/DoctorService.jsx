import { baseUrl } from "./AuthService";
import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    if (!config.url.endsWith("/login") && !config.url.endsWith("/register")) {
      config.headers["Authorization"] = localStorage.getItem("AuthToken");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default function getDoctor() {
  return axios.get(baseUrl + "getDoctor");
}

export  function addDoctor(Doctor) {
  return axios.post(baseUrl + "createDoctor",Doctor);
}

export  function deleteDoctor(Doctor) {
  return axios.post(baseUrl + "deleteDoctor",Doctor);
}

export  function updateDoctor(Doctor) {
  return axios.put(baseUrl + "updateDoctor",Doctor);
}

