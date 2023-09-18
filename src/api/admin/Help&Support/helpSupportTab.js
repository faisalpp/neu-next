
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

export const createHelpTab = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-help-tab',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getHelpTabs = async (data) => {
    let response;
    
    try{
        response = await api.get('/api/get-help-tab',data);
    }catch (error){
        return error;
    }
    return response;
}