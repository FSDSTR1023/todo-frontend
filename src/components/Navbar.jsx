import { Link, useNavigate } from 'react-router-dom';
const Navbar = ({setUser, isAuthenticated, setIsAuthenticated}) => {
    const navigate = useNavigate();
    const logOut = ()=>{
        setIsAuthenticated(false);
        setUser(null);
        navigate('/login');
    };

  return (
    <nav className='flex font-mono p-2 text-lg text-gray-500 bg-slate-300 bg-white mb-10'>
      <ul className=' w-full flex flex-row justify-end items-center text-center gap-8 mr hoverMe'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {isAuthenticated ? (
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