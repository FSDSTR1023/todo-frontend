import instance from './Connection';

function getTasks() {
  instance.get('/tasks')
    .then((response) => {
      console.log('Fetched tasks:', response.data);
      // Handle the tasks data
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default getTasks