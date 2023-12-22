/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

import { useEffect } from 'react';
import { getTaskById, editTask, createNewTask } from '../api/task';

const CreateTask = ({ user, idTask }) => {
  console.log(user, 'user');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    if (idTask) {
      editTask(idTask, data);
    } else {
      createNewTask({
        ...data,
        user: user._id,
        datestart: dayjs(data.datestart).format(),
        dateend: dayjs(data.dateend).format(),
      });
    }
    navigate('/tasks');
  });

  useEffect(() => {
    async function fetchTask() {
      if (idTask) {
        const fectchedTask = await getTaskById(idTask);
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
        idTask='';
      }
    }
    fetchTask();
  }, []);
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-sky-200'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            {idTask ? 'Edit Task' : 'Create Task'}
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
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2  '
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
                Task
              </label>
              <div className='mt-2'>
                <textarea
                  {...register('description', { required: true })}
                  id='description'
                  name='description'
                  rows={3}
                  className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2'
                  defaultValue={''}
                />
              </div>
            </div>
            {errors.description && (
              <span className='text-red-500'>This field is required</span>
            )}
            <div>
              <label
                htmlFor='datestart'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Date Start
              </label>
              <div className='mt-2'>
                <input
                  {...register('datestart', { required: true })}
                  id='datestart'
                  name='datestart'
                  type='date'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2  '
                />
              </div>
              {errors.dateStart && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>
            <div>
              <label
                htmlFor='dateend'
                className='block text-sm font-medium leading-6 text-gray-900'>
                Date End
              </label>
              <div className='mt-2'>
                <input
                  {...register('dateend', { required: true })}
                  id='dateend'
                  name='dateend'
                  type='date'
                  required
                  className='block w-full rounded-md border-0 
                  py-1.5 text-gray-900 shadow-sm ring-1 
                  ring-inset ring-gray-300
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset
                    focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2  '
                />
              </div>
              {errors.dateEnd && (
                <span className='text-red-500'>This field is required</span>
              )}
            </div>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold 
                leading-6 text-white shadow-sm
                 hover:bg-indigo-500 
                 focus-visible:outline 
                 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
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
