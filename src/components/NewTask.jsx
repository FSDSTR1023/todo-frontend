export function NewTask ({ handleCreate }) {
  return (
    <form onSubmit={handleCreate} className='flex-1 text-left'>
      <div className='mb-6'>
        <label for='title' className='block mb-2 text-sm font-medium text-gray-900'>Title</label>
        <input type='text' id='title' name='title' class='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 ' placeholder='Title' />
      </div>
      <div className='mb-6'>
        <label for='description' className='block mb-2 text-sm font-medium text-gray-900 '>Description</label>
        <textarea id='description' name='description' rows='4' class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500' placeholder='Description' />
      </div>
      <div>
        <button type='submit' className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Create</button>
      </div>
    </form>
  )
}
