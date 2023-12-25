// AddTodo.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTodo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue);
      setInputValue('');
      navigate('/'); // Navigate back to the home page to see the list
    }
  };

  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="input"
          placeholder="Add a new todo..."
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
