import { useEffect, useState } from "react"
import TaskActions from "../components/TaskActions"
import TaskCard from "../components/TaskCard"
import { getTasks } from "../services/getTasks";
import { useGlobalChange } from "../store/useTask";

const TodoApp = () => {

    const [tasks, setTasks] = useState([{
        createdAt: '',
        dateEnd: '',
        dateStart: '',
        description: '',
        id: '',
        modifiedAt: '',
        status: '',
        title: '',
        user: '',
    }]);

    const changed = useGlobalChange(state => state.changed)

    useEffect(() => {
        (async () => {
            const tasksData = await getTasks()
            setTasks(tasksData.tasks)
        })()

    }, [changed]);

    return (
        <div className="w-full flex justify-evenly items-start flex-wrap gap-10 mt-12">
            <TaskActions />
            <div className="flex flex-col min-w-60 max-w-lg">
                {
                    tasks
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map(t => <TaskCard key={t.id} {...t} />)
                }

            </div>
        </div>
    )
}

export default TodoApp