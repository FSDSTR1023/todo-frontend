    /* eslint-disable react-hooks/exhaustive-deps */
    /* eslint-disable react/prop-types */
    import { useForm } from 'react-hook-form';
    import { useNavigate, useParams } from 'react-router-dom';
    import dayjs from 'dayjs';

    import { useEffect } from 'react';
    import { getTaskById, editTask, createNewTask } from '../api/task';

    const CreateTask = ({ user }) => {
    console.log(user, 'user');
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
        editTask(params.id, data);
        } else {
        createNewTask({
            ...data,
            user: user._id,
            dateStart: dayjs(data.dateStart).format(),
            dateEnd: dayjs(data.dateEnd).format(),
        });
        }
        navigate('/task');
    });

    useEffect(() => {
        async function fetchTask() {
        if (params.id) {
            const fectchedTask = await getTaskById(params.id);
            setValue('title', fectchedTask.data.title);
            setValue('description', fectchedTask.data.description);
            setValue(
            'dateStart',
            dayjs(fectchedTask.data.dateStart).format('YYYY-MM-DD')
            );
            setValue(
            'dateEnd',
            dayjs(fectchedTask.data.dateEnd).format('YYYY-MM-DD')
            );
        }
        }
        fetchTask();
    }, []);
    return (
        <>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                {params.id ? 'Edit Task' : 'Create Task'}
            </h2>
            </div>

            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form
                className='space-y-6'
                onSubmit={onSubmit}>
                <div>
                <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Title
                </label>
                <div className='mt-2'>
                    <input
                    {...register('title', { required: true })}
                    id='title'
                    name='title'
                    type='text'
                    placeholder='Title'
                    required
                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                        focus:ring-yellow-600 sm:text-sm sm:leading-6 p-2  '
                    />
                </div>
                {errors.title && (
                    <span className='text-red-500'>This field is required</span>
                )}
                </div>
                <div className='col-span-full'>
                <label
                    htmlFor='about'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Description
                </label>
                <div className='mt-2'>
                    <textarea
                    {...register('description', { required: true })}
                    id='description'
                    name='description'
                    placeholder='Description'
                    rows={3}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 p-2'
                    defaultValue={''}
                    />
                </div>
                </div>
                {errors.description && (
                <span className='text-red-500'>This field is required</span>
                )}
                <div>
                <label
                    htmlFor='dateStart'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Date Start
                </label>
                <div className='mt-2'>
                    <input
                    {...register('dateStart', { required: true })}
                    id='dateStart'
                    name='dateStart'
                    type='date'
                    required
                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                        focus:ring-yellow-600 sm:text-sm sm:leading-6 p-2  '
                    />
                </div>
                {errors.dateStart && (
                    <span className='text-red-500'>This field is required</span>
                )}
                </div>
                <div>
                <label
                    htmlFor='dateEnd'
                    className='block text-sm font-medium leading-6 text-gray-900'>
                    Date End
                </label>
                <div className='mt-2'>
                    <input
                    {...register('dateEnd', { required: true })}
                    id='dateEnd'
                    name='dateEnd'
                    type='date'
                    required
                    className='block w-full rounded-md border-0 
                    py-1.5 text-gray-900 shadow-sm ring-1 
                    ring-inset ring-gray-300
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset
                        focus:ring-yellow-600 sm:text-sm sm:leading-6 p-2  '
                    />
                </div>
                {errors.dateEnd && (
                    <span className='text-red-500'>This field is required</span>
                )}
                </div>

                <div>
                <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-lime-700 px-3.5 py-2.5 text-sm font-semibold text-yellow-300 shadow-sm hover:bg-lime-900'>
                    Submit Task
                </button>
                <div className='flex flex-col mt-2 text-center'></div>
                </div>
            </form>
            </div>
        </div>
        </>
    );
    };

    export default CreateTask;