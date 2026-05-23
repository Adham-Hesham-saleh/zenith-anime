import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
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
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
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
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      await registerUser({ name: formData.name, email: formData.email, password: formData.password });
      localStorage.setItem('zenithUser', JSON.stringify({ name: formData.name }));
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
          <h2 className="text-success">✓ Account Created</h2>
          <p className="text-muted">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container auth-container">
      <div className="auth-card">
        <h2 className="text-danger text-center mb-4">Create Account</h2>
        {serverError && (
          <div className="alert alert-danger py-2">{serverError}</div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="text-white">Full Name</label>
            <input
              type="text" id="name" name="name"
              className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              value={formData.name} onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

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
              placeholder="At least 6 characters"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="text-white">Confirm Password</label>
            <input
              type="password" id="confirmPassword" name="confirmPassword"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              value={formData.confirmPassword} onChange={handleChange}
              placeholder="Re-enter password"
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          <button type="submit" className="btn btn-danger btn-block mt-4">
            Create Account
          </button>
        </form>

        <p className="text-center text-muted mt-4 mb-0">
          Already have an account? <Link to="/login" className="text-danger">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;