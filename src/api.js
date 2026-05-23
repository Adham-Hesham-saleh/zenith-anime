const API_URL = 'http://localhost:5000/api';

export const fetchAnimes = async () => {
  const res = await fetch(`${API_URL}/animes`);
  if (!res.ok) throw new Error('Failed to fetch animes');
  return res.json();
};

export const fetchMovies = async () => {
  const res = await fetch(`${API_URL}/animes/movies`);
  if (!res.ok) throw new Error('Failed to fetch movies');
  return res.json();
};

export const fetchTVShows = async () => {
  const res = await fetch(`${API_URL}/animes/tvshows`);
  if (!res.ok) throw new Error('Failed to fetch TV shows');
  return res.json();
};

export const fetchTrending = async () => {
  const res = await fetch(`${API_URL}/animes/trending`);
  if (!res.ok) throw new Error('Failed to fetch trending');
  return res.json();
};

export const fetchAnimeById = async (id) => {
  const res = await fetch(`${API_URL}/animes/${id}`);
  if (!res.ok) throw new Error('Anime not found');
  return res.json();
};

export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Registration failed');
  return data;
};

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Login failed');
  return data;
};