import React from 'react';
import './tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-blue-500 text-white p-4 text-xl">
          TODO Application
        </header>
        <Routes> {/* Use Routes component instead of Switch */}
          <Route path="/add-todo" element={<AddTodo />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
