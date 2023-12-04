import axios from "axios";
import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return [users, getUsers];
};

export default useUsers;
