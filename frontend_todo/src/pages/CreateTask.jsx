/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { useEffect } from "react";
import { getTaskById, editTask, createNewTask } from "../api/task";

export default function CreateTask({ user }) {
  console.log(user, "user");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValues,
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
    navigate("/task");
  });

  useEffect(() => {
    async function fetchTask() {
      if (params.id) {
        const fetchedTask = await getTaskById(params.id);
        setValues("title", fetchedTask.data.title);
        setValues("description", fetchedTask.data.description);
        setValues(
          "dateStart",
          dayjs(fetchedTask.data.dateStart).format("YYYY-MM-DD")
        );
        setValues(
          "dateEnd",
          dayjs(fetchedTask.data.dateEnd).format("YYYY-MM-DD")
        );
      }
    }
    fetchTask();
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            {params.id ? "Editar Tarea" : "Crear Tarea"}
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Añada una tarea a su lista de pendientes.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Titulo
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    {...register("title", { required: true })}
                    type="title"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Introduzca un titulo..."
                  />
                </div>
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Descripción
            </label>
            <div className="mt-2">
              <textarea
                {...register("description", { required: true })}
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Añada una descripción más detallada de la tarea
            </p>
          </div>
        </div>
        <div>
          <label
            htmlFor="dateStart"
            className="block text-sa font-medium leading-6 text-gray-900"
          >
            Fecha de inicio
          </label>
          <div className="mt-2">
            <input
              {...register("dateStart", { required: true })}
              id="dateStart"
              name="dateStart"
              type="date"
              required
              className="block rounded-md border-0 py-1.5 text-gray900 shadow-sm ring-1 ring-inset ring-gray-300 ring-inset ring-gray-300 placeholder: text-gray-400 focus: ring-2 focus: ring.inset focus: ring-indigo-600 sm:text-sm sm: leading-6 p-2"
            />
          </div>
          {errors.dateStart && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div>
          <label
            htmlFor="dateEnd"
            className="block text-sa font-medium leading-6 text-gray-900"
          >
            Fecha de fin
          </label>
          <div className="mt-2">
            <input
              {...register("dateEnd", { required: true })}
              id="dateEnd"
              name="dateEnd"
              type="date"
              required
              className="block rounded-md border-0 py-1.5 text-gray900 shadow-sm ring-1 ring-inset ring-gray-300 ring-inset ring-gray-300 placeholder: text-gray-400 focus: ring-2 focus: ring.inset focus: ring-indigo-600 sm:text-sm sm: leading-6 p-2"
            />
          </div>
          {errors.dateEnd && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Añadir Tarea
          </button>
        </div>
      </div>
    </form>
  );
}
