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


const getStatusClassName = (task) => {
  if (task.status === "PENDING") {
    return "status-pending";
  } else if (task.status === "IN PROGRESS") {
    return "status-in-progress";
  } else if (task.status === "COMPLETED") {
    return "status-completed";
  } else {
    return "task-card-status"; 
  }
};

const [filterStatus, setFilterStatus] = useState("");

const filteredTaskList = filterStatus
  ? currentTaskList.filter((task) => task.status === filterStatus)
  : currentTaskList;


  return (
<>
    <div className="filter-container">
      <h2>Filter tasks by status</h2>
      <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
        <option value="">All</option>
        <option value="PENDING">Pending</option>
        <option value="IN PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
      </select>
    </div>
    
    
    <div className="tasks-container">
      {filteredTaskList.map((task) => (
        <div
          key={task._id}
          className="task-card-container"
        >
          {editingTaskId === task._id ? (
            <>
              <div>
                <p><b>Edit "{task.title}"</b></p>
                <EditTaskForm
                  task={task}
                  onCancel={handleCancelEdit}
                  onSave={handleSaveEdit}
                />
              </div>
            </>
          ) : (
            <div>

          <span className="task-list-buttons">
            <button onClick={() => handleEditClick(task)}><i class="fa-solid fa-pen-to-square"></i></button>
            <button onClick={() => onDelete(task._id)}><i class="fa-solid fa-trash"></i></button>          
           </span>

              <p className={getStatusClassName(task)}><b>Status:</b> {task.status}</p>
              <p><b>Title:</b> {task.title}</p>
              <p><b>Description:</b> {task.description}</p>
              <p>
              <b>Start Date:</b> {formatDate(task.datestart)}
              </p>
              <p><b>End Date:</b> {formatDate(task.dateend)}</p>
              <p>
              <b>Assigned to:</b> {task.user?.firstname} {task.user?.lastname}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
</>
  );
};

export default TaskList;
