import { useEffect, useState } from 'react';
import { getBillboard } from '../../../src/core/shared/store/services/get/getBillboard';
import { postBillboard } from '../../../src/core/shared/store/services/post/postBillboard';

export const useBillboard = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const res = await getBillboard();
    console.log(res);
    setRows(res);
  };

  const postDataRoom = async (e: any) => {
    console.log("Aqui", e)
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
