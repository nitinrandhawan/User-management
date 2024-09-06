import React from 'react';

const ErrorAlert = ({ message }) => (
  <div className="bg-red-500 text-white p-3 rounded">
    <p>{message}</p>
  </div>
);

export default ErrorAlert;
