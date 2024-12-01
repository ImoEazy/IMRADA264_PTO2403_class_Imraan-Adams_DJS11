import React from 'react';
import GenreCard from './GenreCard';

const ShowList = ({ shows, setSelectedShow }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {shows.map((show) => (
        <div key={show.id} className="border rounded-lg p-4 hover:shadow-lg cursor-pointer" onClick={() => setSelectedShow(show)}>
          <img src={show.image} alt={show.title} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">{show.title}</h2>
          <p className="text-sm text-gray-500">{show.description}</p>
          <GenreCard genreId={show.genreId} />
        </div>
      ))}
    </div>
  );
};

export default ShowList;