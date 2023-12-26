import React, { useState, useEffect } from 'react';
import { updateTask } from '../utils/Api';

const TaskEditModal = ({ task, onClose, onTaskUpdate }) => {
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: 'PENDING' // Default status
    });

    // Update local state when the task prop changes
    useEffect(() => {
        if (task) {
            setTaskData({
                title: task.title,
                description: task.description,
                status: task.status || 'PENDING'
                // Include other fields from task if necessary
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTaskData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedTask = await updateTask(task._id, taskData);
            if (updatedTask) {
                onTaskUpdate(updatedTask); // Propagate the updated task to the parent component
                onClose(); // Close the modal after successful update
            } else {
                console.error('Task update failed.');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleUpdateSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        value={taskData.title} 
                        onChange={handleChange} 
                    />
                    <textarea 
                        name="description" 
                        value={taskData.description} 
                        onChange={handleChange} 
                    />
                    {/* Add inputs for other task fields if necessary */}
                    <button type="submit">Update Task</button>
                </form>
            </div>
        </div>
    );
};

export default TaskEditModal;
