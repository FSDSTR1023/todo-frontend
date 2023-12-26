import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../utils/Api'; // Ensure this path is correct

function AddTodo({ onAddTodo }) {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: 'PENDING' // Default status, assuming this is a required field
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevTaskData => ({
            ...prevTaskData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createdTask = await createTask(taskData);
            if (createdTask) {
                onAddTodo(createdTask); // Update the parent component's task list
                setTaskData({ title: '', description: '', status: 'PENDING' }); // Reset form
                navigate('/'); // Navigate to the list view
            } else {
                console.error('Task creation failed.');
            }
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    return (
        <div className="add-todo-container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="title"
                    value={taskData.title}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Task Title"
                    required
                />
                <textarea
                    name="description"
                    value={taskData.description}
                    onChange={handleInputChange}
                    className="input"
                    placeholder="Task Description"
                />
                <button type="submit" className="btn">
                    Add Todo
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
