import axios from 'axios';

const baseUrl = "http://localhost:8000/tasks"

// ========:::: GET ALL  ::::========

const getAllTasks = async (setToDo) => {
  try {
   await axios.get(baseUrl).then(({ data }) => {
      console.log("data --->", data);
      setToDo(data);
    });
  } catch (error) {
    console.error("No se pueden obtener las tareas");
  }
};
export { getAllTasks };