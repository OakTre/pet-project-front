import axios from 'axios'

const config = {
    withCredentials: true,
    baseURL: import.meta.env.VITE_API_URL
}

const request = axios.create(config)

request.interceptors.response.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    return config
})

request.interceptors.response.use(
    (response) => response,
    (error) => {
        // if (error.response.status === 401) {}

        return Promise.reject(error)
    }
)

export default request
