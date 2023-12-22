
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/task')
          .then((response) => response.json())
          .then((data) => {
            setTasks(data);
            console.log(data);
          })
          .catch((error) => console.error('Error fetching tasks', error));
      }, []);



      function handleDelete(_id) {
        fetch(`http://localhost:4000/task/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            const removeTask = tasks.filter((task) => {
                return task._id !== _id;
            });
            setTasks(removeTask);
        })
        .catch((err) => {
            console.log('Error deleting task', err);
        });
    }

    function handleEdit(_id) {
        navigate(`/edit/${_id}`);
    }
  

    return (
        <div>
            <h2 className='text-3xl p-4 pb-8 font-medium'>My tasks</h2>
            <ul>
            {tasks.map(task =>
                <li key={task.id} className='border-solid border-1 border-stone-600 shadow-lg m-8 p-4' >
                    <strong>{task.title}</strong><br />
                    {task.description} <br />
                    Due: {new Date(task.dateEnd).toLocaleDateString()} <br />
                    {task.status} <br />
                    <button className="bg-stone-100 rounded-lg px-4 py-2 m-2 mt-4" onClick={() => handleDelete(task._id)}>Delete</button>
                    <button className="bg-stone-100 rounded-lg px-4 py-2 m-2" onClick={() => handleEdit(task._id)}>Edit</button>
                </li>
                )}
            </ul>
            
        </div>
    );
}
 
export default Tasks;