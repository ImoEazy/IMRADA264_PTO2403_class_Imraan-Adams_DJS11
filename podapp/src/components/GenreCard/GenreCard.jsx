// src/components/GenreCard/GenreCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const GenreCard = ({ genre }) => {
  return (
    <Link to={`/genre/${genre.id}`} className="block bg-gray-100 rounded-lg shadow-md p-4">
      <h3 className="text-xl font-semibold">{genre.title}</h3>
      <p className="text-gray-500">{genre.description}</p>
    </Link>
  );
};

export default GenreCard;