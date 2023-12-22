import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavBar = ({ isAuthenticated, setUser, setIsAuthenticated }) => {
    const navigate = useNavigate()
    const logOut = () => {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    }
    console.log('Navbar isAuth', isAuthenticated);
  return (
   <nav className='flex flex-row font-mono p-2 text-lg text-gray-500 bg-slate-300'>
        <ul className='w-full flex flex-row justify-end items-center text-center gap-8 ml-3'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            {isAuthenticated && isAuthenticated ? (
                <>
                <li>
                    <Link to='/task'>Task</Link>
                </li>
                <li>
                    <Link to='/add-task'>Add Task</Link>
                </li>
                <li>
                    <Link to='/login' onClick={logOut}>Log Out</Link>
                </li>
                </>
            ) : (
                <>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Log In</Link>
                </li>
                </>
            )}
        </ul>
    </nav>
  )
}

export default NavBar