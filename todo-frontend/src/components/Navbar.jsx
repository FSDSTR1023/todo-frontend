import { Link , useNavigate } from "react-router-dom";

const Navbar = ({user, isAuthenticated, setIsAutenticated}) => {
  const navigate = useNavigate();
  const logOut = () =>{
    setIsAutenticated(false);
    setUser(null);
    navigate('/login');
  };


  return (
    <nav className="flex font-mono p-2 text-lg text-gray-500 bg-slate-300">
      <ul className=" w-full flex flex-row justify-end items-center text-center gap-8 mr">
        <li>
          <Link to="/">Home</Link>
        </li>

        {isAuthenticated && isAuthenticated ? (
          <>
            <li>
              <Link to="/task">Task</Link>
            </li>

            <li>
              <Link to="/add-task">Add Task</Link>
            </li>

            <li>
              <Link to="/" onClick={LogOut}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
