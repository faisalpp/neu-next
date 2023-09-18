import {AdminApi,AdminMultiApi} from './axiosInstance'
import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";


const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const createTip = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/create-tip',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateTip = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/update-tip',data);
    }catch (error){
        return error;
    }
    return response;
}
export const duplicateTip = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/duplicate-tip',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteTip = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-tip',data);
    }catch (error){
        return error;
    }
    return response;
}

export const GetTipByCateogry = async (data,params) => {
  let response;

  try{
    response = await api.post(`/api/get-tip-by-category/?page=${params.page}&limit=${params.limit}`,data);
  }catch (error){
      return error;
  }
  return response;
}
export const getTipBySlug = async (data) => {
  let response;

  try{
    response = await api.post('/api/get-tip-by-slug',data);
  }catch (error){
      return error;
  }
  return response;
}
export const getTipBySearch = async (data) => {
  let response;

  try{
    response = await api.post('/api/admin/search-tip',data);
  }catch (error){
      return error;
  }
  return response;
}