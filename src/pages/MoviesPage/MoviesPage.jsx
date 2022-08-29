import SearchBar from 'pages/MoviesPage/SearchBar/SearchBar';
import { useState, useEffect,  } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { getSearchMovie } from '../../services/fetchMovie';
import MovieList from 'components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const idMovie = searchParams.get('searchMovie') ?? '';
  console.log(idMovie);

  const onChange = inputValue => {

    setSearchParams(
      inputValue !== ''
        ? { searchMovie: inputValue }
        : Notiflix.Notify.failure(`Enter movie name`)
    );
  };

  useEffect(() => {
    if (idMovie === '') {
      return;
    }

    getSearchMovie(idMovie).then(res => {
      if (res.length === 0) {
        Notiflix.Notify.failure(`We couldn't find ${idMovie}:(`);
      }
      setMovies(res);

      return res;
    });
  }, [idMovie]);

 
  
  return (
    <>
      <SearchBar onChange={onChange} />

      {movies && <MovieList movies={movies} />}
    </>
  );
}
