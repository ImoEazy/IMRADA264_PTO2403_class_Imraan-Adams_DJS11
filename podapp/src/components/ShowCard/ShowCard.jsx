// src/components/ShowCard/ShowCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <Link to={`/show/${show.id}`} className="block bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={show.image} alt={show.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{show.title}</h2>
        <p className="text-gray-500">{show.description}</p>
      </div>
    </Link>
  );
};

export default ShowCard;