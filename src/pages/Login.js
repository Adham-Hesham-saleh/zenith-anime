import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setServerError('');
    try {
      const data = await loginUser({ email: formData.email, password: formData.password });
      localStorage.setItem('zenithUser', JSON.stringify({ name: data.name }));
      window.dispatchEvent(new Event('zenith-auth-change'));
      setSubmitted(true);
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setServerError(err.message);
    }
  };

  if (submitted) {
    return (
      <div className="container auth-container">
        <div className="auth-card text-center">
          <h2 className="text-success">✓ Login Successful</h2>
          <p className="text-muted">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container auth-container">
      <div className="auth-card">
        <h2 className="text-danger text-center mb-4">Sign In</h2>
        {serverError && (
          <div className="alert alert-danger py-2">{serverError}</div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email" className="text-white">Email</label>
            <input
              type="email" id="email" name="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email} onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="text-white">Password</label>
            <input
              type="password" id="password" name="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              value={formData.password} onChange={handleChange}
              placeholder="••••••••"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-danger btn-block mt-4">
            Sign In
          </button>
        </form>

        <p className="text-center text-muted mt-4 mb-0">
          Don't have an account? <Link to="/register" className="text-danger">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
