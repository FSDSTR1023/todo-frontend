import TaskCard from '../components/TaskCard';
import { useEffect, useState } from 'react';
import { getAllTasks } from '../api/task';

const TaskPage = () => {
    const[tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    
    useEffect(() =>{
    async function fetchTasks(){
        const response = await getAllTasks();
        const data = response.data;
        setTasks(data); 
    }
    fetchTasks();
    },[load]);
    
    return (
        <div className='flex flex-wrap gap-4¡ m-2 items-center justify-evenly p-10'>
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