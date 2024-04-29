import axios from "axios";




export const baseUrl = "http://localhost:8080/api/";

export default function login(param) {
  return axios.post(baseUrl + "login", param);
}

export function register(param) {
  return axios.post(baseUrl + "register", param);
}






