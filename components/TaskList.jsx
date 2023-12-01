const TaskList = ({ taskList, onDelete, onEdit }) => {
  return (
    <div style={{border: "1px solid black"}}>
      {taskList.map((task) => (
        <div key={task._id} style={{border: "1px solid black"}}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.datestart} - {task.dateend}</p>
          <p>{task.createdAt}</p>
          <p>Assigned to: {task.user?.firstname} {task.user?.lastname}</p>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;

