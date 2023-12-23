import React, { useState, useEffect } from 'react';
import { fetchTodos } from '../utils/Api'; // Update the import path to point correctly

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

  return (
    <div className="todo-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo._id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
              <p className="text-xl font-semibold">{todo.title}</p>
              <p className="text-gray-500">{todo.description}</p>
              <p className="text-gray-600">Owner: {todo.user}</p>
              {/* Render other task details as needed */}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No tasks found.</p>
      )}
    </div>
  );
}

export default TodoList;
