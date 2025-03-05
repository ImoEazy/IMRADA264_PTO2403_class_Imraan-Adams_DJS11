import React, { useState, useEffect } from 'react';
import usePodcast from '../hooks/usePodcast';
import genreMapping from '../utils/genreMapping';
import ShowCard from './ShowCard';

const ShowList = ({ genreFilter, setGenreFilter }) => {
  const [filteredShows, setFilteredShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // State for the search input
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for A-Z, 'desc' for Z-A
  const { data, loading, error } = usePodcast('https://podcast-api.netlify.app');

  // Function to sort shows
  const sortShows = (shows) => {
    return shows.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });
  };

  // Filter and sort shows based on genre and search query
  useEffect(() => {
    if (data) {
      let shows = data;
      if (genreFilter) {
        shows = shows.filter((show) => show.genres.includes(genreFilter));
      }
      if (searchQuery) {
        const lowerCaseQuery = searchQuery.toLowerCase();
        shows = shows.filter((show) =>
          show.title.toLowerCase().includes(lowerCaseQuery)
        );
      }
      setFilteredShows(sortShows(shows));
    }
  }, [data, genreFilter, searchQuery, sortOrder]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Available Podcasts</h1>

      {/* Search Field */}
      <div>
        <input
          type="text"
          placeholder="Search by show name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 px-4 py-2 border rounded w-full"
        />
      </div>

      {/* Genre Filter */}
      <div className="mt-4">
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

      {/* Sort Button */}
      <button
        onClick={() => setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Sort {sortOrder === 'asc' ? 'Z-A' : 'A-Z'}
      </button>

      {/* Display the list of shows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredShows.length > 0 ? (
          filteredShows.map((show) => <ShowCard key={show.id} show={show} />)
        ) : (
          <div>No shows match your search.</div>
        )}
      </div>
    </div>
  );
};

export default ShowList;