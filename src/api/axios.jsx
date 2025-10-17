import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
  withCredentials: true // important for cookies
});

export default API;
