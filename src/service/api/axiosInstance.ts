import axios from 'axios';

// Create an Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APT_BACKEND_BUILD_URL,  // Use Vite env variable for base URL
  headers: {
    'Content-Type': 'application/json',
    // You can add other common headers here if needed
  },
});

// Add a request interceptor (optional, for example, to add Authorization token)
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token from localStorage or any other storage
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional, to handle errors globally)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error globally (e.g., show a toast message or redirect to login)
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
