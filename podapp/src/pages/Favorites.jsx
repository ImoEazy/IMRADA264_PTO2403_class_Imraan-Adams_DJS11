// src/pages/Favorites.jsx

import React from 'react';
import { useFavorites } from '../context/FavoriteContext';
import EpisodeCard from '../components/EpisodeCard/EpisodeCard';

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div>
      <h1 className="text-3xl font-bold">Favuorite Episodes</h1>
      <div>
        {favorites.map((episode) => (
          <div key={episode.id} className="flex justify-between">
            <EpisodeCard episode={episode} onFavorite={removeFavorite} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;