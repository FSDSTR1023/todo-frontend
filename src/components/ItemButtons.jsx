import React, { useContext } from 'react'

export default function ItemButtons({completeTask, editTask, deleteTask}) {

  const buttonConfig = [
    {
        svg: 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>,
        color: 'hover:bg-green-300',
        handleClick: () => completeTask()
    },
    {
        svg: 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>,
        color: 'hover:bg-yellow-300',
        handleClick: () => editTask()
    },
    {
        svg: 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>,
        color: 'hover:bg-red-300',
        handleClick: () => deleteTask()
    }
  ]
    
  return (

    <div className="hidden group-hover:flex gap-1 absolute right-0 translate-x-3/2 -translate-y-1/2">
      {buttonConfig.map(({svg, color, handleClick}, i) => (
        <button
          className={`rounded-full bg-slate-300 ${color}
          p-1 w-8 hover:w-12 transition-all`}
          onClick={handleClick}
          key={i}
        >
          {svg}
        </button>
      ))}
  </div>
    

  )
}
