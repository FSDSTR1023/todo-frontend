import { Link, useNavigate } from 'react-router-dom'
import { CustomInput } from '../components/CustomInput'
import { useState } from 'react'
import { registerUser } from '../api/user'

export function RegisterPage ({ setUser }) {
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const { firstname, lastname, username, email, password, confirmPassword } = e.target
    if (password.value !== confirmPassword.value) {
      setError('Passwords do not match')
      return
    }
    await registerUser({ firstName: firstname.value, lastName: lastname.value, username: username.value, email: email.value, password: password.value })
      .then((json) => {
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
    <main className='flex justify-center items-center h-screen'>
      <div className='w-96 p-6 bg-white border border-gray-200 rounded-lg shadow'>
        <h3 className='mb-5 text-3xl text-left font-bold tracking-tight text-gray-900'>Register</h3>
        <span className={error ? 'text-red-500' : 'hidden'}>{error}</span>
        <form className='flex flex-col gap-4' onSubmit={submitHandler}>
          <CustomInput label='First Name' type='text' name='firstname' placeholder='Han' />
          <CustomInput label='Last Name' type='text' name='lastname' placeholder='Solo' />
          <CustomInput label='Username' type='text' name='username' placeholder='hansolo' />
          <CustomInput label='Email' type='email' name='email' placeholder='hansolo@alliance.com' />
          <CustomInput label='Password' type='password' name='password' />
          <CustomInput label='Repeat Password' type='password' name='confirmPassword' />
          <button type='submit' className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 '>Register</button>
        </form>
        <div className='mt-5'>
          <p className='text-sm text-gray-500 mb-4'>Have an account?</p>
          <Link to='/login' className='text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Login</Link>
        </div>
      </div>
    </main>
  )
}
