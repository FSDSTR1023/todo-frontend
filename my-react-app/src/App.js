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
      const fetchedTodos = await fetchTodos();
      setTodos(fetchedTodos);
    };

    loadTodos();
  }, []);

  const onAddTodo = async (newTodoText) => {
    const newTodo = await createTask({ text: newTodoText });
    setTodos([...todos, newTodo]);
  };

  const onUpdateTodo = async (updatedTask) => {
    const updatedTodo = await updateTask(updatedTask._id, updatedTask);
    setTodos(todos.map(todo => todo._id === updatedTodo._id ? updatedTodo : todo));
  };

  const onDeleteTodo = async (id) => {
    await deleteTask(id);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4 text-xl">
          TODO Application
        </header>
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
