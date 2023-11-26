import axios from './axios';

export const getAllTasks =() => axios.get('/task');