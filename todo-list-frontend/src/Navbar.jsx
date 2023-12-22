import { Link, Routes, Route, useNavigate, useLocation } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        console.log('nav to', path);
        navigate(path);
    };

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button className='bg-stone-200 rounded-lg px-4 py-2 m-2' onClick={() => handleNavigate('/')}>Home</button>
                <button className='bg-stone-200 rounded-lg px-4 py-2 m-2' onClick={() => handleNavigate('/new')}>Create a task</button>
            </div>
        </nav>
    );
}
 
export default Navbar;