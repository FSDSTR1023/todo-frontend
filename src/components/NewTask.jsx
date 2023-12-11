import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateTask as createTask } from '../../api/Tasks'

const NewTask = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'incompleted',
    user: '',
    datestart: '',
    dateend: '',
    deletedAt: undefined
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdTask = await createTask(formData);

      console.log('Task created:', createdTask);

      navigate('/tasks', { replace: true });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create a New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            maxLength={30}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full h-24 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          >
            <option value="incompleted">Incompleted</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Date Start:</label>
          <input
            type="date"
            name="datestart"
            value={formData.datestart}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-1">Date End:</label>
          <input
            type="date"
            name="dateend"
            value={formData.dateend}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 focus:outline-none"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
