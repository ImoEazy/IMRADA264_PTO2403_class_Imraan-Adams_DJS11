// src/pages/HomePage.jsx

import React, { useState, useEffect } from 'react';
import ShowCard from '../components/ShowCard/ShowCard';
import { useFavorites } from '../context/FavoriteContext';

const HomePage = () => {
  const [shows, setShows] = useState([]);
  const { favorites, addFavorite } = useFavorites();

  useEffect(() => {
    // Fetching shows from the API
    fetch('https://podcast-api.netlify.app')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Podcasts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {shows.map((show) => (
          <ShowCard key={show.id} show={show} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;