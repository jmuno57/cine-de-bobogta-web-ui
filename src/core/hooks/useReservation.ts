import { useEffect, useState } from 'react';
import { getReservation } from '../../../src/core/shared/store/services/get/getReservation';
import { getBillboard } from '../../../src/core/shared/store/services/get/getBillboard';
import { postReserve } from '../../../src/core/shared/store/services/post//postReservation';

export const useReservation = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [shedule, setShedule] = useState([]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const res = await getReservation();
    const result = res.flatMap(entry => {
      return entry.seats.map(seat => ({
        id: '',
        name: entry.name,
        email: entry.email,
        seat: seat,
        movieId: entry.shedule.movie,
        roomId: entry.shedule.room,
        startTime: entry.shedule.startTime,
        endTime: entry.shedule.endTime
      }));
    });
    setRows(result);
  };
  const getData = async () => {
    const resMovies = await getBillboard();
    console.log('Nuevooooo', resMovies);
    const movies = resMovies.map(movie => ({
      text: movie._id,
      value: movie._id
    }));
    setShedule(movies);
  };
  const postDataRoom = async (e: any) => {
    console.log(e);
    const body = {
      name: e.client,
      email: e.email,
      seats: [Number(e.site)],
      sheduleId: e.nam
    };

    await postReserve(body);
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
    getData();
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
    shedule
  };
};
