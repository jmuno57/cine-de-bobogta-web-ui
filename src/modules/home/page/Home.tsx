import './Home.css';
import { useRef } from 'react';
import { useHome } from 'src/core/hooks/useHome';
import { Outlet } from 'react-router-dom';
interface ISideBar {
  icon: string;
  label: string;
  isActive?: string;
}
const itemsSidebar: ISideBar[] = [
  {
    icon: 'ico-home',
    label: 'Reservas'
  },
  {
    icon: 'ico-form-pencil',
    label: 'Creación de salas'
  },
  {
    icon: 'ico-form-pencil',
    label: 'Creación de peliculas'
  },
  {
    icon: 'ico-form-pencil',
    label: 'Creación de cartelera'
  }
];
const Home = () => {
  const sideBar = useRef();
  const { itemSelected } = useHome(sideBar);
  return (
    <div>
      <div className={'main-container-mainInbox'}>
        <div style={{ width: '112px' }}>
          <div style={{ position: 'fixed', top: '0px' }}>
            <bdb-ml-sidebar
              ref={sideBar}
              items-sidebar={JSON.stringify(itemsSidebar)}
              item-selected={itemSelected}
            ></bdb-ml-sidebar>
          </div>
        </div>
        <div style={{ width: '80%', marginLeft: '15%' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
