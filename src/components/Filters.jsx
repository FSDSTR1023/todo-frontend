import React, { useContext } from 'react'
import { status } from '../data/form.data'
import FilterButton from './FilterButton'
import TasksContext from '../context/TasksContext'

export default function Filters() {

    const {filters, setFilters} = useContext(TasksContext)

    const filterConfig=[
        {
            status: '',
            text: 'ALL'
        },
        {
            status: status.PENDING,
            text: 'PENDING'
        },
        {
            status: status.IN_PROGRESS,
            text: 'IN PROGRESS'
        },
        {
            status: status.COMPLETED,
            text: 'COMPLETED'
        }
    ]

    return (
        <div className='flex gap-2'>
            {filterConfig.map((filter, i) => (
                <FilterButton
                    key={i}
                    status={filter.status}
                    text={filter.text}
                    filters={filters}
                    setFilters={setFilters}
                />
            ))}
        </div>
    )
}
