import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import UserForm from "../components/UserForm";
import NavBar from "../components/NavBar";

import useTasks from "../hooks/useTasks";
import useUsers from "../hooks/useUsers";
import useDeleteTask from "../hooks/useDeleteTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useTasks();
  const [users, setUsers] = useUsers();
  const deleteTask = useDeleteTask();

  const handleTaskCreated = () => {
    setTasks();
  };

  const handleUserCreated = () => {
    setUsers();
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task._id !== taskId)); // Update tasks after deleting a task
  };

  return (
    <>
    <NavBar/>
    <div className="main-container">
      <div className="main-form-container">
      <UserForm onUserCreated={handleUserCreated} />
      <TaskForm onTaskCreated={handleTaskCreated} userList={users} />
      </div>

      <div className="main-task-container">
      <TaskList taskList={tasks} userList={users} onDelete={handleTaskDeleted} />
      </div>
    </div>
    </>
  );
}

export default App;
