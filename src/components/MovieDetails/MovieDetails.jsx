import MovieDetailsMarkup from 'components/MovieDetails/MovieDetailsMarkup/MovieDetailsMarkup';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getMovieDetails } from '../../services/fetchMovie';
import MovieDetailsBtn from './MovieDetailsBtn/MovieDetailsBtn';



export default function MovieDetails() {
  const [details, setDetails] = useState(null);
    

  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(movie => {
      setDetails(movie);

      return movie;
    });
  }, [movieId]);

 

  if (details !== null) {
    const genres = details.genres
      .map(el => {
        return el.name;
      })
      .join(', ');

    const img =
      details.backdrop_path &&
      'https://image.tmdb.org/t/p/original/' + details.backdrop_path;

    const { name, title, overview, vote_average, vote_count, release_date } =
      details;
   
    return (
      <>
        <MovieDetailsMarkup
          img={img}
          name={name}
          title={title}
          overview={overview}
          genres={genres}
          average={vote_average}
          count={vote_count}
          releaseDate={release_date}
        />

        <MovieDetailsBtn />
        
        
      </>
    );
  }
}

