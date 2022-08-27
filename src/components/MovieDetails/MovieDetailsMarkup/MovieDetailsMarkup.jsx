import { Link, useLocation } from 'react-router-dom';
import css from './MovieDetailsMarkup.module.css';

export default function MovieDetailsMarkup({
  name,
  img,
  title,
  overview,
  genres,
  average,
  count,
  releaseDate,
}) {
  const location = useLocation()
  
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <Link
        to={backLinkHref}
        
        className={css.btnWrapper}
      >
        <button className="btn">Go back</button>
      </Link>
      <div className={css.div}>
        <div className={css.imgWrapper}>
          <img src={img} alt={name} width={650} className={css.img} />
        </div>
        <div>
          <p className={css.title}>
            {title} ({releaseDate.slice(0, 4)})
          </p>
          <p className={css.score}>
            <span className={css.average}>{average.toFixed(2)} </span> / {count}
          </p>
          {overview ? (
            <p className={css.overview}>{overview}</p>
          ) : (
            <p>{title} Don't have overview</p>
          )}
          <p className={css.genresName}>
            {' '}
            <span className={css.genres}>Genres:</span> {genres}
          </p>
        </div>
      </div>
    </>
  );
}
