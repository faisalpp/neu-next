import axios from 'axios'

// const isDev = import.meta.env.VITE_APP_DEV === "dev";
const isDev = '';
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";


export const regApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});


export const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshUrl = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/user/refresh` : "/api/user/refresh";

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalReq = error.config;

    if (
      (error.response.status === 401 || error.response.status === 500) &&
      originalReq &&
      !originalReq._isRetry
    ) {
      originalReq._isRetry = true;

      try {
        await axios.get(refreshUrl, {
          withCredentials: true,
        });

        return api.request(originalReq);
      } catch (error) {
        return error;
      }
    }
  }
);

regApi.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalReq = error.config;

    if (
      (error.response.status === 401 || error.response.status === 500) &&
      originalReq &&
      !originalReq._isRetry
    ) {
      originalReq._isRetry = true;

      try {
        await axios.get(refreshUrl);

        return api.request(originalReq);
      } catch (error) {
        return error;
      }
    }
  }
);
