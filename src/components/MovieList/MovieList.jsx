import { Link, useLocation } from 'react-router-dom';
export default function MovieList({movies}) {
    const location = useLocation();

    const elements = movies.map(({ id, title }) => (
      <li key={id} className="popular-movie">
        <Link
          state={{ from: location }}
          to={'/movies/' + id}
          className="popular-link"
        >
          <p>{title}</p>
        </Link>
      </li>
    ));

    return <ul>{elements}</ul>;
}
