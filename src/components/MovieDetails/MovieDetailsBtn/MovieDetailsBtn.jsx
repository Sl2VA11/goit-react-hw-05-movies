import { Outlet } from 'react-router-dom';
import MovieDetailsBtnMarkup from 'components/MovieDetails/MovieDetailsBtn/MovieDetailsBtnMarkup/MovieDetailsBtnMarkup';
import useToogle from 'hooks/UseToogle';
export default function MovieDetailsBtn() {
   const {
    openCast,
    openReviews,
    disabledCast,
    disabledReviews,
    toggleCast,
    toggleReviews,
  } = useToogle();

  return (
    <>
      <MovieDetailsBtnMarkup
        toggleCast={toggleCast}
        disabledCast={disabledCast}
        openCast={openCast}
        toggleReviews={toggleReviews}
        disabledReviews={disabledReviews}
        openReviews={openReviews}
      />
      {openCast === true && <Outlet />}
      {openReviews === true && <Outlet />}
    </>
  );
}
