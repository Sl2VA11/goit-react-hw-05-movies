import { Suspense } from 'react';
import Loader from '././Loader/Loader';
import NavBar from '././NavBar/NavBar';
import MovieRoutes from './MovieRoutes/MovieRoutes';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />

      <MovieRoutes />
    </Suspense>
  );
};
