// App.js
import React, { useState, useEffect } from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { fetchTodos, createTask, updateTask, deleteTask } from './utils/Api';



function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const fetchedTodos = await fetchTodos();
        setTodos(fetchedTodos);
      } catch (error) {
        console.error('Failed to fetch tasks:', error);
      }
    };

    loadTodos();
  }, []);

  const onAddTodo = async (newTodoText) => {
    try {
      const newTodo = await createTask({ text: newTodoText });
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  const onUpdateTodo = async (updatedTask) => {
    try {
      const updatedTodo = await updateTask(updatedTask._id, updatedTask);
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo._id === updatedTodo._id ? updatedTodo : todo))
      );
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const onDeleteTodo = async (id) => {
    try {
      await deleteTask(id);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4 text-xl">TODO Application</header>
        <Routes>
          <Route path="/add-todo" element={<AddTodo onAddTodo={onAddTodo} />} />
          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                onUpdateTodo={onUpdateTodo}
                onDeleteTodo={onDeleteTodo}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
