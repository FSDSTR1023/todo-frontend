import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ isAuthenticated, setUser, setIsAuthenticated}) => {
    
    const navigate = useNavigate();
    
    const logOut = () => {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    };
    return (
    <nav className='flex p-2 font-sans text-xl bg-yellow-500 font-medium size-3xl text-black fixed w-full top-0'>
        <div className='justify-start ms-12 text-2xl font-bold italic text-nowrap py-3 text-yellow-800'><p>To-Do App</p></div>
        <ul className=' w-full flex flex-row justify-end items-center text-center gap-8 mr p-4'>
            <li>
            <Link to='/' className='hover:text-yellow-800'>Home</Link>
            </li>
            { isAuthenticated && isAuthenticated ? (
            <>
            <li>
            <Link to='/task' className='hover:text-yellow-800'>Task</Link>
            </li>
            <li>
            <Link to='/add-task' className='hover:text-yellow-800'>Add Task</Link>
            </li>
            <li>
            <Link to='/' onClick={logOut} className='hover:text-yellow-800'>Logout</Link>
            </li>
            </>
            ) : (
            <>
            <li>
            <Link to='/register' className='hover:text-yellow-800'>Register</Link>
            </li>
            <li>
            <Link to='/login' className='hover:text-yellow-800'>Login</Link>
            </li>
            </>
            )}
        </ul>
    </nav>
);
};

export default NavBar;