import { statusTypes } from '../api/task'

export function TaskCardInfo ({ task, status, handleDelete, handleEdit, handleComplete }) {
  return (
    <article className={status === statusTypes.COMPLETED ? 'flex gap-4 items-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100' : 'flex flex-col gap-4 md:flex-row p-6 items-center bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100'}>
      <div className='flex-1 text-left'>
        <h5 className={task.description ? 'mb-2 text-xl font-bold tracking-tight text-gray-900 ' : 'text-xl font-bold tracking-tight text-gray-900 '}>{task.title}</h5>
        {
            task.description &&
              <p className='font-normal text-gray-700 '>{task.description}</p>
    }
      </div>
      {
        status !== statusTypes.COMPLETED
          ? (
            <div className='flex w-full md:w-auto gap-4'>
              <button onClick={handleEdit} className='flex-1 text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Edit</button>
              <button onClick={handleComplete} className='flex-1 text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Complete</button>
              <button onClick={handleDelete} className='flex-1 text-white bg-red-500 border-red-500 hover:border-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Delete</button>
            </div>
            )
          : (
            <button onClick={handleComplete} className=' text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Uncomplete</button>
            )
      }
    </article>
  )
}

export function TaskCardEdit ({ task, handleCancel, handleSave }) {
  return (
    <article className='flex gap-4 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
      <form onSubmit={handleSave} className='flex-1 text-left'>
        <div className='mb-6'>
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-900'>Title</label>
          <input type='text' id='title' name='title' className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 ' defaultValue={task.title} placeholder='Title' />
        </div>
        <div className='mb-6'>
          <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 '>Description</label>
          <textarea id='description' name='description' rows='4' className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' defaultValue={task.description} placeholder='Description' />
        </div>
        <div>
          <button type='submit' className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Save</button>
          <button onClick={handleCancel} className='text-white bg-red-500 border-red-500 hover:border-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2'>Cancel</button>
        </div>
      </form>
    </article>
  )
}

export function TaskCard ({ task, status, handleDelete, handleCancel, handleSave, editTask, handleEdit, handleComplete, setEditTask }) {
  return (
    editTask ? <TaskCardEdit task={task} handleCancel={handleCancel} handleSave={handleSave} /> : <TaskCardInfo handleComplete={handleComplete} task={task} status={status} handleDelete={handleDelete} handleEdit={handleEdit} setEditTask={setEditTask} />
  )
}
