import React, { useState } from "react";
import usePostTask from "../hooks/usePostTask";
import "./styles/taskform.css"

const TaskForm = ({ onTaskCreated }) => {
  const [postTasks, setPostTask] = useState({
    title: "",
    description: "",
    status: "TO DO",
    datestart: new Date().toISOString().split("T")[0],
    dateend: new Date().toISOString().split("T")[0],
    user: "",
  });

  const { postTask } = usePostTask();

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setPostTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postTask(postTasks);
    setPostTask({
      title: "",
      description: "",
      status: "TO DO",
      datestart: new Date().toISOString().split("T")[0],
      dateend: new Date().toISOString().split("T")[0],
      user: "",
    });
    if (onTaskCreated) {
      onTaskCreated();
    }
  };
  return (
    <div className="form-container">
    <form  className="form-main" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={postTasks.title}
        onChange={handleOnChange}
        placeholder="Task Title"
        required
      />
      <input
        type="text"
        name="description"
        value={postTasks.description}
        onChange={handleOnChange}
        placeholder="Task Description"
      />
      <input
        type="date"
        name="datestart"
        value={postTasks.datestart}
        onChange={handleOnChange}
        required
      />
      <input
        type="date"
        name="dateend"
        value={postTasks.dateend}
        onChange={handleOnChange}
        required
      />
      <select
        name="status"
        value={postTasks.status}
        onChange={handleOnChange}
        required
      >
        <option value="TO DO">TO DO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>

      <button className="form-button" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default TaskForm;
