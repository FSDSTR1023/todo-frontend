/* eslint-disable react-hooks/exhaustive-deps */

import TaskCard from "../components/TaskCard";
import { useEffect, useState } from 'react';
import { getTasks } from '../api/task';

const TaskPage = ({setIdTask}) => {
  var [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState (false);


  useEffect(() => {
    async function getTasksResponse() {
      try {
        const response = await getTasks();
        setTasks(response.data);
        console.log('TaskList: ', tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getTasksResponse();
  }, [load]);
  

  return (
    <div className='flex flex-wrap gap-4 m-2 items-center justify-between p-10'>
      {tasks.map((task) => { return(<TaskCard task={task} key={task._id} load={load} setLoad={setLoad} setIdTask={setIdTask} />); })}
    </div>
    
  )
}

export default TaskPage