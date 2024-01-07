import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CustomInput } from '../components/CustomInput'
import { loginUser } from '../api/user'

export function LoginPage ({ setUser }) {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const { username, password } = e.target
    await loginUser({ username: username.value, password: password.value })
      .then((json) => {
        console.log(json)
        console.log(json)
        if (json._id) {
          window.localStorage.setItem('token', json._id)
          setUser(json)

          navigate('/tasks')
        } else {
          setError(json.error)
        }
      })
  }
  return (
    <main className='flex justify-center  flex-1 px-6 py-12 lg:px-8'>
      <div className='w-96 p-6 bg-shadow border border--200 rounded-lg shadow'>
        <h3 className='mb-5 text-3xl text-left font-bold tracking-tight text-gray-900'>Login</h3>
        <span className={error ? 'text-red-500' : 'hidden'}>{error}</span>
        <form className='flex flex-col gap-4' onSubmit={submitHandler}>
          <CustomInput label='Username' type='text' name='username' placeholder='Pon tu nombre' />
          <CustomInput label='Password' type='password' name='password' />
          <button type='submit' className='text-black bg-red-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Login</button>
        </form>
        <div className='mt-5'>
          <p className='text-sm text-gray-500 mb-4'>Don't have an account?</p>
          <Link to='/register' className='text-black bg-red-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Register</Link>
        </div>
      </div>
    </main>
  )
}
