import { Outlet } from 'react-router-dom';
import Menu from '../Menu';
import BackgroundSlider from '../BackgroundSlider';
import Footer from '../footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Menu />
      <BackgroundSlider />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
