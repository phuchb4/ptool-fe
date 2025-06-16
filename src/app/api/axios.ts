import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://192.168.88.232:8000/api/v1',
    timeout: 3000
})

apiClient.interceptors.request.use(
    (config) => {
        config.headers = config.headers || {};
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/pages/Login';
        }
        return Promise.reject(error);
    }
)

export default apiClient;