import React from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useTasks from '../hooks/useTasks';
import useEditTask from '../hooks/useEditTask';
import useDeleteTask from '../hooks/useDeleteTask';

import './App.css'

function App() {
  const [tasks, getTasks] = useTasks();
  const { editTask, beginEdit, saveEdit } = useEditTask();
  const deleteTask = useDeleteTask();

  const handleTaskCreated = () => {
    getTasks();
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    getTasks(tasks.filter(task => task._id !== taskId));
  };

  return (
    <>
      <h1>Form</h1>
      <TaskForm onTaskCreated={handleTaskCreated} onSubmit={saveEdit} editTask={editTask}/>
      <h1>Tasks</h1>
      <TaskList taskList={tasks} onDelete={handleTaskDeleted} onEdit={beginEdit} />
    </>
  );
}

export default App;
