import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchAnimeById } from '../api';

const AnimeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchAnimeById(id)
      .then(data => {
        setAnime(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center text-white min-vh-100">
        <p className="lead mt-5">Loading...</p>
      </div>
    );
  }

  if (notFound || !anime) {
    return (
      <div className="container mt-5 text-center text-white min-vh-100">
        <h1 className="text-danger">Anime Not Found</h1>
        <Link to="/" className="btn btn-outline-danger mt-3">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 text-white pb-5">
      <button className="btn btn-outline-danger mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="row">
        <div className="col-md-4">
          <img src={anime.img} className="img-fluid rounded shadow" alt={anime.title} />
        </div>
        <div className="col-md-8">
          <h1 className="display-4 text-danger font-weight-bold">{anime.title}</h1>
          <div className="mb-3">
            <span className="badge badge-secondary mr-2">{anime.year}</span>
            <span className="badge badge-danger">Score: {anime.score}</span>
          </div>
          <p className="lead"><strong>Author:</strong> {anime.author}</p>
          <hr className="border-secondary" />
          <h3>Synopsis</h3>
          <p className="text-muted" style={{lineHeight: '1.8'}}>{anime.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;