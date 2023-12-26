// api.js
import axios from 'axios';



export const createTask = async (taskData) => {
  try {
    const response = await axios.post('http://localhost:3000/tasks', taskData);
    return response.data; // Assuming the response data is the created task
  } catch (error) {
    console.error('Error creating task:', error);
    return null; // Return null in case of error
  }
};


export const fetchTodos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/tasks');
    return response.data; // Assuming the response data is the list of tasks
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return []; // Return an empty list in case of error
  }
};

export const fetchTaskById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/tasks/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task:', error);
    return null;
  }
};

export const updateTask = async (id, taskData) => {
  try {
    const response = await axios.put(`http://localhost:3000/tasks/${id}`, taskData);
    return response.data;
  } catch (error) {
    console.error('Error updating task:', error);
    return null;
  }
};

export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

export const markTaskAsCompleted = async (id) => {
  try {
    const response = await axios.patch(`http://localhost:3000/tasks/${id}`, { status: 'COMPLETED' });
    return response.data;
  } catch (error) {
    console.error('Error marking task as completed:', error);
    return null;
  }
};
