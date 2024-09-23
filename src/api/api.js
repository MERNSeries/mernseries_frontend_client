import axios from "axios";

const api = axios.create({
  baseURL: "https://mernseriesbackendapi.vercel.app/api",
});

export default api;
