import axios from 'axios';
import { useState, useEffect } from 'react';

const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/tasks");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return [tasks, getTasks];
};

export default useTasks;
