// api.js
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('http://tu-servidor/api/tu-endpoint');
    // Haz algo con los datos de respuesta aquí
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

export default fetchData;

//Luego, puedes importar y usar esta función en cualquier componente donde necesites realizar una solicitud HTTP:

// // OtroComponente.js
// import React, { useEffect } from 'react';
// import fetchData from './api';

// const OtroComponente = () => {
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     // Renderiza tu componente aquí
//   );
// };

// export default OtroComponente;

