import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onTaskCreated }) => {
    const [editTask, setEditTask] = useState({
        title: "",
        description: "",
        status: "TO DO",
        datestart: new Date().toISOString().split('T')[0],
        dateend: new Date().toISOString().split('T')[0],
        user: "", 
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        deletedAt: null
      });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setEditTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  const postTask = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/tasks", editTask);
      onTaskCreated();
    } catch (error) {
      console.error("No se puede subir la tarea");
    }
  };

  return (
    <form onSubmit={postTask}>
    <input
      type="text"
      name="title"
      value={editTask.title}
      onChange={handleOnChange}
      placeholder="Task Title"
    />
    <input
      type="text"
      name="description"
      value={editTask.description}
      onChange={handleOnChange}
      placeholder="Task Description"
    />
    <input
      type="date"
      name="datestart"
      value={editTask.datestart}
      onChange={handleOnChange}
    />
    <input
      type="date"
      name="dateend"
      value={editTask.dateend}
      onChange={handleOnChange}
    />
     <input
      type="text"
      name="status"
      value={editTask.status}
      onChange={handleOnChange}
      placeholder="User"
    />
    <input
      type="text"
      name="user"
      value={editTask.user}
      onChange={handleOnChange}
      placeholder="User"
    />
    <button type="submit">Submit</button>
  </form>
  );
};

export default TaskForm;
