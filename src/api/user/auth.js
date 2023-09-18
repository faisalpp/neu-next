import {api,regApi} from './axiosInstance'

export const Signup = async (data) => {
    let response;

    try{
        response = await regApi.post('/api/register',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signin = async (data) => {
    let response;

    try{
        response = await api.post('/api/login',data);
    }catch (error){
        return error;
    }
    return response;
}

export const Signout = async () => {
    let response;
  
    try{
        response = await api.get('/api/logout');
    }catch (error){
        return error;
    }
    return response;
  }