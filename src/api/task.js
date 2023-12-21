import axios from './axios';

export const getAllTask = ()=> axios.get('/task');

export const getTaskById = (id) => axios.get(`/task,${id}`);

export const createNewTask = (task) => axios.post('/task/create', task);

export const editTask = (id, task) => axios.put(`/task/update/ ${id}`, task);

export const deleteTask = (id) => axios.delete(`/task/delete/${id}`);

export const editStatus = (id, task) => axios.patch(`task/update/${id}`, task);
