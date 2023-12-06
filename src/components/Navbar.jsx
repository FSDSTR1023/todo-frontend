import { Link } from 'react-router-dom'

export function Navbar ({ isAuth }) {
  return (
    <>
      <header className='fixed w-full top-0 left-0 p-4'>
        <nav>
          <ul className='flex gap-4'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/tasks'>Tasks</Link>
            </li>
            <li>
              <Link to='/account'>Account</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
