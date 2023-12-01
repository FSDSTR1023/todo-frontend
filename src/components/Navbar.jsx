import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated, setUser, setIsAuthenticated}) => {
    
    const navigate = useNavigate();
    
    const logOut = () => {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    };
    return (
    <nav className='flex p-2 font-sans text-xl bg-indigo-600 font-normal tracking-wider text-slate-50'>
        <ul className=' w-full flex flex-row justify-end items-center text-center gap-8 mr p-4'>
            <li>
            <Link to='/'>Home</Link>
            </li>
            { isAuthenticated && isAuthenticated ? (
            <>
            <li>
            <Link to='/task'>Task</Link>
            </li>
            <li>
            <Link to='/add-task'>Add Task</Link>
            </li>
            <li>
            <Link to='/' onClick={logOut}>Logout</Link>
            </li>
            </>
            ) : (
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
);
};

export default Navbar;