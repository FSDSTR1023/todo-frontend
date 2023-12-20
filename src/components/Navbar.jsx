import { Link } from 'react-router-dom'

export function Navbar ({ user }) {
  return (
    <>
      <header className='sticky w-full top-0 z-10 left-0 p-4 bg-trasparent backdrop-blur-md flex justify-center md:justify-end bg-gray-900/60 text-white'>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {user
              ? (
                <>
                  <li>
                    <Link to='/tasks'>Tasks</Link>
                  </li>
                  <li>
                    <Link to='/account'>Account</Link>
                  </li>
                  <li>
                    <Link to='/logout'>Logout</Link>
                  </li>
                </>
                )
              : (
                <>
                  <li>
                    <Link to='/register'>Register</Link>
                  </li>
                  <li>
                    <Link to='/login'>Login</Link>
                  </li>
                </>
                )}
          </ul>
        </nav>
      </header>
    </>
  )
}
