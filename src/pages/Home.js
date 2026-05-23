import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';
import { fetchAnimes } from '../api';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const isSearching = searchTerm.trim() !== '';

  useEffect(() => {
    fetchAnimes()
      .then(data => {
        setAnimes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const results = isSearching
    ? animes.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <>
      <div className={isSearching ? "hero-section-small" : "hero-section"}>
        <div className="search-container px-3 text-center">
          <h1>{isSearching ? "Search Results" : "Your #1 Anime Hub"}</h1>
          <input
            type="text"
            className="form-control search-input"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {isSearching && (
        <div className="container mt-5 min-vh-100">
          {loading ? (
            <p className="text-center text-white lead mt-5">Loading...</p>
          ) : (
            <AnimeList animes={results} title="" />
          )}
        </div>
      )}
    </>
  );
};

export default Home;