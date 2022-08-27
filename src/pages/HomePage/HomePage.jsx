import { useEffect, useState } from 'react';
import {getTrendingMovie} from '../../services/fetchMovie';
import MovieList from 'components/MovieList/MovieList';
export default function HomePage() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getTrendingMovie().then(movie => {
      setMovie(movie);

      return movie;
    });
  }, []);

  return (
    <>
      <h1 className="movie-title">Movies</h1>
      {movie !== null && <MovieList movies={movie} />}
    </>
  );
}
