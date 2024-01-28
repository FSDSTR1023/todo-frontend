/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PiUserListFill } from "react-icons/pi";

const AddUser = () => {
  const newUserInit = {
    title: "",
    description: "",
    status: 0,
    datestart: "",
    dateend: "",
    user: ""
  };

  let { id } = useParams();
  console.log(id)
  const [addTodos, setAddTodos] = useState(newUserInit);
  const [urlId, setUrlId] = useState(id || "");

  const handleOnChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setAddTodos((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (urlId) {
        await axios.put(`http://localhost:8000/tasks/${urlId}`, addTodos);
        console.log("Usuario Actualizado con éxito");
      } else {
        await axios.post("http://localhost:8000/tasks/", addTodos);
        console.log("Usuario registrado con éxito");
      }
      setAddTodos(newUserInit);
      setUrlId("");
    } catch (error) {
      console.error("No se puede guardar/actualizar el usuario", error);
    }
  };

  const actualId = async (idValue) => {
    const res = await axios.get("http://localhost:8000/tasks/" + idValue);
    setAddTodos({
      title: res.data.title,
      description: res.data.description,
      status: res.data.status,
      datestart: res.data.datestart,
      dateend: res.data.dateend,
      user: res.data.user
    });
  };

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current && urlId !== "" && urlId !== undefined){
      actualId(urlId);
    }
    isMounted.current = false;
  }, [urlId]);

  return (
    <div className="flex flex-col items-center w-full gap-5">
      <div className="flex w-full shadow-md justify-between">
        <div className="p-5 text-xl font-bold self-start">
          Datos del Huésped
        </div>
        <div className="flex">
          <Link
            className="flex h-14 items-center hover:text-[#003A70] pr-10"
            to="/"
          >
            <PiUserListFill size={25} className="w-14" /> Lista de Usuarios
          </Link>
        </div>
      </div>

      <div className="flex shadow-xl p-8 w-fit">
      <form onSubmit={handleSubmit}>
          {/* //////////////////////////////////////////////////////////////////////////////////////  */}
        <div>
          <div className="border-b-black border-b-2 mb-7">
           Agregar Tareas
          </div>
          <div className="place-content-center px-5">
                <label className="block text-sm font-medium leading-6 text-gray-900"> Título <br />
                    <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="title" value={addTodos.title} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900"> Descripción <br />
                    <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="description" value={addTodos.description} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
                <label className="block text-sm font-medium leading-6 text-gray-900"> Estado <br />
                    <select className="px-2 border border-20 mb-3 shadow w-full" name="status" value={addTodos.status} onChange={handleOnChange} >
                        <option>Seleccione una Opcion</option>
                        <option>Pendiente</option>
                        <option>En proceso</option>
                        <option>Completado</option>
                    </select>
                </label>{/* ================================================================================== */}

                <div className="flex flex-row gap-4">
                    
                        <label className="block text-sm font-medium leading-6 text-gray-900"> Inicio <br />
                            <input className="px-2 border border-20 mb-3 shadow w-full" type="date" name="datestart" value={addTodos.datestart} onChange={handleOnChange} />
                        </label>{/* ================================================================================== */}

                        <label className="block text-sm font-medium leading-6 text-gray-900"> Fin <br />
                            <input className="px-2 border border-20 mb-3 shadow w-full" type="date" name="dateend" value={addTodos.dateend} onChange={handleOnChange} />
                        </label>{/* ================================================================================== */}
                        <br />
                </div>

                <label className="block text-sm font-medium leading-6 text-gray-900"> Usuario <br />
                  <input className="px-2 border border-20 mb-3 shadow w-full" type="text" name="user" value={addTodos.user} onChange={handleOnChange} />
                </label>{/* ================================================================================== */}
          </div>

        </div>
        <div className="flex flex-col w-full">
            <button type="submit" className="bg-[#003A70] text-white hover:bg-[#dadada] hover:text-[#003A70] h-8">
               Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
