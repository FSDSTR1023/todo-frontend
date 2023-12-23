import React, { useState } from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, { id: Date.now(), text: newTodo }]);
  };

  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4 text-xl">
          TODO Application
        </header>
        <Routes>
          <Route path="/add-todo" element={<AddTodo onAddTodo={onAddTodo} />} />
          <Route path="/" element={<TodoList todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
