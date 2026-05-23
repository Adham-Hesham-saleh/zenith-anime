import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('zenithUser');
    return stored ? JSON.parse(stored) : null;
  });
  const navigate = useNavigate();
  const close = () => setIsOpen(false);

  useEffect(() => {
    const handleAuthChange = () => {
      const stored = localStorage.getItem('zenithUser');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('zenith-auth-change', handleAuthChange);
    return () => window.removeEventListener('zenith-auth-change', handleAuthChange);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('zenithUser');
    setUser(null);
    close();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand text-danger font-weight-bold">
          ZENITH
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <div className="navbar-nav mr-auto">
            <NavLink to="/movies" className="nav-link" onClick={close}>Movies</NavLink>
            <NavLink to="/tvshows" className="nav-link" onClick={close}>TV Shows</NavLink>
            <NavLink to="/trending" className="nav-link" onClick={close}>Trending</NavLink>
          </div>
          <div className="navbar-nav align-items-center">
            {user ? (
              <>
                <span className="nav-link text-white mr-2">👤 {user.name}</span>
                <button className="btn btn-outline-danger px-3 my-1 my-md-0" onClick={handleLogout}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-link" onClick={close}>Sign In</NavLink>
                <NavLink to="/register" className="btn btn-danger px-3 my-1 my-md-0" onClick={close}>Sign Up</NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
