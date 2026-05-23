import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ animes, title }) => {
  if (!animes || animes.length === 0) {
    return (
      <div className="anime-list pb-5 text-center">
        {title && <h2 className="text-danger mb-4">{title}</h2>}
        <p className="text-muted lead mt-5">No anime found.</p>
      </div>
    );
  }

  return (
    <div className="anime-list pb-5">
      {title && <h2 className="text-danger mb-4">{title}</h2>}
      <div className="row">
        {animes.map((anime) => (
          <Link
            to={`/anime/${anime.id}`}
            className="col-6 col-md-3 mb-5 text-center"
            key={anime.id}
          >
            <div className="anime-img-container shadow">
              <img src={anime.img} alt={anime.title} className="anime-img" />
            </div>
            <div className="anime-title-wrapper">
              <p className="anime-title px-2">{anime.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;