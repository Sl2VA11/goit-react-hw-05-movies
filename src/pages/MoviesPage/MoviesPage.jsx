import SearchBar from 'pages/MoviesPage/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

import { getSearchMovie } from '../../services/fetchMovie';
import MovieList from 'components/MovieList/MovieList';

export default function MoviesPage() {
  const [value, setValue] = useState(null);
  const [movies, setMovies] = useState(null);
  const onChange = inputValue => {
    setValue(inputValue);
  };

  useEffect(() => {
    if (value === null) {
      return;
    }
    getSearchMovie(value).then(res => {
      if (res.length === 0) {
        Notiflix.Notify.failure("We couldn't find this movie :(");
      }
      setMovies(res);
      
      return res;
    });
  }, [value]);

  return (
    <>
      <SearchBar onChange={onChange} />

      {movies !== null && <MovieList movies={movies} />}
    </>
  );
}
