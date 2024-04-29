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

export default function getPatient() {
  return axios.get(baseUrl + "getPatient");
}

export  function addPatient(Patient) {
  return axios.post(baseUrl + "createPatient",Patient);
}

export  function deletePatient(Patient) {
  return axios.post(baseUrl + "deletePatient",Patient);
}

export  function updatePatient(Patient) {
  return axios.put(baseUrl + "updatePatient",Patient);
}

