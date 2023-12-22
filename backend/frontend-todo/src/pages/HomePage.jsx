import React from 'react'

const HomePage = () => {
    return (
    <>
    <div className='flex justify-center items-center h-screen'>
        <div class=" w-1/2 text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">To do app</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">Welcome! to-do app is a productivity tool that can help you stay on top of your work and personal life. It can help you manage your tasks, set deadlines, and track your progress. It`s the perfect tool to help you get things done. Sign up today and start getting organized!</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            </div>
        </div>
        </div>
    </>
        )
}

export default HomePage