import axios from './axios';

export const getAllTask = ()=> axios.get('/task');