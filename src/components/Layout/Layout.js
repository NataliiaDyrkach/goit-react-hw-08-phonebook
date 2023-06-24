import AppBar from 'components/AppBar/AppBar';
import css from './Layout.module.css';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <div className={css.header}>
        <AppBar />
      </div>
      <div className={css.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
