import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

import useTasks from '../hooks/useTasks';
import useDeleteTask from '../hooks/useDeleteTask';

import './App.css'

function App() {
  const [tasks, setTasks] = useTasks();
  const deleteTask = useDeleteTask();


  const handleTaskCreated = () => {
    setTasks();
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(task => task._id !== taskId)); // Update tasks after deleting a task
  };

  
  return (
    <>
      <h1>Form</h1>
      <TaskForm onTaskCreated={handleTaskCreated}/>
      <h1>Tasks</h1>
      <TaskList taskList={tasks} onDelete={handleTaskDeleted} />
    </>
  );
}

export default App;
