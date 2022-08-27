import CastMarkup from 'components/Cast/CastMarkup/CastMarkup';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { getMovieCredits } from 'services/fetchMovie';
import css from './Cast.module.css';

export default function Cast() {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  // const location = useLocation()
 
  // console.log(location.state.from);

  useEffect(() => {
    getMovieCredits(movieId).then(res => {
      setCredits(res);
      return res;
    });
  }, [movieId, setCredits]);

 
    return credits.length > 0 ? (
      <ul className={css.list}>
        <CastMarkup credits={credits} />
      </ul>
    ) : (
      <div className="title-wrapper">
        <p className="title">There are no cast in this movie.</p>
      </div>
    );
}

