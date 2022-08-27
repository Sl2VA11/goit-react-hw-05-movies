import { Link, useLocation} from 'react-router-dom';
import css from '../../MovieDetailsMarkup/MovieDetailsMarkup.module.css';
export default function MovieDetailsBtnMarkup({
  toggleCast,
  disabledCast,
  openCast,
  toggleReviews,
  disabledReviews,
  openReviews,
}) {
  const location = useLocation();
 
  return (
    <div className={css.btnLinkWrapper}>
      <Link  to="cast" state={{ from: location.state.from }}>
        <button
          className={`btn ${css.btnCast}`}
          onClick={toggleCast}
          disabled={disabledCast}
        >
          {openCast === false ? 'View Cast' : 'Hide Cast'}
        </button>
      </Link>

      <Link  to="reviews" state={{ from: location.state.from }}>
        <button
          className="btn"
          onClick={toggleReviews}
          disabled={disabledReviews}
        >
          {openReviews === false ? 'View Reviews' : 'Hide Reviews'}
        </button>
      </Link>
    </div>
  );
}
