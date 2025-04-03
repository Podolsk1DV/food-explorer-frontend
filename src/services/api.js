import axios from "axios";

export const api = axios.create({
  baseURL: 'https://food-explorer-backend-api-y9p1.onrender.com'
});
