/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { getAllTasks } from "../utils/handleApi.jsx";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "axios";
import { HiUserAdd } from "react-icons/hi";
import BDTasklist from './BDTasklist.jsx';

  export default function TaskList() {

  const [allTasks, setAlltasks] = useState([]);

  useEffect(() => {
    getAllTasks(setAlltasks);
  }, []);

  const deleteUser = async (id) => {
    await axios.delete("http://localhost:8000/tasks/" + id)
    alert(" El Usuario: " + id + " ha si do Eliminado");
    getAllTasks(setAlltasks);
  }

  return (
    <div className="flex flex-col items-center w-full">

      <div className="flex w-full shadow-md justify-between">
        <div className="p-5 text-xl font-bold self-start">Listado Completo de Tareas</div>
        <div className="flex">
          <Link className="flex h-14 items-center hover:text-[#003A70] pr-10" to="./create">
          <HiUserAdd size={25} className="w-14"/> Agregar Tarea</Link>
        </div>
      </div>

      <div className="flex-col p-4 mt-5 w-auto h-fit shadow-lg">
        <table className="text-sm text-left rtl:text-right text-gray-500">
          {/* ================================================================================================= */}
          <thead className="text-xs text-white uppercase bg-[#003A70]">
            <tr className="place-content-center border-solid border-2">
              <th className="px-3 py-2 border-solid border-2"> Título </th>
              <th className="px-3 py-2 border-solid border-2"> Estado</th>
              <th className="px-3 py-2 border-solid border-2"> Descripción </th>
              <th className="px-3 py-2 border-solid border-2"> Inicio </th>
              <th className="px-3 py-2 border-solid border-2"> Fin </th>
              <th className="px-3 py-2 border-solid border-2"> Usuario </th>
            </tr>
          </thead>
          <tbody>
            {/* =============================================================================================== */}
            {allTasks.map((item) => (
              <tr
                key={item._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                    <td className="px-3 py-2"> <BDTasklist name={item.title} /> </td>
                    <td className="px-3 py-2"> <BDTasklist lastName={item.description} /> </td>
                    <td className="px-3 py-2"> <BDTasklist phone={item.status} /> </td>
                    <td className="px-3 py-2"> <BDTasklist phone={item.datestart} /> </td>
                    <td className="px-3 py-2"> <BDTasklist country={item.dateend} /> </td>
                    <td className="px-3 py-2"> <BDTasklist country={item.user} /> </td>

                <td className="px-3 py-2 space-x-3 bg-gray-100">
                  <button className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black">
              {/*==================================================================================================*/}
                    <Link to={"./edit/" + item._id}>
                      <CiEdit />
                    </Link>{" "}
                  </button>

              {/*==================================================================================================*/}
                  <button
                    className="hover:shadow hover:bg-[#003A70] hover:text-white p-3 text-black"
                    onClick={() => deleteUser(item._id)}
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );}