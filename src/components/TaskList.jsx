import React, { useState, useEffect } from 'react';
import { GetAllTasks } from '../../api/Tasks';

function AllTaskList() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    GetAllTasks()
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Tasks:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map(task => (
          <div key={task.id} className="bg-slate-50 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2 gap-1">{task.title}</h3>
            <p className="text-sm">{task.description}</p>
            <p className="text-sm">Start date: { new Date(task.datestart).toLocaleDateString() }</p>
            <p className="text-sm">Deadline: { new Date(task.dateend).toLocaleDateString() }</p>
          </div>
        ))}
      </div>
    </div>
  );
}



export default AllTaskList;