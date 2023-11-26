import axios from './axios';

export const getAllUsers =() => axios.get('/users')
export const logIn = (data) => axios.post('/user/login', data)
export const regsiterRequest = (data) => axios.post('/user/create', data)
