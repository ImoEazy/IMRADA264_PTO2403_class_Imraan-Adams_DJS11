import React from 'react';
import { Link } from 'react-router-dom';
import genreMapping from '../utils/genreMapping';

const ShowCard = ({ show }) => {
  const { id, name, image, seasons, genres, updatedAt } = show;

  // Get the genre names from the genre IDs
  const genreNames = genres.map((genreId) => genreMapping[genreId]).join(', ');

  // Format the updatedAt date into a human-readable format
  const formattedDate = new Date(updatedAt).toLocaleDateString();

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Preview image */}
      <div className="mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>

      {/* Show Name */}
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

      {/* Genres */}
      <p className="text-sm text-gray-600 mt-1">{genreNames}</p>

      {/* Seasons and Last Updated */}
      <div className="mt-2 flex justify-between text-gray-500">
        <p>{seasons.length} Seasons</p>
        <p>Updated: {formattedDate}</p>
      </div>

      {/* Link to the show details page */}
      <div className="mt-4">
        <Link
          to={`/show/${id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;