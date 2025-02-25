import { useEffect, useState } from 'react';
import { getBillboard } from '../../../src/core/shared/store/services/get/getBillboard';
import { postBillboard } from '../../../src/core/shared/store/services/post/postBillboard';
import { getMovies } from '../../../src/core/shared/store/services/get/getMovies';
import { getRooms } from '../../../src/core/shared/store/services/get/getRooms';

export const useBillboard = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [movies, setMovies] = useState([{ text: '', value: '' }]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const resMovies = await getMovies();
    const resRooms = await getRooms();
    const movies = resMovies.map(movie => ({
      text: movie.title,
      value: movie._id
    }));
    setMovies(movies);
    const rooms = resRooms.map(room => ({
      text: room.name,
      value: room._id
    }));
    setRooms(rooms);
  };

  const getDataComplet = async () => {
    const res = await getBillboard();
    setRows(res);
  };

  const postDataRoom = async (e: any) => {
    const body = {
      movieId: e.nam,
      roomId: '67bc004f230e09df8a363ce3',
      startTime: new Date(Date.now()),
      endTime: new Date(Date.now() + 2)
    };
    await postBillboard(body);
    setReload(true);
    refModal?.current?.handleCloseClick();
  };
  const openCreateRoom = () => {
    refModal?.current?.openAlert();
  };
  const closeModal = () => {
    refModal?.current?.handleCloseClick();
  };
  useEffect(() => {
    getDataRooms();
    getDataComplet();
  }, [reload]);
  useEffect(() => {
    refModal.current?.addEventListener('buttonAlertClicked', closeModal);
    return () => {
      refModal.current?.removeEventListener('buttonAlertClicked', closeModal);
    };
  }, []);

  return {
    rows,
    openCreateRoom,
    postDataRoom,
    rooms,
    movies
  };
};
