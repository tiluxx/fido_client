import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://fido-app-api.onrender.com/',
})
