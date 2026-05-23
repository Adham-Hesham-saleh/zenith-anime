import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import { fetchTVShows } from '../api';

const TVShows = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTVShows()
      .then(data => {
        setShows(data);
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
        <p className="text-center text-white lead mt-5">Loading TV shows...</p>
      ) : (
        <AnimeList animes={shows} title="TV SHOWS" />
      )}
    </div>
  );
};

export default TVShows;