import axios from 'axios'

const token = localStorage.getItem('token');
const instance = axios.create({
	baseURL: 'http://localhost:8000',
	withCredentials: true,
	headers: {
		Authorization: `Bearer ${token}`,
		'Content-Type': 'application/json',
	},
});


instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;