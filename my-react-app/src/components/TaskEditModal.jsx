// TaskEditModal.jsx
import React, { useState } from 'react';
import { updateTask } from '../utils/Api';

const TaskEditModal = ({ task, onClose, onTaskUpdate }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = async () => {
    const updatedTask = await updateTask(task._id, { title, description });
    if (updatedTask) {
      onTaskUpdate(updatedTask);
    } else {
      console.error('Failed to update task');
      // Optionally, you can add more error handling here
    }
    onClose();
  };
  

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={handleUpdate}>Update Task</button>
      </div>
    </div>
  );
};

export default TaskEditModal;
