import axios from 'axios';
export const postRooms = async (body:any) => {
    try {
        await axios.post('http://localhost:3001/rooms',body);
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
