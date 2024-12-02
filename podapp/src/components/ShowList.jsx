import React, { useState, useEffect } from 'react';
import usePodcast from '../hooks/usePodcast';
import genreMapping from '../utils/genreMapping';
import ShowCard from './ShowCard';

const ShowList = ({ genreFilter, setGenreFilter }) => {
  const [filteredShows, setFilteredShows] = useState([]);
  
  // Fetch all shows (previews)
  const { data, loading, error } = usePodcast('https://podcast-api.netlify.app'); 

  // Filter shows based on selected genre
  useEffect(() => {
    if (data) {
      if (genreFilter) {
        // Filter the data by genre
        const filtered = data.filter((show) =>
          show.genres.includes(genreFilter)
        );
        setFilteredShows(filtered);
      } else {
        setFilteredShows(data);
      }
    }
  }, [data, genreFilter]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Podcasts</h1>

      {/* Genre Filter */}
      <div>
        <select
          onChange={(e) => setGenreFilter(Number(e.target.value))}
          value={genreFilter || ''}
        >
          <option value="">All Genres</option>
          {Object.entries(genreMapping).map(([id, genre]) => (
            <option key={id} value={id}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Display the list of shows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default ShowList;