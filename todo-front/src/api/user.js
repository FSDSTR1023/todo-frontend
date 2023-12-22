import axios from './axios';

export const getAllUsers =() => axios.get('/user');

export const logIn = (data) => axios.post('/user/login', data);

export const registerRequest = (data) => axios.post('/user/create', data);