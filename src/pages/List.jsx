import { useContext } from "react"
import Item from "../components/Item";
import Filters from '../components/Filters'
import TasksContext from "../context/TasksContext";

export default function List() {

    const {tasks, filters} = useContext(TasksContext)

    const filteredTaks = filters ? tasks.filter(task => task.status === filters) : tasks

    return (

        <main className='flex flex-col items-center'>

            <Filters />

            <div className="flex flex-col gap-6 w-9/10 m-4">
                {filteredTaks.map( task => (
                    <Item
                        key={task._id}
                        {...task}
                    />
                ))}
            </div>
            
      </main>

    )
}
