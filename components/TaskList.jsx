import React, { useState, useEffect } from "react";
import EditTaskForm from "./EditTaskForm";
import useEditTask from "../hooks/useEditTask";
import "./styles/tasklist.css"

const TaskList = ({ taskList, onDelete }) => {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [currentTaskList, setCurrentTaskList] = useState(taskList);

  useEffect(() => {
    setCurrentTaskList(taskList);
  }, [taskList]);

  const handleEditClick = (task) => {
    setEditingTaskId(task._id);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  const editTask = useEditTask();

  const handleSaveEdit = async (updatedTaskData) => {
    const updatedTask = await editTask(updatedTaskData);
    if (updatedTask) {
      // Update local task list with the updated task
      const updatedList = currentTaskList.map((task) =>
        task._id === updatedTask._id ? updatedTask : task,
      );
      setCurrentTaskList(updatedList);
    }
    setEditingTaskId(null);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const readableDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      {currentTaskList.map((task) => (
        <div
          key={task._id}
          className="task-card-container"
        >
          {editingTaskId === task._id ? (
            <>
              <div>
                <p>Formulario de edición para {task.title}</p>
                <EditTaskForm
                  task={task}
                  onCancel={handleCancelEdit}
                  onSave={handleSaveEdit}
                />
                <button onClick={handleCancelEdit}>Cancelar</button>
              </div>
            </>
          ) : (
            <div>

          <span className="task-list-buttons">
            <button onClick={() => handleEditClick(task)}><i class="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => onDelete(task._id)}><i class="fa-solid fa-trash"></i></button>          
           </span>

              <p className="task-card-status"><span>Status:</span> {task.status}</p>
              <p><span>Title:</span> {task.title}</p>
              <p>Description: {task.description}</p>
              <p>
                Started: {formatDate(task.datestart)}
              </p>
              <p>Finish at: {formatDate(task.dateend)}</p>
              <p>
                Assigned to: {task.user?.firstname} {task.user?.lastname}
              </p>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default TaskList;
