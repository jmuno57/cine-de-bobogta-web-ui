import axios from 'axios';
export const postReserve = async (body:any) => {
    try {
        await axios.post('http://localhost:3001/reserve',body);
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
