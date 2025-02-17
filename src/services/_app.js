import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 60000,
});

const PUBLIC_URL = [
  "/api/admin/home",
  "/api/admin/home/:id",
  "/api/admin/about/",
  "/api/admin/about/:id",
  "/api/admin/services/",
  "/api/admin/services/:id",
  "/api/admin/contact/",
  "/api/admin/contact/:id",
  "/api/admin/experiance/",
  "/api/admin/experiance/:id",
  "/api/admin/website/",
  "/api/admin/website/id",
];

API.interceptors.request.use(
  (config) => {
    const authToken = sessionStorage.getItem("token");
    if (
      !PUBLIC_URL.some((endpoint) => config.url.includes(endpoint)) &&
      authToken
    ) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
