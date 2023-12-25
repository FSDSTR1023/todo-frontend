// TodoList.jsx
import React, { useState, useEffect } from 'react';
import TaskCard from './TaskCard';
import { fetchTodos } from '../utils/Api';

function TodoList({ todos, onUpdateTodo, onDeleteTodo }) {
  const [stateTodos, setStateTodos] = useState(todos);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await fetchTodos();
        setStateTodos(data);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    getTodos();
  }, []);

  const handleTaskUpdate = (updatedTask) => {
    onUpdateTodo(updatedTask);
  };

  const handleTaskDelete = (taskId) => {
    onDeleteTodo(taskId);
  };

  return (
    <div className="todo-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {stateTodos.length > 0 ? (
        stateTodos.map((todo) => (
          <TaskCard
            key={todo._id}
            task={todo}
            onUpdateTodo={handleTaskUpdate}
            onDeleteTodo={handleTaskDelete}
          />
        ))
      ) : (
        <p className="text-center">No tasks found.</p>
      )}
    </div>
  );
}

export default TodoList;
