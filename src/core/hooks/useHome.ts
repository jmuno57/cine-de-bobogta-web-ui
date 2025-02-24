import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const navigation: any = {
  Reservas: '/reservation',
  'Creación de salas': '/createRoom',
  'Creación de peliculas': '/createMovie',
  'Creación de cartelera': '/createBillboard'
};

const intemSelect: any = {
  '/reservation': 0,
  '/param': 1,
  '/createMovie': 2,
  '/createBillboard': 3
};

export const useHome = (sideBar: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [itemSelected, setItemSelected] = useState(1);
  const sideOpen = (event: any) => {
    console.log(event);
    const select: any = event.detail.item.label;
    navigate(navigation[select]);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    sideBar.current?.addEventListener('sidebarEmitter', sideOpen);
    return () => {
      sideBar.current?.removeEventListener('sidebarEmitter', sideOpen);
    };
  }, []);

  useEffect(() => {
    setItemSelected(intemSelect[location.pathname]);
  }, [location.pathname]);
  return {
    itemSelected
  };
};
