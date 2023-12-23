// api.js
import axios from 'axios';

// Fetch todos
export const fetchTodos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/tasks');
    return response.data; // Assuming the response data is the list of tasks
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return []; // Return an empty list in case of error
  }
};

// Other API functions...
