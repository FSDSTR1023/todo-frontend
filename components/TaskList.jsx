import React, { useState, useEffect } from "react";
import EditTaskForm from "./EditTaskForm";
import useEditTask from "../hooks/useEditTask";

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

  return (
    <div>
      {currentTaskList.map((task) => (
        <div
          key={task._id}
          style={{ border: "1px solid black", height: 300, margin: 10 }}
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
            <>
              <p>{task.title}</p>
              <p>{task.description}</p>
              <p>{task.status}</p>
              <p>
                {task.datestart} - {task.dateend}
              </p>
              <p>{task.createdAt}</p>
              <p>
                Assigned to: {task.user?.firstname} {task.user?.lastname}
              </p>
              <button onClick={() => handleEditClick(task)}>Edit</button>
              <button onClick={() => onDelete(task._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
