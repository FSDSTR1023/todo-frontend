import instance from './Connection';

export const GetAllTasks = () => instance.get('/tasks');
export const CreateTask = (formData) => instance.post('/tasks', formData);