import axios from 'axios';
export const getBillboard = async () => {
    try {
        const r =await axios.get('http://localhost:3001/billboard');
return r.data
      } catch (error) {
        console.error('Error al agregar la cartelera:', error);
      }
    };
