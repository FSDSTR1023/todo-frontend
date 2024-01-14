import ItemButtons from "./ItemButtons"
import { useContext } from "react"
import TasksContext from "../context/TasksContext"
import { useNavigate } from 'react-router-dom'

export default function Item({
    title,
    description,
    status,
    datestart,
    dateend,
    user,
    _id,
}) {

    const {completeTask, editTask, deleteTask} = useContext(TasksContext)
    const navigate = useNavigate()

    const statusColor = {
        'PENDING': 'bg-red-100',
        'IN PROGRESS': 'bg-yellow-100',
        'COMPLETED': 'bg-green-100',
    }

    const handleEdit = () => {
        editTask(_id)
        navigate('/tasks/create')
    }

    return (
        <div className="grid grid-cols-3 gap-5 bg-slate-100 p-6 rounded-md shadow-md relative group">
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p>{new Date(datestart).toLocaleDateString()}</p>
                <p>{new Date(dateend).toLocaleDateString()}</p>
                <p>{user}</p>
            </div>
            <div className="flex flex-col justify-between col-span-2 w-96">
                <p className="text-left">{description}</p>
                <p className={`${statusColor[status]} p-2 rounded-md w-fit`}>{status}</p>
            </div>

            <ItemButtons
                completeTask={() => completeTask(_id)}
                editTask={handleEdit}
                deleteTask={() => deleteTask(_id)}
            />

        </div>
    )
}
