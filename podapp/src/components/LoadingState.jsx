import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-blue-600 rounded-full"></div>
      <span className="ml-4 text-xl">Loading...</span>
    </div>
  );
};

export default LoadingState;