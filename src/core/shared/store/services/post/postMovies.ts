import axios from 'axios';
export const postMovies = async (body:any) => {
    try {
        await axios.post('http://localhost:3001/movies',body);
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
