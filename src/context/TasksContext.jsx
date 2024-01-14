import { createContext, useState, useEffect, useContext } from "react"
import FormDataContext from '../context/FormDataContext'
import { status } from "../data/form.data"

const TasksContext = createContext(null)

export function TasksProvider({children}) {

  const [tasks, setTasks] = useState([])
  const [filters, setFilters] = useState('')
  const {setFormData} = useContext(FormDataContext)

  useEffect( () => {
      fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => setTasks(data))
  },[])

  const completeTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
    })
    .then(() => {
      setTasks(tasks.map(t => t._id === id ? {...t, status: status.COMPLETED} : t))
    })
    .catch(error => console.log('Error completing task',error))
  }

  const editTask = (id) => {

    const {
        title,
        description,
        status,
        datestart,
        dateend,
        user,
        _id
    } = tasks.find(t => t._id = id)

    // TODO make task update instead of posting a new task
    setFormData({
        title,
        description,
        status,
        datestart,
        dateend,
        user,
        _id
    })
  }

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
    method: 'DELETE',
    headers: {
        "Content-type": "application/json;charset=UTF-8"
    },
    })
    .then( () => {
        setTasks(tasks.filter(t => t._id != id))
    })
    .catch(error => console.log('Error completing task',error))
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filters,
        setFilters,
        completeTask,
        editTask,
        deleteTask
      }}
    >
        {children}
    </TasksContext.Provider>
  )
}

export default TasksContext