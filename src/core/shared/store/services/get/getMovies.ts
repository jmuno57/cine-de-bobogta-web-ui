import axios from 'axios';
export const getMovies = async () => {
    try {
        const r =await axios.get('http://localhost:3001/movies');
return r.data
      } catch (error) {
        console.error('Error al agregar la película:', error);
      }
    };
