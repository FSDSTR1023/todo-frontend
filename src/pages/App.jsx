import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {

    const menuConfig = [
        {
            text: 'Task List',
            path:'/tasks/list',
            svg:
                <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
        },
        {
            text: 'Add new Task',
            path: '/tasks/create',
            svg:     
                <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
        },
        {
            text: 'Log in',
            path: '/login',
            svg:
                <svg
                    className="w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
        },
    ]

    return (
        <div className='flex justify-center gap-8'>
            {
                menuConfig.map(({text, path, svg}) => (
                    <Link
                        key={path}
                        to={path}
                        className='flex flex-col items-center justify-around
                        bg-slate-300 p-5 rounded shadow h-48 w-48
                        font-bold text-white hover:bg-slate-600'
                    >
                        {svg}
                        {text}
                    </Link>
                    
                ))
            }
        </div>
    )
}
