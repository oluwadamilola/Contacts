import axios from "axios";

const BASE_API_URL = "http://localhost:3005";

const api = axios.create({
    baseURL: BASE_API_URL,
    headers: {"Access-Control-Allow-Origin": "*"}

});

export default api;