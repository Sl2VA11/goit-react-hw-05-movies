import css from './ReviewsMarkup.module.css';

export default function ReviewsMarkup({ reviews }) {
  console.log(reviews);
  return reviews !== null &&(
    <ul className={css.list}>
      {reviews.map(review => {
        const { id, author, content } = review;
        return (
          <li key={id} className={css.item}>
            <p className={css.author}>{author}</p>
            <p className={css.content}>{content}</p>
          </li>
        );
      })}
    </ul>
  ); 
}
