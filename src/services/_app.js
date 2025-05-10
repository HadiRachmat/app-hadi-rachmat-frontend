import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 60000,
  withCredentials: true
});

const PUBLIC_URL = [
  "/api/admin/home",
  "/api/admin/about/",
  "/api/admin/services/",
  "/api/admin/contact/",
  "/api/admin/experiance/",
  "/api/admin/website/",
];

const isPublicUrl = (url) => {
  return PUBLIC_URL.some((endpoint) => {
    const regexId = new RegExp(`^${endpoint.replace(/:[a-zA-Z]+/g, "[^/]+")}`);
    return regexId.test(url);
  });
};

API.interceptors.request.use(
  (config) => {
    const authToken = sessionStorage.getItem("accessToken");

    if (!isPublicUrl(config.url) && authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Interception untuk refresh token
let refreshingPage = false;
let failedQueue = [];

const proccessQueue = (e, token = null) => {
  failedQueue.forEach((prom) => {
    if (e) {
      prom.reject(e);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

API.interceptors.response.use(
  (response) => response,
  async (e) => {
    const naturalRequest = e.config;

    if (e.response && e.response.status === 401 && !naturalRequest._retry) {
      naturalRequest._retry = true;

      if (refreshingPage) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({
            resolve: (token) => {
              naturalRequest.headers.Authorization = "Bearer " + token;
              resolve(API(naturalRequest));
            },
            reject: (e) => reject(e),
          });
        });
      }
      refreshingPage = true;
      try {
        const res = await API.post("/api/public/refresh-token", null, {
          withCredentials: true,
        });
        const createNewAccessToken =res.data.data.accessToken;
        sessionStorage.setItem("accessToken", createNewAccessToken);

        proccessQueue(null, createNewAccessToken)

        naturalRequest.headers.Authorization = "Bearer " + createNewAccessToken;
        return API(naturalRequest)
      } catch (e) {
        proccessQueue(e, null);

        sessionStorage.removeItem("accessToken");
        window.location.href = API + "/auth/login";
        return Promise.reject(e);
        
      } finally {
        refreshingPage = false
      }
    }
    return Promise.reject(e)
  }
);
export default API;
