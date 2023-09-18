import {AdminApi,AdminMultiApi} from './axiosInstance'

// CREATE REVIEW
export const createReview = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-review',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const updateReview = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-review',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const deleteReview = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-review',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const duplicateReview = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/duplicate-review',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

// CREATE REVIEW
export const getReviews = async (params,data) => {
    let response;
    console.log(params)
    try{
      response = await AdminApi.post(`/api/admin/get-reviews/?page=${params.page}&limit=${params.limit}`,data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
