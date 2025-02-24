import { postRooms } from '../../../src/core/shared/store/services/post/postRooms';
import { getRooms } from '../../../src/core/shared/store/services/get/getRooms';
import { useEffect, useState } from 'react';

export const useRooms = (refModal: any) => {
  const [rows, setRows] = useState([]);
  const [reload, setReload] = useState<boolean>();
  const getDataRooms = async () => {
    const res = await getRooms();
    console.log(res);
    setRows(res);
  };

  const postDataRoom = async (e: any) => {
    console.log('values for create room', e);
    const body = {
      name: e.nameRoom,
      capacity: 1
    };
    await postRooms(body);
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
