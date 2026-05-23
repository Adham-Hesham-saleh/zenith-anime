import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="container mt-5 text-center text-white min-vh-100">
    <h1 className="text-danger display-1">404</h1>
    <p className="lead">Page not found</p>
    <Link to="/" className="btn btn-outline-danger mt-3">Back to Home</Link>
  </div>
);

export default NotFound;