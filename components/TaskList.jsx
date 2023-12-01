import React from 'react';

const TaskList = ({ taskList }) => {
  return (
    <div style={{border: "1px solid black"}}>
      {taskList.map((task, index) => (
        <div key={index} style={{border: "1px solid black"}}>
          <p>{task.title}</p> 
          <p>{task.description}</p>
          <p>{task.status}</p>
          <p>{task.datestart} - {task.dateend}</p>
          <p>{task.createdAt}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
