import axios from './axios';

export const getAllTasks =() => axios.get('/task');
export const getTasksById =() => axios.get('/task