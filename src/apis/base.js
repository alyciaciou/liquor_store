import axios from "axios";

const instance  = axios.create({
    // baseURL: 'https://api.example.com'
});

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance