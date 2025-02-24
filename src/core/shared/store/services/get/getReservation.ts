import axios from 'axios';
export const getReservation = async () => {
    try {
        const r =await axios.get('http://localhost:3001/reserve');
return r.data
      } catch (error) {
        console.error('Error al agregar la cartelera:', error);
      }
    };
