import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary">
      <div className="container text-center text-md-left">
        <div className="row">

          <div className="col-md-6 col-lg-4 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Zenith Anime</h5>
            <p className="small text-muted">
              Zenith is your ultimate archive for tracking and discovering the best anime series and movies. 
              Built for fans who appreciate a clean, dark aesthetic and a seamless browsing experience.
            </p>
          </div>

          <div className="col-md-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-danger">Explore</h6>
            <p><Link to="/movies" className="text-white small">Movies</Link></p>
            <p><Link to="/tvshows" className="text-white small">TV Shows</Link></p>
            <p><Link to="/trending" className="text-white small">Trending</Link></p>
            <p><Link to="/contact" className="text-white small">Contact</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-danger">Contact</h6>
            <p className="small">📍 Alexandria, Egypt</p>
            <p className="small">✉️ support@zenith.com</p>
            <Link to="/contact" className="btn btn-outline-danger btn-sm mt-2">Send a Message</Link>
          </div>

        </div>

        <hr className="mb-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="small text-muted">© 2026 Copyright: <strong>Zenith Anime</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;