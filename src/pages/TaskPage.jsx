import { useEffect, useState } from 'react'
import { createTask, deleteTask, getAllTasks, statusTypes, updateTask } from '../api/task'
import { TaskCard } from '../components/TaskCard'
import { NewTask } from '../components/NewTask'

export function TaskPage () {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(null)
  const [taskUpdated, setTaskUpdated] = useState(null)
  //   const [editTask, setEditTask] = useState(false)
  useEffect(() => {
    getAllTasks().then((allTasks) => {
      console.log(allTasks)
      setTasks(allTasks)
    })
  }, [taskUpdated])
  const handleDelete = (taskId) => {
    console.log('delete', taskId)
    deleteTask({ id: taskId })
      .then((deletedTask) => {
        setTaskUpdated(deletedTask)
      })
  }
  const toggleEditTask = (taskId) => {
    setEditTask(taskId === editTask ? null : taskId)
  }
  const handleCancel = () => {
    setEditTask(null)
    // navigate(`/tasks/${id}`)
  }
  const handleComplete = (taskId, status) => {
    const newStatus = status === statusTypes.COMPLETED ? statusTypes.PENDING : statusTypes.COMPLETED
    console.log('handleComplete', taskId)
    updateTask({ id: taskId, data: { status: newStatus } })
      .then((updatedTask) => {
        setEditTask(null)
        setTaskUpdated(updatedTask)
      })
    // setEdit÷Task(null)
    // navigate(`/tasks/${id}`)
  }
  const handleSave = (event, taskId) => {
    event.preventDefault()
    console.log('handleSave', taskId, event)
    const form = Object.fromEntries(new FormData(event.target))
    const { title, description } = form
    updateTask({ id: taskId, data: { title, description } })
      .then((updatedTask) => {
        setEditTask(null)
        setTaskUpdated(updatedTask)
      })
  }

  const handleCreate = (event) => {
    event.preventDefault()
    console.log('handleCreate', event)
    const form = Object.fromEntries(new FormData(event.target))
    const { title, description } = form
    console.log({ title, description })
    if (!title || !description) {
      return
    }
    createTask({ data: { title, description, status: statusTypes.PENDING } })
      .then((updatedTask) => {
        setEditTask(null)
        setTaskUpdated(updatedTask)
      })
  }
  return (
    <main className='mt-4'>
      <h3 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Create a new task</h3>
      <NewTask handleCreate={handleCreate} />
      <div className='flex flex-col gap-4 border-solid mt-8'>
        <h3 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Tasks</h3>
        {tasks.map((task) => {
          return (
            task.status !== statusTypes.COMPLETED && task.deletedAt === null &&
              <TaskCard key={task._id} task={task} status={task.status} handleComplete={() => handleComplete(task._id, task.status)} handleDelete={() => handleDelete(task._id)} handleCancel={handleCancel} handleSave={(event) => handleSave(event, task._id)} editTask={task._id === editTask} handleEdit={() => toggleEditTask(task._id)} />
          )
        }
        )}
      </div>
      <div className='flex flex-col gap-4 border-solid mt-8'>
        <h3 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Completed</h3>
        {tasks.map((task) => {
          return (
            task.status === statusTypes.COMPLETED && task.deletedAt === null &&
              <TaskCard key={task._id} handleComplete={() => handleComplete(task._id, task.status)} task={task} status={task.status} />
          )
        }
        )}
      </div>
    </main>
  )
}
