import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container contact-container">
        <div className="auth-card text-center">
          <h2 className="text-success mb-3">✓ Message Sent</h2>
          <p className="lead text-white">Thank you, {formData.name}!</p>
          <p className="text-muted">
            We've received your message and will get back to you at {formData.email} soon.
          </p>
          <button
            className="btn btn-outline-danger mt-3"
            onClick={() => {
              setFormData({ name: '', email: '', subject: '', message: '' });
              setSubmitted(false);
            }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container contact-container">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8">
          <h1 className="text-danger text-center mb-2">Contact Us</h1>
          <p className="text-muted text-center mb-5">
            Got feedback, questions, or just want to say hi? Drop us a message.
          </p>

          <div className="auth-card">
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="name" className="text-white">Name</label>
                  <input
                    type="text" id="name" name="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    value={formData.name} onChange={handleChange}
                    placeholder="Your name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="email" className="text-white">Email</label>
                  <input
                    type="email" id="email" name="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    value={formData.email} onChange={handleChange}
                    placeholder="you@example.com"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="text-white">Subject</label>
                <input
                  type="text" id="subject" name="subject"
                  className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                  value={formData.subject} onChange={handleChange}
                  placeholder="What's this about?"
                />
                {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="text-white">Message</label>
                <textarea
                  id="message" name="message" rows="6"
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                />
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-danger btn-block mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;