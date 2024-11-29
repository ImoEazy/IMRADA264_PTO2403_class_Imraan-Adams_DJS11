import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { genreMapping } from '../data/genreMapping';
import LoadingState from './LoadingState';

const ShowList = ({ genreFilter, setGenreFilter }) => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        const filteredShows = genreFilter
          ? data.filter((show) => show.genre_id === genreFilter)
          : data;
        setShows(filteredShows);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
        setLoading(false);
      });
  }, [genreFilter]);

  if (loading) return <LoadingState />;

  const sortedShows = [...shows].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="genre-filter" className="mr-2">Filter by Genre:</label>
        <select
          id="genre-filter"
          value={genreFilter || ""}
          onChange={(e) => setGenreFilter(e.target.value)}
        >
          <option value="">All Genres</option>
          {Object.entries(genreMapping).map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedShows.map((show) => (
          <div key={show.id} className="p-4 border rounded-md shadow-lg">
            <img
              src={show.thumbnail}
              alt={show.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">{show.title}</h2>
            <p className="text-sm text-gray-500 mt-2">Genre: {genreMapping[show.genre_id]}</p>
            <p className="text-sm text-gray-600 mt-2">Seasons: {show.seasons.length}</p>
            <p className="text-sm text-gray-600 mt-2">
              Last updated: {new Date(show.last_updated).toLocaleDateString()}
            </p>
            <Link to={`/show/${show.id}`} className="text-blue-500 mt-4 block">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;