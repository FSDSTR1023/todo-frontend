import { useEffect, useState } from 'react'
import { createTask, deleteTask, getAllTasks, statusTypes, updateTask } from '../api/task'
import { TaskCard } from '../components/TaskCard'
import { NewTask } from '../components/NewTask'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export function TaskPage ({ user }) {
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(false)
  const [taskUpdated, setTaskUpdated] = useState(null)
  const navigate = useNavigate()
  //   const [editTask, setEitTask] = useState(false)
  useEffect(() => {
    if (user) {
      getAllTasks().then((allTasks) => {
        setTasks(allTasks)
      })
    } else {
      navigate('/login')
    }
  }, [taskUpdated])

  const handleDelete = (taskId) => {
    console.log('delete', taskId)
    const confirmWindow = window.confirm('Are you sure you want to delete this task?')
    if (confirmWindow) {
      console.log('delete', taskId)
      toast.promise(
        deleteTask({ id: taskId })
          .then((deletedTask) => {
            setTaskUpdated(deletedTask)
          }),
        {
          pending: 'Deleting Task',
          success: 'Task Deleted Succsessfully 👌',
          error: 'Something went wrong retry 🤯'
        }
      )
    }
  }
  const handleComplete = (taskId, status) => {
    const newStatus = status === statusTypes.COMPLETED ? statusTypes.PENDING : statusTypes.COMPLETED
    console.log('handleComplete', taskId)
    toast.promise(
      updateTask({ id: taskId, data: { status: newStatus } })
        .then((updatedTask) => {
          setEditTask(null)
          setTaskUpdated(updatedTask)
        }),
      {
        pending: 'Updating Task',
        success: 'Task Updated Succsessfully 👌',
        error: 'Something went wrong retry 🤯'
      }
    )
  }
  const handleSave = (event, taskId) => {
    event.preventDefault()
    console.log('handleSave', taskId, event)
    const form = Object.fromEntries(new FormData(event.target))
    const { title, description } = form
    toast.promise(
      updateTask({ id: taskId, data: { title, description } })
        .then((updatedTask) => {
          setEditTask(null)
          setTaskUpdated(updatedTask)
        }),
      {
        pending: 'Updating Task',
        success: 'Task Updated Succsessfully 👌',
        error: 'Something went wrong retry 🤯'
      }
    )
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
    toast.promise(
      createTask({ data: { title, description, status: statusTypes.PENDING } })
        .then((updatedTask) => {
          setEditTask(null)
          setTaskUpdated(updatedTask)
          event.target.title.value = ''
          event.target.description.value = ''
        }),
      {
        pending: 'Updating Task',
        success: 'Task Updated Succsessfully 👌',
        error: 'Something went wrong retry 🤯'
      }
    )
  }
  return (
    <main className='mt-12 px-10'>
      <ToastContainer />
      <h3 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Create a new task</h3>
      <NewTask handleCreate={handleCreate} />
      <div className='flex flex-col gap-4 border-solid mt-8'>
        <h3 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Tasks</h3>
        {tasks.map((task) => {
          return (
            task.status !== statusTypes.COMPLETED && task.deletedAt === null &&
              <TaskCard key={task._id} task={task} handleEdit={() => setEditTask(task._id)} status={task.status} handleComplete={() => handleComplete(task._id, task.status)} handleDelete={() => handleDelete(task._id)} handleCancel={() => setEditTask(false)} handleSave={(event) => handleSave(event, task._id)} editTask={task._id === editTask} />
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
