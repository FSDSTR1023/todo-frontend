// AddTodo.jsx
// Explanation
// State for Input Value: We're using useState to keep track of the input value.
// Input Change Handler: handleInputChange updates the state with the current value of the input field.
// Form Submission Handler: handleSubmit prevents the default form submission action, checks if the input is not just whitespace, and then calls the onAddTodo function with the current input value. Afterward, it clears the input field.
// Form and Input Fields: The form contains an input field for the todo text and a submit button.
// Styling: Styling is applied using Tailwind CSS classes. You can adjust these to match your design preferences.


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
