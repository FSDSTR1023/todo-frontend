import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { CreateUser } from "../../api/Users";

const SignUp = () => {
  const navigate = useNavigate();
  const [formUserData, setformUserData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    deletedAt: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformUserData({
      ...formUserData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const createdUser = await CreateUser(formUserData);

      console.log('User created:', createdUser);

      navigate('/tasks', { replace: true });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formUserData.name}
            onChange={handleChange}
            maxLength={20}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="surname" className="block mb-1">
            Surname:
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formUserData.surname}
            onChange={handleChange}
            maxLength={30}
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formUserData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-1">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formUserData.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp 