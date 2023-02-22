import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://demo-fido-app.herokuapp.com/',
})
