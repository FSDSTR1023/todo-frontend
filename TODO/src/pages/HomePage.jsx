import { Link } from 'react-router-dom'

export function HomePage ({ user }) {
  return (
    <div className='relative w-full h-screen isolate flex items-baseline overflow-hidden bg-red-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-9 lg:pt-10'>
      <svg
        viewBox='0 0 1024 1024'
        className='absolute left-1/2 top-1/2 -z-10 h- -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2'
        aria-hidden='true'
      >
        <circle cx={512} cy={512} r={512} fill='url(#759c1415-0410-454c-8f7c-9a820de03641)' fillOpacity='0.7' />
        <defs>
          <radialGradient id='759c1415-0410-454c-8f7c-9a820de03641'>
            <stop stopColor='#7775D6' />
            <stop offset={1} stopColor='#E9C1' />
          </radialGradient>
        </defs>
      </svg>
      <div className='mx-auto max-w-md text-center lg:mx-0 lg:flex-auto  lg:text-left'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
          Bienvenido a mi pagina web 
          <br />
          
        </h2>
        <p className='mt-6 text-lg leading-8 text-gray-300'>
        Daniel Alejandro Galarza
        </p>
        <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
          <Link
            to={user ? '/tasks' : '/login'}
            className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
          >
            Empezemos
          </Link>

        </div>
      </div>

    </div>

  )
}
