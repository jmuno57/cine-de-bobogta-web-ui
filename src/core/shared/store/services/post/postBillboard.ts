import axios from 'axios';
export const postBillboard = async (body:any) => {
    try {
        await axios.post('http://localhost:3001/billboard',body);
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
