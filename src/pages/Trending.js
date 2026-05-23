import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import { fetchTrending } from '../api';

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrending()
      .then(data => {
        setTrending(data);
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
        <p className="text-center text-white lead mt-5">Loading trending...</p>
      ) : (
        <AnimeList animes={trending} title="TRENDING" />
      )}
    </div>
  );
};

export default Trending;