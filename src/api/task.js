import axios from './axios.js';

export const getTasks = () => axios.get('/tasks');
export const getTaskById = (id) => axios.get('/tasks/'+id);
export const editTask = (id, task) => axios.put('/tasks/'+id, task); 
export const createNewTask = (task) => axios.post('/tasks', task);
export const deleteTask = (id) => axios.delete('/tasks/'+id);
export const markAsCompleted = (id) => axios.patch('/tasks/'+id);