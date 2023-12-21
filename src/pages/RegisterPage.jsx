import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerRequest} from '../api/user';
import { useEffect } from 'react';


const RegisterPage = ({setUser, isAuthenticated, setIsAuthenticated }) => {
 const { 
    register, 
    handleSubmit, 
    formState: { errors },
    getValues,
} = useForm();

 const navigate = useNavigate();
 const onSubmit = handleSubmit(async (data)=>{
 try {
    const response = await registerRequest(data);
    setUser(response.data);
    setIsAuthenticated(true);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
useEffect(() => {
    if (isAuthenticated) {
      navigate('/task');
    }
  }, [isAuthenticated]);


  return (
    <>
      <div className='flex justify-center min-h-full flex-1 px-6 py-12 lg:px-8'>
        <div className='justify-center bg-white w-96 px-8 rounded-se-3xl rounded-ss-3xl rounded-ee-3xl rounded-es-3xl bg-grey-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20   shadow-xl bg-white-500 shadow-lg shadow-white-500/50 hover:shadow-indigo-500/40 '>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 justify-center text-purple-600'>
            Register your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-purple-700'>
          <form className='space-y-6' onSubmit={onSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-pink-950'>  
                Name
              </label>
              <div className='mt-2'>
                <input
                {...register('name', {required: true})}
                  id='name'
                  name='name'
                  type='text'
                  required
                  className='bg-transparent border-b-2 w-80 border-white text-pink-900'
                />
              </div>
              {errors.name && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-pink-950'>
                Last Name
              </label>
              <div className='mt-2'>
                <input
                 {...register('lastName', {
                    required: true,
                validate: (value)=>{
                    value === getValues('password') ||
                    'The passwords do not match';
                },
                })}
                  id='lastName'
                  name='lastName'
                  type='text'
                  required
                  className='bg-transparent border-b-2 w-80 border-white text-pink-900'
                />
              </div>
              {errors.lastname && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-pink-950'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                 {...register('email', {required: true})}
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='bg-transparent border-b-2 w-80 border-white text-pink-900'
                />
              </div>
              {errors.email && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-pink-950 '>
                Password
              </label>
              <div className='mt-2'>
                <input
                 {...register('password', {required: true})}
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='bg-transparent border-b-2 w-80 border-white text-pink-900'
                />
              </div>
              {errors.password && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-pink-950'>
                  Confirm Password
                </label>
                <div className='text-sm'></div>
              </div>
              <div className='mt-2'>
                <input
                 {...register('confirmPassword', {required: true})}
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  required
                  className='bg-transparent border-b-2 w-80 border-white text-pink-900 '
                />
              </div>
              {errors.confirmPassword && (
                <span className='text-red-500'>Password is Requiered</span>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-full py-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 border border-gray-100 shadow hover:shadow-lg shadow-inner'>
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
      </div>
    </>
  );
};

export default RegisterPage;
