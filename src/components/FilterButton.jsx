import React from 'react'

export default function FilterButton({text, status, filters, setFilters}) {

    const bgColor = filters === status ?'bg-slate-600' : 'bg-slate-300'

    return (
        <button
            onClick={() => setFilters(status)}
            className={`${bgColor} rounded text-white text-lg p-2 m-2`}
        >{text}</button>
    )
}
