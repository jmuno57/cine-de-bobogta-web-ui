import axios from 'axios';
export const getRooms = async () => {
    try {
        const r =await axios.get('http://localhost:3001/rooms');
return r.data
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
