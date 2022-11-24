import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:movieId" element={<MovieDetails />}>
          <Route path="/Movies/:movieId/cast" element={<Cast />} />
          <Route path="/Movies/:movieId/reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
