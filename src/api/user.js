import axios from './axios.js';

export const getUsers = () => axios.get('/users');
export const logIn = (user) => axios.get('/users/login', user);
export const signIn = (user) => axios.post('users/login', user);