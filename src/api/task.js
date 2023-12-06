import { BASE_URL } from './constants'

export const statusTypes = {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN PROGRESS',
  COMPLETED: 'COMPLETED'
}
export const getAllTasks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/tasks`)
    const tasks = await response.json()
    console.log('tasks', tasks)
    return tasks
  } catch (e) {
    throw new Error(e, 'Error fetching Tasks')
  }
}
export const getTask = async ({ id }) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`)
    const task = await response.json()
    return task
  } catch (e) {
    throw new Error(e, 'Error fetching Task')
  }
}

export const createTask = async ({ data }) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const task = await response.json()
    return task
  } catch (e) {
    throw new Error(e, 'Error creating task')
  }
}
export const updateTask = async ({ id, data }) => {
  console.log('data', JSON.stringify(data))
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const task = await response.json()
    return task
  } catch (e) {
    throw new Error(e, 'Error updating task')
  }
}
export const deleteTask = async ({ id }) => {
  try {
    const response = await fetch(`${BASE_URL}/tasks/${id}`, {
      method: 'DELETE'
    })
    const task = await response.json()
    return task
  } catch (e) {
    throw new Error(e, 'Error deleting task')
  }
}
