import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard'; // Ensure correct import path
import { fetchTodos } from '../utils/Api'; // Ensure correct import path

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    getTodos();
  }, []);

  const handleTaskUpdate = (updatedTask) => {
    setTodos(todos.map(task => task._id === updatedTask._id ? updatedTask : task));
  };

  const handleTaskDelete = (taskId) => {
    setTodos(todos.filter(task => task._id !== taskId));
  };

  return (
    <div className="todo-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TaskCard 
            key={todo._id} 
            task={todo} 
            onTaskUpdate={handleTaskUpdate} 
            onTaskDelete={handleTaskDelete} 
          />
        ))
      ) : (
        <p className="text-center">No tasks found.</p>
      )}
    </div>
  );
}

export default TodoList;
