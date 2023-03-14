import axios from "axios";

const BASE_URL = "https://api.exchangerate.host";

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
