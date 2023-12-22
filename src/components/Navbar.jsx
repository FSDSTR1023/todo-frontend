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
        <nav className="flex font-mono p-1 text-lg text-gray-500 bg-slate-300">
            <div className="flex text-lg text-gray-500 bg-slate-300 justify-start w-2/4">
                <ul className='flex flex-row items-center text-center w-full justify-start gap-8 mr-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
            <div className="flex text-lg text-gray-500 bg-slate-300 justify-end">
                <ul className='flex flex-row items-center text-center w-full justify-end gap-8 mr-4'>
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
            </div>
        </nav>
    );
}

export default Navbar;