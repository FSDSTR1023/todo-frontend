/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { signIn } from '../api/user';


const RegisterPage = ({setUser, isAuthenticated, setIsAuthenticated}) => {

  const {register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const registerUser = handleSubmit(async (data) => {
    try {
      const response = await signIn(data);
      setUser(response.data);
      setIsAuthenticated(true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/tasks');
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Register your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' onSubmit={registerUser}>
            <div>
              <label
                htmlFor='firstname'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Name
              </label>
              <div className='mt-2'>
                <input
                {...register('firstname', {required:true})}
                  id='firstname'
                  name='firstname'
                  type='text'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.firstname && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor='lastName'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Last Name
              </label>
              <div className='mt-2'>
                <input
                {...register('lastName', {required:true})}
                  id='lastName'
                  name='lastName'
                  type='text'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.lastName && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                {...register('email', {required:true})}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                />
              </div>
              {errors.email && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>


            <div>
              <button type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Sign in
              </button>
              <div className='flex flex-col mt-2 text-center'>
                <p>If you are Registered go to </p>
                <Link
                  to='/login'
                  className='text-indigo-600 border-indigo-600 border-opacity-100 '>
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
