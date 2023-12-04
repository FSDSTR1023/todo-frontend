import React, { useState } from "react";
import usePostTask from "../hooks/usePostTask";
import "./styles/taskform.css"

const TaskForm = ({ onTaskCreated, userList }) => {
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
    
    const taskData = {
      ...postTasks,
      user: postTasks.user,
    }

    await postTask(taskData);

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
    <h2>Create Task</h2>
    <form  className="form-main" onSubmit={handleSubmit}>

    <select
          name="user"
          value={postTasks.user}
          onChange={handleOnChange}
          required
        >
         <option value="">Select a User</option>
        {userList.map((user) => (
          <option key={user._id} value={user._id}>
            {user.firstname} {user.lastname}
          </option>
        ))}
        </select>

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
