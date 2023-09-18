import {AdminApi,AdminMultiApi} from './axiosInstance'
import axios from 'axios'


// UPLOAD VIDEO MEDIA
export const uploadVideoMedia = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/upload-video-media',data);
    }catch (error){
        return error;
    }
    return response;
}

// GET VIDEO MEDIA
export const getVideoMedia = async (params,data) => {
    let response;
    
    try{
        response = await AdminApi.post(`/api/admin/get-video-media/?page=${params.page}&limit=${params.limit}`,data);
    }catch (error){
        return error;
    }
    return response;
}
// Delete VIDEO MEDIA
export const deleteVideoMedia = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-video-media',data);
    }catch (error){
        return error;
    }
    return response;
}