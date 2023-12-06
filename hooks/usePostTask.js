import axios from "axios";
import { useState } from "react";

const usePostTask = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const postTask = async (task, onSuccess) => {
    console.log("Posting task:", task); // Add this line to log the task data
    setIsPosting(true);
    setError(null);
    try {
      await axios.post("http://localhost:3001/tasks", task);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err);
    } finally {
      setIsPosting(false);
    }
  };

  return { postTask, isPosting, error };
};

export default usePostTask;
