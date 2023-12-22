/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({setUser, isAuthenticated, setIsAuthenticated}) => {
    const navigate=useNavigate();
    const logOut = () => {
        setIsAuthenticated(false);
        setUser(null);
        navigate('/');
    }

    return (
        <nav className="flex font-mono p-2 text-lg text-gray-500 bg-slate-300">
            <ul className='flex flex-row items-center text-center w-full justify-end gap-8 mr-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to='/tasks'>Task</Link>
                        </li>
                        <li>
                            <Link to='/addTask'>Add task</Link>
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
}

export default Navbar;