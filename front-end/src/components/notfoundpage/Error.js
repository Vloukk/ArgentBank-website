import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="not-found-page bg-dark">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>We're sorry, but the page you're looking for doesn't exist.</p>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
};

export default Error;