import { useEffect, useState } from 'react';
import { postBillboard } from '../../../src/core/shared/store/services/post/postBillboard';
import { getReservation } from '../../../src/core/shared/store/services/get/getReservation';

export const useReservation = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const res = await getReservation();
    console.log(res);
    const result = res.flatMap(entry => {
      return entry.seats.map(seat => ({
        id:'',
        name: entry.name,
        email: entry.email,
        seat: seat,
        movieId: entry.shedule.movie,
        roomId: entry.shedule.room,
        startTime: entry.shedule.startTime,
        endTime: entry.shedule.endTime,
      }));
    });
console.log("Buenas",result)
    setRows(result);
  };

  const postDataRoom = async (e: any) => {
    console.log('Aqui', e);
    const body = {
      movieId: e.nameMovie,
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
    postDataRoom
  };
};
