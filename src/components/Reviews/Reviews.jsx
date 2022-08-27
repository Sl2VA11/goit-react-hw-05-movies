import { useEffect, useState } from 'react';
import { getMovieReviews } from 'services/fetchMovie';
import { useParams } from 'react-router-dom';
import ReviewsMarkup from 'components/Reviews/ReviewsMarkup/ReviewsMarkup';
export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(res => {
      console.log(res);
      setReviews(res);

      return res;
    });
  }, [movieId]);

  console.log(reviews);
  return reviews.length > 0 ? (
    <ReviewsMarkup reviews={reviews} />
  ) : (
    <div className="title-wrapper">
      <p className="title">There are no reviews in this movie.</p>
    </div>
  ); 
}
