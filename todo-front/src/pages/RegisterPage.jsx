import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/user';
import { useEffect } from 'react';

const RegisterPage = ({ setUser, isAuthenticated, setIsAuthenticated }) => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        try {
            const response = await registerRequest(data);
            setUser(response.data);
            setIsAuthenticated(true);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    });

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/task')
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
                    <form className='space-y-6'
                        onSubmit={onSubmit}>
                        <div>
                            <label
                                htmlFor='name'
                                className='block text-sm font-medium leading-6 text-gray-900'>
                                Name
                            </label>
                            <div className='mt-2'>
                                <input
                                    {...register('name', { required: true })}
                                    id='name'
                                    name='name'
                                    type='text'
                                    required
                                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                    focus:ring-yellow-600 sm:text-sm sm:leading-6
                    p-2'
                                />
                            </div>
                            {errors.name && (
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
                                    {...register('lastName', { required: true })}
                                    id='lastName'
                                    name='lastName'
                                    type='text'
                                    required
                                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                    focus:ring-yellow-600 sm:text-sm sm:leading-6
                    p-2'
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
                                    {...register('email', { required: true })}
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
                    focus:ring-yellow-600 sm:text-sm sm:leading-6
                    p-2'
                                />
                            </div>
                            {errors.email && (
                                <span className='text-red-500'>This field is required</span>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor='password'
                                className='block text-sm font-medium leading-6 text-gray-900'>
                                Password
                            </label>
                            <div className='mt-2'>
                                <input
                                    {...register('password', { required: true })}
                                    id='password'
                                    name='password'
                                    type='password'
                                    required
                                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                    focus:ring-yellow-600 sm:text-sm sm:leading-6
                    p-2'
                                />
                            </div>
                            {errors.password && (
                                <span className='text-red-500'>This field is required</span>
                            )}
                        </div>

                        <div>
                            <div className='flex items-center justify-between'>
                                <label
                                    htmlFor='password'
                                    className='block text-sm font-medium leading-6 text-gray-900'>
                                    Confirm Password
                                </label>
                                <div className='text-sm'></div>
                            </div>
                            <div className='mt-2'>
                                <input
                                    {...register('confirmPassword', {
                                        required: true,
                                        validate: (value) => {
                                            value === getValues('password') ||
                                                'The password do not match';
                                        },
                                    })}
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type='password'
                                    required
                                    className='block w-full rounded-md 
                    border-0 py-1.5 text-gray-900 
                    shadow-sm ring-1 ring-inset
                    ring-gray-300
                    placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                    focus:ring-yellow-600 sm:text-sm sm:leading-6
                    p-2'
                                />
                            </div>
                            {errors.confirmPassword && (
                                <span className='text-red-500'>This field is required</span>
                            )}
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='flex w-full justify-center rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-yellow-300 shadow-sm hover:bg-lime-900'>
                                Sign in
                            </button>
                            <div className='flex flex-col mt-6 text-center'>
                                <p>If you are Registered go to </p>
                                <Link
                                    to='/login'
                                    className='text-yellow-600'>
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