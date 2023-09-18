import axios from 'axios'

const baseUrl = process.env.VITE_APP_INTERNAL_PATH;

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
});

export const addToCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/add-to-cart',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-cart',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateCartData = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/update-cart',data);
    }catch (error){
        return error;
    }
    return response;
}
export const removeFromCart = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/remove-cart-item',data);
    }catch (error){
        return error;
    }
    return response;
}


const refreshUrl = `${process.env.VITE_APP_INTERNAL_PATH}/api/user/refresh`;

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
