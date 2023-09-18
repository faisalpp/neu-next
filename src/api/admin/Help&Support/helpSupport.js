import {AdminApi} from '../axiosInstance'
import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";


const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type":"application/json",
    },
});

export const createHelp = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-help',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateHelp = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-help',data);
    }catch (error){
        return error;
    }
    return response;
}
export const duplicateHelp = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/duplicate-help',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteHelp = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-help',data);
    }catch (error){
        return error;
    }
    return response;
}

export const GetHelpByCateogry = async (data,params) => {
  let response;

  try{
    response = await api.post(`/api/get-help-by-category/?page=${params.page}&limit=${params.limit}`,data);
  }catch (error){
      return error;
  }
  return response;
}
export const getHelpBySlug = async (data) => {
  let response;

  try{
    response = await api.post('/api/get-help-by-slug',data);
  }catch (error){
      return error;
  }
  return response;
}