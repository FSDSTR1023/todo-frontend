import { getAllTask } from '../api/task';
import TaskCard from '../components/TaskCard';
import { useEffect, useState } from 'react';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [load, setLoad] = useState (false);

useEffect (()=>{
  async function fetchTasks(){
    const response = await getAllTask();
    const data = response.data;
    setTasks(data);
  }
  fetchTasks();
},[load]);


  return (
    <div className='flex flex-wrap gap-4 m-2 items-center justify-between p-10 '>
      {tasks.map((task) => {
        return (
          <TaskCard
            task={task}
            key={task._id}
            load={load}
            setLoad={setLoad}
          />
        );
      })}
    </div>
  );
};

export default TaskPage;