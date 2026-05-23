import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import { fetchMovies } from '../api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies()
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5 min-vh-100">
      {loading ? (
        <p className="text-center text-white lead mt-5">Loading movies...</p>
      ) : (
        <AnimeList animes={movies} title="MOVIES" />
      )}
    </div>
  );
};

export default Movies;