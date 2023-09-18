import {AdminApi} from './axiosInstance'


export const Signin = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/login',data);
    }catch (error){
        return error;
    }
    return response;
}

export const AdminSignout = async () => {
    let response;

    try{
        response = await AdminApi.get('/api/admin/logout');
    }catch (error){
        return error;
    }
    return response;
}

export const ChangePassword = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/change-password',data);
    }catch (error){
        return error;
    }
    return response;
}