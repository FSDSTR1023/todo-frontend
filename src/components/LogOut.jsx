import { useNavigate } from 'react-router-dom';

const handleLogout = () => {
  const navigate = useNavigate();
  localStorage.removeItem(token);
  navigate('/login');
};

export default handleLogout;
