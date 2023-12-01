import React, { useEffect, useState } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useTasks from '../hooks/useTasks.js';

import './App.css'

function App() {
  const [tasks, getTasks] = useTasks();

  const handleTaskCreated = () => {
    getTasks();
  };

  return (
    <>
      <h1>Form</h1>
      <TaskForm onTaskCreated={handleTaskCreated}/>
      <h1>Tasks</h1>
      <TaskList taskList={tasks} />
    </>
  );
}


export default App
