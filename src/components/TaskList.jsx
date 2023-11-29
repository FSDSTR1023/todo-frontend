import instance from '../../api/Connection';

export const Tasklist = () => {
  return instance.get('/tasks')
    .then(response => {
      console.log('Fetched tasks:', response.data);
      return response.data; // Returning the tasks data
    })
    .catch(error => {
      console.error('Error fetching tasks:', error);
      throw error; // Throw error to handle it elsewhere if needed
    });
};

export default Tasklist