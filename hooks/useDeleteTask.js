import axios from "axios";

const useDeleteTask = () => {
  const deleteTask = async (taskId) => {
    console.log("Deleting task with ID:", taskId); // Add this line to log task ID
    try {
      await axios.delete(`http://localhost:3001/tasks/${taskId}`);
    } catch (error) {
      // Log the detailed error message
      console.error(
        "Error deleting task:",
        error.response?.data || error.message || error,
      );
    }
  };

  return deleteTask;
};

export default useDeleteTask;
