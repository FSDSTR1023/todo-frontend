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
        <nav className="mx-auto flex justify-between font-mono ps-5 pe-5 p-1 text-lg text-neutral-950 bg-blue-500 w-screen">
            <div className="flex text-lg bg-blue-500 justify-start w-2/4">
                <ul className='flex flex-row items-center text-center w-full justify-start gap-8 mr-4'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                </ul>
            </div>
            <div className="flex text-lg bg-blue-500 justify-end items-rigth">
                <ul className='flex flex-row items-center text-center w-full justify-end gap-8 mr-4'>
                    {isAuthenticated ? (
                        <>
                            <li>
                                <Link to='/tasks'>Task</Link>
                            </li>
                            <li>
                                <Link to='/addTask'>Create task</Link>
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