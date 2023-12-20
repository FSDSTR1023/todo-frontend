import { Link } from 'react-router-dom'

export function AccountPage ({ user }) {
  console.log(user)
  return (
    <main className='mt-12'>
      <h1 className='mb-2 text-3xl text-left font-bold tracking-tight text-gray-900'>Account</h1>
      <div className='flex flex-col border-solid items-start'>
        <strong className='mt-2'>Name</strong>
        <p>{user.firstName} {user.lastName}</p>
        <strong className='mt-2'>Username</strong>
        <p>@{user.username}</p>
        <strong className='mt-2'>Email</strong>
        <p>{user.email}</p>
        <Link to='/logout' className='text-white mt-4 bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Logout</Link>
      </div>

    </main>
  )
}
