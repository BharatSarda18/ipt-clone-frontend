import axiosInstance from "./axiosInstance";

// Example GET API method
export const getMethod = async (url:string) => {
    try {
        const response = await axiosInstance.get(url); 
        return response.data; 
    } catch (error) {
        throw error; 
    }
};


// POST API method
export const postMethod = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data; 
    } catch (error) {
        throw error; 
    }
};

// PUT API method
export const putMethod = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.put(url, data); 
        return response.data; 
    } catch (error) {
        throw error; 
    }
};

// PATCH API method
export const patchMethod = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.patch(url, data); 
        return response.data; 
    } catch (error) {
        throw error; 
    }
};

// DELETE API method
export const deleteMethod = async (url: string) => {
    try {
        const response = await axiosInstance.delete(url); 
        return response.data; 
    } catch (error) {
        throw error; 
    }
};
