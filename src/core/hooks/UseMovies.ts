import { useEffect, useState } from 'react';
import { getMovies } from '../shared/store/services/get/getMovies';
import { postMovies } from '../shared/store/services/post/postMovies';

export const useMovies = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const res = await getMovies();
    console.log(res);
    setRows(res);
  };

  const postDataRoom = async (e: any) => {
    console.log('values for create room', e);
    const body = {
      title: e.nameMovie,
      duration: parseInt(e.durationMovie, 10),
      clasification: e.descriptionMovie,
      genre: e.genreMovie
    };
    await postMovies(body);
    setReload(true);
    refModal?.current?.handleCloseClick();
  };
  const openCreateMovie = () => {
    refModal?.current?.openAlert();
  };
  const closeModal = () => {
    refModal?.current?.handleCloseClick();
  };
  useEffect(() => {
    getDataRooms();
  }, [reload]);

  useEffect(() => {
    refModal.current?.addEventListener('buttonAlertClicked', closeModal);
    return () => {
      refModal.current?.removeEventListener('buttonAlertClicked', closeModal);
    };
  }, []);

  return {
    rows,
    openCreateMovie,
    postDataRoom
  };
};
