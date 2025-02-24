import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './modules/home/page/Home';
import Room from './modules/room/page/Room';
import Movie from './modules/room/page/Movie';
import Billboard from './modules/room/page/Billboard';
import Reservation from './modules/room/page/Reservation';

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="/reservation" element={<Reservation />} />
          <Route path="/createRoom" element={<Room />} />
          <Route path="/createMovie" element={<Movie />} />
          <Route path="/createBillboard" element={<Billboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
