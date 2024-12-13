import React from 'react';
import { Link } from 'react-router-dom';
import genreMapping from '../utils/genreMapping';

const ShowCard = ({ show }) => {
  const { id, name, image, seasons, genres, updated } = show;

  // Get the genre names from the genre IDs
  const genreNames = genres.map((genreId) => genreMapping[genreId]).join(', ');

  // Format the updatedAt date into a human-readable format
  const formattedDate = new Date(updated).toLocaleDateString();

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
      <p className="text-sm text-gray-800 mt-1">{show.title}</p>

      {/* Seasons and Last Updated */}
      <div className="mt-2 flex justify-between text-gray-800">
        <p>{seasons} Seasons</p>
        <p>Updated: {formattedDate}</p>
      </div>

      {/* Link to the show details page */}
      <div className="mt-4">
        <Link
          to={`/show/${id}`}
          className="text-bd-gray-800 hover:text-blue-600"
        >
          VIEW SHOW
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;