import axios from 'axios'

const isntance = axios.create({
    baseURL: 'http://localhost:080',
    whitCredentials: true,
})


export default instance;