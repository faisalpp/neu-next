import axios from 'axios'

// const isDev = import.meta.env.VITE_APP_DEV === "dev";
const isDev = '';
const baseUrl = isDev ? import.meta.env.VITE_APP_INTERNAL_PATH : "";

const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
    },
});

export const GetAppliances = async (params) => {
    let response;

    try {
        response = await api.get(`/api/get-appliances/?limit=${params.limit}`);
    } catch (error) {
        return error;
    }
    return response;
}
export const getNabarAppliances = async () => {
    let response;

    try {
        response = await api.get('/api/get-navbar-appliances');
    } catch (error) {
        return error;
    }
    return response;
}

export const GetApplianceSections = async (data) => {
    let response;

    try {
        response = await api.post('/api/appliance-sections', data);
    } catch (error) {
        return error;
    }
    return response;
}
export const GetAppliancesByFilter = async (data) => {
    let response;

    try {
        response = await api.post('/api/get-product-by-filter', data);
    } catch (error) {
        return error;
    }
    return response;
}
export const GetAppliancesBySlug = async (data) => {
    let response;

    try {
        response = await api.post('/api/get-product-by-slug', data);
    } catch (error) {
        return error;
    }
    return response;
}

export const getVideoMediaAll = async (params, data) => {
    let response;

    try {
        response = await api.post(`/api/admin/get-video-media/?page=${params.page}&limit=${params.limit}`, data);
    } catch (error) {
        return error;
    }
    return response;
}
export const getSingleVideoMedia = async (data) => {
    let response;

    try {
        response = await api.post('/api/admin/get-single-video-media', data);
    } catch (error) {
        return error;
    }
    return response;
}
export const getAppliancesFilters = async () => {
    let response;

    try {
        response = await api.get('/api/get-appliances-filters');
    } catch (error) {
        return error;
    }
    return response;
}
export const searchAppliance = async (data) => {
    let response;

    try {
        response = await api.post('/api/search-appliance', data);
    } catch (error) {
        return error;
    }
    return response;
}
export const getGalleryImages = async (params) => {
    let response;

    try {
        response = await api.get(`/api/admin/get-gallery-image/?page=${params.page}&limit=${params.limit}`)
    } catch (error) {
        return error;
    }
    return response;
}

export const GetRecentBlog = async (params) => {
    let response;

    try {
        response = await api.get(`/api/get-recent-blogs/?page=${params.page}&limit=${params.limit}`);
    } catch (error) {
        return error;
    }
    return response;
}
export const GetBlogBySlug = async (data) => {
    let response;

    try {
        response = await api.post('/api/get-blog-by-slug', data);
    } catch (error) {
        return error;
    }
    return response;
}

export const GetBlogByCateogry = async (data, params) => {
    let response;

    try {
        response = await api.post(`/api/get-blog-by-cateogry/?page=${params.page}&limit=${params.limit}`, data);
    } catch (error) {
        return error;
    }
    return response;
}

export const getReviews = async (data) => {
    let response;

    try {
        response = await api.post('/api/get-reviews', data, { validateStatus: () => true });
    } catch (error) {
        return error;
    }
    return response;
}





export const GetGoogleReviews = async () => {
    let response;

    try {
        response = await api.get('/api/get-google-reviews');
    } catch (error) {
        return error;
    }
    return response;
}
export const getYelpReviews = async () => {
    let response;

    try {
        response = await api.get('/api/get-yelp-reviews');
    } catch (error) {
        return error;
    }
    return response;
}


export const GetTeamMember = async () => {
    let response;

    try {
        response = await api.get('/api/get-team-member');
    } catch (error) {
        return error;
    }
    return response;
}

