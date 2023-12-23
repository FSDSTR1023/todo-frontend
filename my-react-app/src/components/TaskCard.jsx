import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tasks.map(task => (
        <div key={task._id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
          <div className="p-4">
            <p className="text-2xl font-bold text-gray-800">{task.title}</p>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-gray-700">Owner: {task.user}</p>
            {/* Render other task details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
