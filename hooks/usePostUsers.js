import axios from "axios";
import { useState } from "react";

const usePostUsers = () => {
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState(null);

  const postUser = async (user, onSuccess) => {
    setIsPosting(true);
    setError(null);
    try {
      await axios.post("http://localhost:3001/users", user);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError(err);
    } finally {
      setIsPosting(false);
    }
  };

  return { postUser, isPosting, error };
};

export default usePostUsers;
