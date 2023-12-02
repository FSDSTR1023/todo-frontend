import axios from 'axios';

const useEditTask = () => {
  const editTask = async (task) => {
    try {
      const response = await axios.put(`http://localhost:3001/tasks/edit/${task._id}`, task);
      return response.data; // Return the updated task
    } catch (error) {
      console.error("Error editing task:", error.response?.data || error.message || error);
      return null; // Return null in case of an error
    }
  };
  return editTask;
};

export default useEditTask;