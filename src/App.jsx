import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

import useTasks from "../hooks/useTasks";
import useDeleteTask from "../hooks/useDeleteTask";

import "./App.css";

function App() {
  const [tasks, setTasks] = useTasks();
  const deleteTask = useDeleteTask();

  const handleTaskCreated = () => {
    setTasks();
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter((task) => task._id !== taskId)); // Update tasks after deleting a task
  };

  return (
    <div className="main-container">
      <div className="main-form-container">
        <h1>Form</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      </div>

      <div className="main-task-container">
      <h1>Tasks</h1>
      <TaskList taskList={tasks} onDelete={handleTaskDeleted} />
      </div>
    </div>
  );
}

export default App;
