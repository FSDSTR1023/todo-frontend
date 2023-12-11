import instance from './Connection';

export const GetAllUsers = () => instance.get('/users');
export const CreateUser = (formUserData) => instance.post('/users', formUserData);
export const LogInUser = async (loginData) => {
  try {
    const response = await instance.post('/users/login', loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};