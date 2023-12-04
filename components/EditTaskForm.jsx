import React, { useState, useEffect } from "react";
import useEditTask from "../hooks/useEditTask";

const EditTaskForm = ({ task, onSave, onCancel }) => {
  const [editTaskData, setEditTaskData] = useState({
    title: "",
    description: "",
    status: "TO DO",
    datestart: new Date().toISOString().split("T")[0],
    dateend: new Date().toISOString().split("T")[0],
    user: "",
  });

  const editTask = useEditTask();

  useEffect(() => {
    if (task) {
      setEditTaskData({
        ...task,
        datestart: task.datestart.split("T")[0],
        dateend: task.dateend.split("T")[0],
      });
    }
  }, [task]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setEditTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await editTask(editTaskData); // Call editTask with the edited data
    onSave(editTaskData); // Now call onSave with the edited data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={editTaskData.title}
          onChange={handleOnChange}
          placeholder="Task Title"
        />
        <input
          type="text"
          name="description"
          value={editTaskData.description}
          onChange={handleOnChange}
          placeholder="Task Description"
        />
        <input
          type="date"
          name="datestart"
          value={editTaskData.datestart}
          onChange={handleOnChange}
        />
        <input
          type="date"
          name="dateend"
          value={editTaskData.dateend}
          onChange={handleOnChange}
        />
        <select
          name="status"
          value={editTaskData.status}
          onChange={handleOnChange}
          required
        >
          <option value="TO DO">TO DO</option>
          <option value="IN PROGRESS">IN PROGRESS</option>
          <option value="COMPLETED">COMPLETED</option>
        </select>

        <button type="submit">Guardar Cambios</button>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
