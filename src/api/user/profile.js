import {api}  from './axiosInstance'

export const GetUserProfile = async (data) => {
    let response;

    try{
        response = await api.post('/api/user/get-profile',data);
    }catch (error){
        return error;
    }
    return response;
}