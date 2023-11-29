import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
})

instance.interceptors.response.use()
export default instance;