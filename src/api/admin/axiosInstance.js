import axios from 'axios'

const baseUrl = process.env.NEXT_APP_INTERNAL_PATH;

export const AdminApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});
export const AdminMultiApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});

const refreshUrl = `${process.env.NEXT_APP_INTERNAL_PATH}/api/admin/refresh`;

AdminApi.interceptors.response.use(
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
  
          return AdminApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );



  AdminMultiApi.interceptors.response.use(
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
  
          return AdminMultiApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );

