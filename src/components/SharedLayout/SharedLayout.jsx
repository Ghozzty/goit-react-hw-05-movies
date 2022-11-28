import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
