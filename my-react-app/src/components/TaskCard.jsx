// TaskCard.jsx
import React, { useState } from 'react';
import TaskEditModal from './TaskEditModal'; // Adjust the path as needed

const TaskCard = ({ task, onUpdateTodo, onDeleteTodo }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleDelete = async () => {
    await onDeleteTodo(task._id);
  };

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <div className="task-card bg-white rounded-lg overflow-hidden shadow-md p-4">
      <p className="text-xl font-semibold">{task.title}</p>
      <p className="text-gray-500">{task.description}</p>

      <div className="task-card-actions flex justify-between mt-4">
        <button onClick={handleEdit} className="btn-edit">Edit</button>
        <button onClick={handleDelete} className="btn-delete">Delete</button>
      </div>

      {isEditModalOpen && (
        <TaskEditModal 
          task={task} 
          onClose={handleCloseModal} 
          onTaskUpdate={onUpdateTodo} 
        />
      )}
    </div>
  );
};

export default TaskCard;
