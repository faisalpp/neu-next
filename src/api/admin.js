import axios from 'axios'

const isDev = import.meta.env.VITE_APP_DEV === "dev";
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";

const AdminApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
        "Content-Type":"application/json",
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});
const AdminMultiApi = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    maxContentLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
    maxBodyLength: 10 * 1024 * 1024, // 10 megabytes (10MB)
});















export const createSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/create-section',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-section',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateSectionsIndex = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-section-index',data);
    }catch (error){
        return error;
    }
    return response;
}

export const deleteSection = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/delete-section',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSection = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/sections',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getSectionById = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/section-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const createSectionItem = async (data) => {
    let response;

    try{
        response = await AdminMultiApi.post('/api/admin/create-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const updateSectionItem = async (data) => {
    let response;

    try{
        response = await AdminMultiApi.post('/api/admin/update-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateSectionItemsIndex = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/update-section-item-index',data);
    }catch (error){
        return error;
    }
    return response;
}

export const deleteSectionItem = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/delete-section-item',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItemById = async (data) => {
    let response;

    try{
        response = await AdminApi.post('/api/admin/section-item-by-id',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getSectionItems = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/section-items',data);
    }catch (error){
        return error;
    }
    return response;
}

// Proudct Related Rotues
export const createProduct = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/create-product',data);
    }catch (error){
        return error;
    }
    return response;
}

export const getProducts = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-products');
    }catch (error){
        return error;
    }
    return response;
}

export const getCategoryData = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-category-data',data);
    }catch (error){
        return error;
    }
    return response;
}
export const createFaqTab = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-faq-tab',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getFaqTab = async () => {
    let response;
    
    try{
        response = await AdminApi.get('/api/admin/get-faq-tab');
    }catch (error){
        return error;
    }
    return response;
}
export const updateFaqTab = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-faq-tab',data);
    }catch (error){
        return error;
    }
    return response;
}
export const createFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/create-faq',data);
    }catch (error){
        return error;
    }
    return response;
}
export const getFaqs = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-faqs',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/update-faq',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteFaq = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-faq',data);
    }catch (error){
        return error;
    }
    return response;
}

export const uploadImage = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/image-upload',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const getMedia = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/get-uploaded-media',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const deleteMedia = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-media',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

// BLOG
export const createBlog = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/create-blog',data);
    }catch (error){
        return error;
    }
    return response;
}
export const updateBlog = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/update-blog',data);
    }catch (error){
        return error;
    }
    return response;
}
export const deleteBlog = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-blog',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const duplicateBlog = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/duplicate-blog',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const searchBlog = async (data,params) => {
    let response;
    
    try{
        response = await AdminApi.post(`/api/admin/search-blog/?page=${params.page}&limit=${params.limit}`,data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}








// Team Member Api's
export const createTeamMember = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/create-team-member',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const deleteTeamMember = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/admin/delete-team-member',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}

export const updateTeamMember = async (data) => {
    let response;
    
    try{
        response = await AdminMultiApi.post('/api/admin/update-team-member',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}
export const updateMemberIndex = async (data) => {
    let response;
    
    try{
        response = await AdminApi.post('/api/update-member-index',data,{validateStatus: () => true});
    }catch (error){
        return error;
    }
    return response;
}


const refreshUrl = isDev ? `${import.meta.env.VITE_APP_INTERNAL_PATH}/api/admin/refresh` : "/api/admin/refresh";

AdminApi.interceptors.response.use(
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
  
          return AdminApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );



  AdminMultiApi.interceptors.response.use(
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
  
          return AdminMultiApi.request(originalReq);
        } catch (error) {
          return error;
        }
      }
    }
  );