import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard/ShowCard';
import { useFavorites } from '../context/FavoriteContext';

// Genre mapping as provided
const genreMapping = {
  1: 'Personal Growth',
  2: 'Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family'
};

const HomePage = () => {
  const [shows, setShows] = useState([]);
  const [filteredShows, setFilteredShows] = useState([]);
  const [genres, setGenres] = useState([]); // For storing genre titles
  const [selectedGenre, setSelectedGenre] = useState('');
  const { favorites, addFavorite } = useFavorites();

  useEffect(() => {
    // Fetching shows from the API
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
        setFilteredShows(data); // Initially, show all podcasts
      })
      .catch((error) => console.error('Error fetching shows:', error));
  
    // Fetching genre data
    const fetchGenres = async () => {
      const genrePromises = Object.keys(genreMapping).map((id) =>
        fetch(`https://podcast-api.netlify.app/genre/${id}`)
          .then((response) => response.json())
          .catch((error) => console.error('Error fetching genre:', error))
      );
  
      const genresData = await Promise.all(genrePromises);
      setGenres(genresData); // Store the genre data (optional, depends on API structure)
    };
  
    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
  
    // If a genre is selected, filter the shows by genre
    if (genre) {
      const filtered = shows.filter((show) =>
        show.genre === parseInt(genre) // Ensure comparison is between integers
      );
      setFilteredShows(filtered);
    } else {
      // If no genre is selected, show all podcasts
      setFilteredShows(shows);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Podcasts</h1>

      {/* Genre Filter Dropdown */}
      <div className="mb-4">
        <label htmlFor="genre" className="block text-lg font-medium">
          Filter by Genre:
        </label>
        <select
          id="genre"
          value={selectedGenre}
          onChange={handleGenreChange}
          className="mt-2 p-2 border rounded"
        >
          <option value="">All Genres</option>
          {/* Map through genres and create the dropdown options */}
          {Object.entries(genreMapping).map(([id, genreTitle]) => (
            <option key={id} value={id}>
              {genreTitle}
            </option>
          ))}
        </select>
      </div>

      {/* Show Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredShows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;