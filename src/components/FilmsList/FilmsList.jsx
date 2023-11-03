import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function FilmsList({ films }) {
  const location = useLocation();

  return (
    <ul>
      {Boolean(films) &&
        films.map(({ title, id }) => (
          <li key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        ))}
    </ul>
  );
}
