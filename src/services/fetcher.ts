import axios from "axios";

const fetcher = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 1000,
});


export default fetcher;