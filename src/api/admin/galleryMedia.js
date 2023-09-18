import {AdminApi,AdminMultiApi} from './axiosInstance'

// UPLOAD GALLERY IMAGE
export const uploadGalleryImage = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/upload-gallery-image',data);
    }catch (error){
        return error;
    }
    return response;
}

// DELETE GALLERY IMAGE
export const deleteGalleryImage = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-gallery-image',data);
    }catch (error){
        return error;
    }
    return response;
}