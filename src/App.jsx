import React, { useEffect, useState } from 'react';
import axios from "axios";

import './App.css'

function App() {
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState({});

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    try {
      const {data} = await axios.get("http://localhost:3001/tasks");
      setTaskList(data);
    } catch (error) {
      console.error("WRONG")
    }
  }

  const postTask = async () => {
    try {
     await axios.post("http://localhost:3001/tasks", editTask) 
    } catch (error) {
      console.error("No se puede subir la tarea ")
    }
  }

  const handleOnChange = (event) => {
    setEditTask({
      title: event.target.value,
      status: "TO DO"
    })
    console.log("editTask", editTask);
  } 

  return (
    <>
      <form onSubmit={postTask}>
        <input type='text' onChange={handleOnChange}></input>
      </form>

      {taskList.map((task, index) => {
        return <p key={index}>{task.title}</p>;
      })}
    </>
  );
}


export default App
