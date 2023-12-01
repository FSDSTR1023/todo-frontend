import axios from 'axios';

const useEditTask = (updateTaskList) => {
  const editTask = async (task) => {
    try {
      const response = await axios.put(`http://localhost:3001/tasks/${task._id}`, task);
      const updatedTask = response.data;
      updateTaskList(updatedTask);
    } catch (error) {
      console.error("Error editing task:", error.response?.data || error.message || error);
    }
  };

  return editTask;
};

  
  export default useEditTask;